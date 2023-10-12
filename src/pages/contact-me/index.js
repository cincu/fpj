import Link from "next/link";
import Form from "../../../public/components/Form/Form";
import Disclaimer from "../../../public/components/Disclaimer/Disclaimer";
export default function AboutMePage() {
  return (
    <>
      <Link href="./">Back</Link>
      <Disclaimer />
      <Form />
    </>
  );
}
