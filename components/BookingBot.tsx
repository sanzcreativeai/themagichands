"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SALON, waLink } from "@/lib/data";

/* --------------------------------------------------------------
   Guided booking concierge. No backend, no API key: it composes
   the enquiry and hands it to WhatsApp, where the salon already is.
-------------------------------------------------------------- */

export type BookIntent = "salon" | "academy";

export function openBooking(intent: BookIntent = "salon") {
  window.dispatchEvent(new CustomEvent<BookIntent>("mh:book", { detail: intent }));
}

export function BookButton({
  children = "Book an appointment",
  intent = "salon",
  className = "btn solid",
}: {
  children?: React.ReactNode;
  intent?: BookIntent;
  className?: string;
}) {
  return (
    <button className={className} onClick={() => openBooking(intent)} type="button">
      {children}
    </button>
  );
}

type StepId = "service" | "who" | "when" | "stylist" | "course" | "name" | "phone" | "done";

type Step = {
  q: string;
  key: string;
  opts?: string[];
  input?: "text" | "tel";
  placeholder?: string;
  next: (v: string) => StepId;
};

const FLOW: Record<Exclude<StepId, "done">, Step> = {
  service: {
    q: "What can we do for you?",
    key: "service",
    opts: ["Cutting", "Colour", "Texture & smoothening", "Braiding", "Grooming", "Bridal", "Academy enquiry"],
    next: (v) => (v === "Academy enquiry" ? "course" : "who"),
  },
  who: {
    q: "Who is the appointment for?",
    key: "who",
    opts: ["Women", "Men", "Children"],
    next: () => "when",
  },
  when: {
    q: "When suits you?",
    key: "when",
    opts: ["Today", "Tomorrow", "This week", "This weekend", "Just asking"],
    next: () => "stylist",
  },
  stylist: {
    q: "Anyone in particular?",
    key: "stylist",
    opts: ["Syed Irfan", "Prashanth", "No preference"],
    next: () => "name",
  },
  course: {
    q: "What would you like to train in?",
    key: "course",
    opts: ["Cutting", "Colour", "Styling & finishing", "Full course", "Not sure yet"],
    next: () => "name",
  },
  name: {
    q: "And your name?",
    key: "name",
    input: "text",
    placeholder: "Your name",
    next: () => "phone",
  },
  phone: {
    q: "A number we can reach you on?",
    key: "phone",
    input: "tel",
    placeholder: "Phone number",
    next: () => "done",
  },
};

const ORDER = ["service", "course", "who", "when", "stylist"] as const;

export default function BookingBot() {
  const [open, setOpen] = useState(false);
  const [stepId, setStepId] = useState<StepId>("service");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [stack, setStack] = useState<StepId[]>([]);
  const [draft, setDraft] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const intent = (e as CustomEvent<BookIntent>).detail ?? "salon";
      setAnswers(intent === "academy" ? { service: "Academy enquiry" } : {});
      setStack([]);
      setDraft("");
      setStepId(intent === "academy" ? "course" : "service");
      setOpen(true);
    };
    window.addEventListener("mh:book", onOpen);
    return () => window.removeEventListener("mh:book", onOpen);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open && FLOW[stepId as Exclude<StepId, "done">]?.input) {
      const t = window.setTimeout(() => inputRef.current?.focus(), 90);
      return () => window.clearTimeout(t);
    }
  }, [open, stepId]);

  const advance = useCallback(
    (key: string, value: string, next: StepId) => {
      setAnswers((a) => ({ ...a, [key]: value }));
      setStack((s) => [...s, stepId]);
      setDraft("");
      setStepId(next);
    },
    [stepId]
  );

  const back = useCallback(() => {
    setStack((s) => {
      const copy = [...s];
      const prev = copy.pop();
      setStepId(prev ?? "service");
      return copy;
    });
    setDraft("");
  }, []);

  const rows = (
    [
      ["For", answers.service || "Appointment"],
      ["Course", answers.course],
      ["Who", answers.who],
      ["When", answers.when],
      ["Stylist", answers.stylist && answers.stylist !== "No preference" ? answers.stylist : undefined],
      ["Name", answers.name],
      ["Phone", answers.phone],
    ] as [string, string | undefined][]
  ).filter((r): r is [string, string] => Boolean(r[1]));

  const message =
    `Hi, I'd like to book at ${SALON.shortName}.\n\n` +
    rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  const step = stepId === "done" ? null : FLOW[stepId];

  return (
    <>
      <div className="scrim" data-open={open} onClick={() => setOpen(false)} />
      <aside className="bot" data-open={open} role="dialog" aria-modal="true" aria-label="Book an appointment">
        <div className="bot-head">
          <b>{answers.service === "Academy enquiry" ? "Academy enquiry" : "Book an appointment"}</b>
          <button className="bot-x" onClick={() => setOpen(false)} aria-label="Close">&times;</button>
        </div>

        <div className="bot-body">
          {stepId !== "done" && (
            <div className="trail">
              {ORDER.map((k) => answers[k] && <span className="crumb" key={k}>{answers[k]}</span>)}
            </div>
          )}

          {step && (
            <>
              <p className="bot-q">{step.q}</p>

              {step.opts && (
                <div className="bot-opts">
                  {step.opts.map((o) => (
                    <button key={o} className="chip" type="button" onClick={() => advance(step.key, o, step.next(o))}>
                      {o}
                    </button>
                  ))}
                </div>
              )}

              {step.input && (
                <>
                  <div className="bot-field">
                    <input
                      ref={inputRef}
                      id={`bot-${step.key}`}
                      type={step.input}
                      value={draft}
                      placeholder={step.placeholder}
                      autoComplete={step.input === "tel" ? "tel" : "name"}
                      onChange={(e) => setDraft(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && draft.trim()) {
                          e.preventDefault();
                          advance(step.key, draft.trim(), step.next(draft));
                        }
                      }}
                    />
                  </div>
                  <div style={{ marginTop: 14 }}>
                    <button
                      className="btn solid"
                      type="button"
                      disabled={!draft.trim()}
                      onClick={() => draft.trim() && advance(step.key, draft.trim(), step.next(draft))}
                    >
                      Continue
                    </button>
                  </div>
                </>
              )}
            </>
          )}

          {stepId === "done" && (
            <>
              <p className="bot-q">That&rsquo;s everything.</p>
              <div className="sum">
                <dl>
                  {rows.map(([k, v]) => (
                    <div key={k} style={{ display: "contents" }}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <a
                className="btn solid"
                style={{ width: "100%" }}
                href={waLink(message)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Send on WhatsApp
              </a>
              <p className="bot-note">
                This opens WhatsApp with your details already written out. Nothing is sent until you press send
                there. We confirm the slot and the price before you come in.
              </p>
            </>
          )}

          {stack.length > 0 && (
            <button className="bot-back" type="button" onClick={back}>&larr; Back</button>
          )}
        </div>
      </aside>
    </>
  );
}
