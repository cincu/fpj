import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import logo from "../images/logo_1.png";
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
export default function Home() {
  return (
    <Div>
      <Image src={logo} width={700} alt="Logo Png" />
      <Link href="./contact-me">contact</Link>
      <Link href="./works">works</Link>
    </Div>
  );
}
