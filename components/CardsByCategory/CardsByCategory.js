import Link from "next/link";
import styles from "./CardsByCategory.module.css";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function CardsByCategory({ images }) {
  const router = useRouter();
  const { data: session } = useSession();

  async function deleteWork(id) {
    await fetch(`/api/works/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }

  return (
    <div className={styles["cards--container"]}>
      {images.map((image) => (
        <div className={styles["card--card"]} key={image._id}>
          <Link
            href={
              image.category === "shop"
                ? `/shop/${image._id}`
                : `/works/${image._id}`
            }
            image={image}
          >
            <img
              alt={image.title}
              width={250}
              src={image.imageUrl}
              loading="lazy" // Lazy loading attribute
            />
          </Link>
          <div className={styles["container--admin"]}>
            {session && (
              <button onClick={() => deleteWork(image._id)} type="button">
                -
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
