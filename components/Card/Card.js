export default function Card({ image }) {
  return (
    <div className={`detail card-${image.category}`}>
      <img
        alt={`image is called ${image.title}`}
        width={300}
        height={200}
        src={image.imageUrl}
      />
      <h2>{image.title}</h2>
      {image.category === "graphics" && <p>{image.availableForms}</p>}

      {image.category === "tattoo" && (
        <>
          <p>{image.dateOfTattoo}</p>
          <p>{image.durationOfTattoo}</p>
        </>
      )}

      {image.category === "item" && (
        <>
          <button href="./basket-page">add to the basket</button>
          <button href="./payment-page">order now</button>
          <p>{image.price}</p>
        </>
      )}

      <button id={image._id}>reference</button>
      <button>appreciate</button>
    </div>
  );
}
