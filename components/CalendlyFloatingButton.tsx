import { CalendarDays } from "lucide-react";
import "./calendly-floating-button.css";

const CALENDLY_URL = "https://calendly.com/shoaib-shomansolutions/30min";

export default function CalendlyFloatingButton() {
  return (
    <a
      className="calendly-floating-button"
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Schedule an appointment on Calendly"
    >
      <span className="calendly-floating-button__tooltip" aria-hidden="true">
        Schedule an appointment
      </span>
      <CalendarDays size={25} strokeWidth={2.2} aria-hidden="true" />
    </a>
  );
}
