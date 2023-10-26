import Link from "next/link";
export default function Navigation() {
  return (
    <div className="div--navigation">
      <Link className="navigation--links" href="/">
        home
      </Link>
      <Link className="navigation--links" href="/collection">
        collection
      </Link>
      <Link className="navigation--links" href="/contact-me">
        booking
      </Link>
    </div>
  );
}
