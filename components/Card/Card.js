import styles from "./Card.module.css";
import React from "react";
import { useState } from "react";
import RequestForm from "../RequestForm/RequestForm";
export default function Card({ image }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
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
  const handleSendRequest = async () => {
    const quantity = document.getElementById("quantity").value;
    try {
      await fetch("/api/send-request", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          requestTitle: image.title,
          requestPrice: image.price,
          requestQuantity: parseInt(quantity, 10),
        }),
      });
      alert("Request sent! Expect follow-up e-mail for further information");
    } catch (error) {
      console.error("unable to send the request");
      alert("unable to send the request");
    }
  };

  return (
    <div className={styles["card--container"]}>
      <img
        className={styles["image--detail"]}
        alt={image.title}
        width={500}
        src={image.imageUrl}
      />
      <h3>{image.title}</h3>
      {image.category === "graphics" && (
        <div>
          <hr className={styles["breake--graphics"]} />
          <p>{image.availableForms}</p>
        </div>
      )}

      {image.category === "tattoo" && (
        <div>
          <hr className={styles["large--divider"]} />
          <p className={styles["align--right"]}>{image.dateOfTattoo}</p>
          <p className={styles["align--right"]}>{image.durationOfTattoo}</p>
          <div className="buttons--container">
            <button
              action={process.env.SENDER_MAIL}
              method="post"
              onClick={handleAppreciate}
            >
              love
            </button>
            <button id={image.title} onClick={handleCopyToClipboard}>
              Copy Id
            </button>
          </div>
        </div>
      )}

      {image.category === "shop" && (
        <div>
          <hr />
          <div className="buttons--container">
            <p>
              Price :<strong> {image.price}</strong>
            </p>
            <p>
              Available Size/Format: <strong>{image.availableForms}</strong>
            </p>
            {image.availableForms.length === 0 && (
              <p className={styles["button--tag"]}>One Size</p>
            )}
          </div>
          <form className={styles["order--form"]} htmlFor="quantity">
            <label htmlFor="quantity">Amount</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              defaultValue={1}
              min="1"
              max="10"
              required
            />
            <button
              type="button"
              onClick={() => setIsFormVisible((prev) => !prev)}
            >
              Buy
            </button>
            {isFormVisible && <RequestForm onSubmit={handleSendRequest} />}
          </form>
        </div>
      )}
    </div>
  );
}
