import Link from "next/link";
import Form from "../../../public/components/Form/Form";
import Disclaimer from "../../../public/components/Disclaimer/Disclaimer";

export default function AboutMePage() {
  async function addAppointment(appointment) {
    const response = await fetch(`/api/places`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointment),
    });
    if (response.ok) {
      router.push("/");
    }
  }
  return (
    <>
      <Link href="./">Back</Link>
      <Disclaimer />
      <Form onSubmit={addAppointment} />
    </>
  );
}
