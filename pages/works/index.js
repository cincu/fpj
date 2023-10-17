import Link from "next/link";
import { useState, useEffect } from "react";
import CardsByCategory from "../../components/CardsByCategory/CardsByCategory";
import useLocalStorageState from "use-local-storage-state";
import useSWR from "swr";

export default function WorksPage() {
  const { data, error, isLoading } = useSWR("/api/works", { fallbackData: [] });

  const [selectedCategory, setSelectedCategory] = useLocalStorageState(
    "graphics",
    {
      defaultValue: [],
    }
  );
  const [images, setImages] = useState(data);
  useEffect(() => {
    const filteredImages = data.filter(
      (image) => image.category === selectedCategory
    );
    setImages(filteredImages);
  }, [selectedCategory, data]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) return;

  console.log(data);

  // const [images, setImages] = useState([]);

  // const initialImages = data.filter((image) => image.category === "graphics");

  return (
    <>
      <Link href="./">Back</Link>
      <div className="filterbar">
        <button onClick={() => setSelectedCategory("graphics")}>
          graphics
        </button>
        <button onClick={() => setSelectedCategory("tattoo")}>tattoos</button>
        <button onClick={() => setSelectedCategory("items")}>items</button>
      </div>
      <CardsByCategory images={images} category={selectedCategory} />
    </>
  );
}
