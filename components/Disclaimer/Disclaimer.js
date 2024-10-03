import styles from "./Disclaimer.module.css";
import Image from "next/image";

export default function Disclaimer() {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1>About Me</h1>
        <p>
          Welcome to my creative space, where graphic design and tattoo artistry
          come together with authenticity and purpose. I am driven by a deep
          love for the craft and a commitment to creating original, meaningful
          work that stands out. I am all about breaking away from the
          conventional and collaborating with people who value creativity and
          quality. Whether it is graphic design that tells your story or tattoos
          that capture a personal moment, my goal is to bring your ideas to life
          in a way that feels true to you. This is a place where every project
          is a genuine collaboration, and every piece is crafted with care and
          intention. If you are looking for a designer and artist who values
          individuality and the art itself, lets create something together that
          truly resonates.
        </p>
      </div>

      <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/image1.jpg"
            alt="Image 1"
            width={400}
            height={400}
            className={styles.image1}
          />
          <Image
            src="/image2.jpg"
            alt="Image 2"
            width={300}
            height={400}
            className={styles.image2}
          />
          <Image
            src="/image3.jpg"
            alt="Image 3"
            width={200}
            height={400}
            className={styles.image3}
          />
        </div>
      </div>
    </div>
  );
}
