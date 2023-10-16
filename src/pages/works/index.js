import Link from "next/link";
import { useEffect, useState } from "react";
import CardsByCategory from "@/components/CardsByCategory/CardsByCategory";

export default function WorksPage({ images: imagesAsProp }) {
  const [images, setImages] = useState(imagesAsProp);
  const [selectedCategory, setSelectedCategory] = useState("graphics");
  useEffect(() => {
    setImages(images.filter((image) => image.category === selectedCategory));
  }, [selectedCategory]);
  return (
    <>
      <Link href="./">Back</Link>
      <div className="filterbar">
        <button onClick={() => setSelectedCategory("graphics")}>
          graphics
        </button>
        <button onClick={() => setSelectedCategory("tattoos")}>tattoos</button>
        <button onClick={() => setSelectedCategory("items")}>items</button>
      </div>
      <CardsByCategory images={images} category={selectedCategory} />
    </>
  );
}
