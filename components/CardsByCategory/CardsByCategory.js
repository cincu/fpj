import Card from "../Card/Card";

export default function CardsByCategory({ images }) {
  return (
    <div className="cards--container">
      {images.map((image, index) => (
        <Card key={index} image={image} />
      ))}
    </div>
  );
}
