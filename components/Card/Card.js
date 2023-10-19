import { useState } from "react";
import React from "react";

export default function Card({ image }) {
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(image.title);
      alert("Image title copied to clipboard.");
    } catch (error) {
      console.error("Unable to copy to clipboard:", error);
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
            <button>appreciate</button>
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
            <button href="./basket-page">add2basket</button>
            <button href="./payment-page">order now</button>
          </div>
        </div>
      )}
    </div>
  );
}
