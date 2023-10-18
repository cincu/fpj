import { useState } from "react";
import Link from "next/link";

export default function Card({ image }) {
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(image._id);
      alert("Image ID copied to clipboard.");
    } catch (error) {
      console.error("Unable to copy to clipboard:", error);
    }
  };
  return (
    <div className="card--container">
      {image && (
        <div>
          <Link href={`/works/${image._id}`}>
            <img
              alt={`image is called ${image.title}`}
              width={250}
              src={image.imageUrl}
            />
          </Link>
          <h2>{image.title}</h2>
          {image.category === "graphics" && <p>{image.availableForms}</p>}

          {image.category === "tattoo" && (
            <>
              <p>{image.dateOfTattoo}</p>
              <p>{image.durationOfTattoo}</p>
              <div className="buttons--container">
                <button>appreciate</button>
                <button id={image._id} onClick={handleCopyToClipboard}>
                  reference
                </button>
              </div>
            </>
          )}

          {image.category === "items" && (
            <>
              <p>Price : {image.price}</p>
              <div className="buttons--container">
                <button href="./basket-page">add2basket</button>
                <button href="./payment-page">order now</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
