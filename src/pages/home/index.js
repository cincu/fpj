import Link from "next/link";
import { useRouter } from "next/router";
export default function HomePage() {
  return (
    <div>
      <Link href="./">Back</Link>
      <div>
        <Link href="home/about-me/">
          <h2>About Me</h2>
        </Link>
        <Link href="home/works/">
          <h2>Works</h2>
        </Link>
      </div>
    </div>
  );
}
