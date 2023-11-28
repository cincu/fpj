import styles from "./Card.module.css";
import React from "react";
import Link from "next/link";
import { MapInteractionCSS } from "react-map-interaction";
import useLocalStorageState from "use-local-storage-state";
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
  const handleAddCart = async () => {
    const quantity = document.getElementById("quantity").value;
    console.log("image", image);
    let cartItem = {
      id: image._id,
      title: image.title,
      quantity: parseInt(quantity, 10),
      price: image.price,
      imageUrl: image.imageUrl,
    };
    let currentCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    let existingItem = currentCart.find((item) => item.id === image._id);

    if (existingItem) {
      currentCart.splice(currentCart.indexOf(existingItem), 1);

      cartItem = {
        ...existingItem,
        quantity: existingItem.quantity + cartItem.quantity,
      };
    }
    currentCart.push(cartItem);
    localStorage.setItem("shoppingCart", JSON.stringify(currentCart));
  };

  return (
    <div className={styles["card--container"]}>
      <MapInteractionCSS
        showControls
        defaultValue={{
          scale: 1,
          translation: { x: 0, y: 20 },
        }}
        minScale={0.5}
        maxScale={3}
        translationBounds={{
          xMax: 400,
          yMax: 200,
        }}
      >
        <img
          className={styles["image--detail"]}
          alt={image.title}
          width={500}
          src={image.imageUrl}
        />
      </MapInteractionCSS>
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
              copy
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
            <Link href="/payment-page">
              <button>order now</button>
            </Link>
            <button type="submit" onClick={handleAddCart}>
              add to cart
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
