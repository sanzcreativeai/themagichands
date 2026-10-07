import { SALON, waLink } from "@/lib/data";
import { WhatsAppIcon, PhoneIcon, InstagramIcon, PinIcon } from "./Icons";

const WA = waLink(`Hi, I'd like to book an appointment at ${SALON.shortName}.`);

export function EdgeRail() {
  return (
    <nav className="edge" aria-label="Quick contact">
      <a href={WA} target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><WhatsAppIcon /></a>
      <a href={`tel:${SALON.phoneHref}`}><span>Call</span><PhoneIcon /></a>
      <a href={SALON.instagram} target="_blank" rel="noopener noreferrer"><span>Instagram</span><InstagramIcon /></a>
    </nav>
  );
}

export function MobileBar() {
  return (
    <nav className="mbar" aria-label="Quick contact">
      <a href={`tel:${SALON.phoneHref}`}><PhoneIcon />Call</a>
      <a href={WA} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />WhatsApp</a>
      <a href={SALON.maps} target="_blank" rel="noopener noreferrer"><PinIcon />Directions</a>
    </nav>
  );
}
