import Link from "next/link";

export default function AboutMePage() {
  return (
    <>
      <Link href="./">Back</Link>
      <h1>disclaimer</h1>
      <p>a graphic designer, tattoo artist</p>
      <div>
        <h2>form component</h2>
        <label>
          bla:<input></input>
        </label>
        <label>
          request:<input></input>
        </label>
        <label>
          date:<input></input>
        </label>
      </div>
      <button>submit</button>
      <p>aida form</p>
    </>
  );
}
