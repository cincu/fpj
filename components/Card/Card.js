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
      alert("Appreciation sent to creator!");
    } catch (error) {
      console.error("unable to send the mail");
      alert("unable to send the mail");
    }
  };

  return (
    <div className="card--container">
      <img alt={image.title} width={500} src={image.imageUrl} />

      <h2>{image.title}</h2>
      {image.category === "graphics" && (
        <div className="graphic--container">
          <hr className="breaker--hr" />
          <p>{image.availableForms}</p>
        </div>
      )}

      {image.category === "tattoo" && (
        <div className="tattoo--container">
          <hr className="breaker--hr" />
          <p className="align--right">{image.dateOfTattoo}</p>
          <p className="align--right">{image.durationOfTattoo}</p>
          <div className="buttons--container">
            <button
              action={process.env.SENDER_MAIL}
              method="post"
              className="button--group"
              onClick={handleAppreciate}
            >
              show interest
            </button>
            <button
              className="button--group"
              id={image.title}
              onClick={handleCopyToClipboard}
            >
              reference
            </button>
          </div>
        </div>
      )}

      {image.category === "shop" && (
        <div className="shop--container">
          <hr className="breaker--hr" />
          <p className="align--right">Price : {image.price}</p>
          <div className="buttons--container">
            <Link href="/payment-page">
              <button>order now</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
