import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
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
    <div className="cards--container">
      {images.map((image) => (
        <div className="card--card" key={image.id}>
          <Link href={`/works/${image._id}`} image={image}>
            <img alt={image.title} width={250} src={image.imageUrl} />
          </Link>
          <div className="container--admin">
            {session && (
              <button
                onClick={() => deleteWork(image._id)}
                type="button"
                className="crud button--delete"
              >
                -
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
