import styles from "./MySidebar.module.css";
import { useState } from "react";
import Link from "next/link";
export default function MySidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      {sidebarOpen ? (
        <button
          className={styles["closebtn"]}
          onClick={() => setSidebarOpen(false)}
        >
          x
        </button>
      ) : (
        <button
          className={styles["openbtn"]}
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>
      )}
      {sidebarOpen && (
        <>
          <Link href="/about-me">about</Link>
          <Link href="/contact-me">booking</Link>
          <Link href="/works">works</Link>
        </>
      )}
    </div>
  );
}
