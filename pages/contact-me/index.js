import Link from "next/link";
import Form from "../../components/Form/Form";
import Disclaimer from "../../components/Disclaimer/Disclaimer";
import { useRouter } from "next/router";

export default function AboutMePage() {
  const router = useRouter();
  async function addAppointment(formData) {
    const response = await fetch("/api/contact-me/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    });
    console.log(formData);
    if (response.ok) {
      alert("Form submit succesful");
      router.push("/");
    } else {
      alert("Try again");
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
