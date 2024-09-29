import Disclaimer from "@/components/Disclaimer/Disclaimer";
import Link from "next/link";
import Image from "next/image";
export default function AboutMe() {
  return (
    <>
      <Image src="/artist_photo.png" width={300} height={200} alt="profile" />

      <Image src="/artist_photo.png" width={300} height={200} alt="profile" />
      <Image src="/artist_photo.png" width={300} height={200} alt="profile" />
      <Image src="/artist_photo.png" width={300} height={200} alt="profile" />

      <Disclaimer />
    </>
  );
}
