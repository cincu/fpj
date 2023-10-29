import Form from "@/components/Form/Form";
import { useRouter } from "next/router";
import { useState } from "react";
export default function AboutMePage() {
  const router = useRouter();
  const [localFormData, setLocalFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    instagram: "",
    placement: "choose",
    tattooSize: "",
    references: "",
    tattooBudget: "",
    bookingDate: "",
    medicalInfo: "",
  });

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
      <Form
        onSubmit={addAppointment}
        localFormData={localFormData}
        setLocalFormData={setLocalFormData}
      />
    </>
  );
}
