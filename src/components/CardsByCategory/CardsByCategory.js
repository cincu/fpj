import Card from "../Card/Card";

export default function CardsByCategory({ filteredImages }) {
  return (
    <div className="cards">
      {filteredImages.map((image, index) => (
        <Card key={index} image={image} />
      ))}
    </div>
  );
}
