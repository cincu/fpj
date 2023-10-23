import Link from "next/link";
import { useState } from "react";
import CardsByCategory from "../../components/CardsByCategory/CardsByCategory";
import useLocalStorageState from "use-local-storage-state";
import useSWR from "swr";

export default function WorksPage() {
  const { data, error, isLoading } = useSWR("/api/works", { fallbackData: [] });

  const [selectedCategory, setSelectedCategory] = useLocalStorageState(
    "category",
    {
      defaultValue: "graphics",
    }
  );
  // state to track the currently selected button
  const [activeButton, setActiveButton] = useState(selectedCategory);

  // Function to handle button clicks and update the selected category
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setActiveButton(category);
  };

  const filteredImages = data
    ? data.filter((image) => image.category === selectedCategory)
    : [];

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) return;

  return (
    <>
      <Link href="./">Back</Link>
      <ul className="filterbar">
        <button
          className="button--navigation"
          onClick={() => handleCategorySelect("graphics")}
          style={
            activeButton === "graphics" ? { backgroundColor: "blueviolet" } : {}
          }
        >
          graphics
        </button>
        <button
          className="button--navigation"
          onClick={() => handleCategorySelect("tattoo")}
          style={
            activeButton === "tattoo" ? { backgroundColor: "blueviolet" } : {}
          }
        >
          tattoos
        </button>
        <button
          className="button--navigation"
          onClick={() => handleCategorySelect("items")}
          style={
            activeButton === "items" ? { backgroundColor: "blueviolet" } : {}
          }
        >
          items
        </button>
      </ul>
      <CardsByCategory images={filteredImages} />
    </>
  );
}
