import { useState } from "react";
import React from "react";
import Link from "next/link";

export default function Card({ image }) {
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(image.title);
      alert("Image title copied to clipboard.");
    } catch (error) {
      console.error("Unable to copy to clipboard:", error);
    }
  };
  const handleAppreciate = async () => {
    try {
      await fetch("/api/send-appreciation", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ imageTitle: image.title }),
      });
      alert("Appreciation mail sent successfully");
    } catch (error) {
      console.error("unable to send the mail");
      alert("unable to send the mail");
    }
  };

  return (
    <div className="card--container">
      <img alt={image.title} width={500} src={image.imageUrl} />

      <h2>{image.title}</h2>
      {image.category === "graphics" && <p>{image.availableForms}</p>}

      {image.category === "tattoo" && (
        <div className="tattoo--container">
          <p>{image.dateOfTattoo}</p>
          <p>{image.durationOfTattoo}</p>
          <div className="buttons--container">
            <button
              action="canancansucaner@gmail.com"
              method="post"
              onClick={handleAppreciate}
            >
              appreciate
            </button>
            <button id={image.title} onClick={handleCopyToClipboard}>
              reference
            </button>
          </div>
        </div>
      )}

      {image.category === "items" && (
        <div className="item--container">
          <p>Price : {image.price}</p>
          <div className="buttons--container">
            <Link href="./cart">
              <button>add2basket</button>
            </Link>
            <Link href="/payment">order now </Link>
          </div>
        </div>
      )}
    </div>
  );
}
