import { useState } from "react";
import Link from "next/link";

export default function MySidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      {sidebarOpen ? (
        <button className="closebtn" onClick={() => setSidebarOpen(false)}>
          x
        </button>
      ) : (
        <button className="openbtn" onClick={() => setSidebarOpen(true)}>
          ☰
        </button>
      )}
      {sidebarOpen && (
        <>
          <Link href="/about-me">about</Link>
          <Link href="/contact-me">booking</Link>
          <Link href="/works">works</Link>
          <Link href="/shop">shop</Link>
        </>
      )}
    </div>
  );
}