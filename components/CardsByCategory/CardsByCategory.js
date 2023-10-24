import Link from "next/link";
export default function CardsByCategory({ images }) {
  return (
    <div className="cards--container">
      {images.map((image, index) => (
        <>
          <Link href={`/works/${image._id}`} key={index} image={image}>
            <img alt={image.title} width={250} src={image.imageUrl} />
          </Link>
        </>
      ))}
    </div>
  );
}
