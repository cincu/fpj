import Link from "next/link";
export default function termsAndConditionsPage() {
  return (
    <>
      <Link href="/contact-me" className="back--button">
        ↽
      </Link>
      <hr />
      <div>
        <h2>Terms and Conditions</h2>
        <h3>Health and Safety</h3>
        Client Health: Clients must disclose any health conditions, allergies,
        or medications that may affect the tattoo process. We prioritize your
        safety and well-being.
        <h3>Sanitary Regulations</h3>
        Our studio adheres to strict hygiene and sanitation standards. All
        equipment is sterilized, and single-use needles are used to prevent
        cross-contamination. <h3>Age requirements</h3>
        Clients must be 18 years or older to receive a tattoo. Valid
        identification may be required. <h3>Appointments and Deposits</h3>
        Booking: Appointments are scheduled in advance. A deposit may be
        required to secure your booking, which will be deducted from the total
        cost. Rescheduling: If you need to reschedule, please provide at least
        48 hours- notice. Deposits are non-refundable but may be transferred to
        your rescheduled appointment. No-Show: Failure to show up for a
        scheduled appointment without notice may result in forfeiture of your
        deposit.
        <h3>Communication</h3> Email Communication: For scheduling, inquiries,
        and consultations, please use email as the primary mode of
        communication. This helps us maintain clear and documented records of
        our discussions. Response Time: We will respond to emails promptly,
        usually within 48 hours. Your patience and understanding are
        appreciated.
        <h3>Design and Artwork</h3> Consultation: Consultations are recommended
        for custom designs. Please provide references and ideas to help us
        create your unique tattoo. Artwork Approval: You will have the
        opportunity to review and approve the final design before the tattooing
        process begins. Payment: Pricing: Tattoo prices are based on size,
        complexity, and estimated time. Payment is due in full at the end of the
        session. Cash Only: We accept cash payments only. Please come prepared
        with the appropriate amount. <h3> Cancellations</h3> Cancellation
        Policy: If you must cancel, please provide at least 12 hours- notice. We
        understand that unforeseen circumstances can arise. No refund on the
        deposit. Artist-s Discretion: We reserve the right to cancel or refuse
        service if necessary, in accordance with professional ethics and health
        standards.
        <h3>Aftercare</h3> Tattoo Aftercare: You will receive detailed aftercare
        instructions to ensure proper healing. Following these instructions is
        crucial for the longevity and appearance of your tattoo. By booking an
        appointment with us, you agree to these terms and conditions. We
        prioritize your health, safety, and satisfaction throughout the
        tattooing process. If you have any questions or concerns, please feel
        free to contact us via email.
      </div>
    </>
  );
}
