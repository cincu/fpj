import Link from "next/link";
import TermsAndConditions from "@/components/TermsAndConditions/TermsAndConditions";
export default function TermsAndConditionsPage() {
  return (
    <div>
      <Link href="/contact-me" className="back--button">
        ↽
      </Link>
      <TermsAndConditions />
    </div>
  );
}
