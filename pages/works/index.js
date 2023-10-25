import Link from "next/link";
import { useState } from "react";
import CardsByCategory from "../../components/CardsByCategory/CardsByCategory";
import EditForm from "../../components/EditForm";
import { useSession } from "next-auth/react";

// import useLocalStorageState from "use-local-storage-state";
import useSWR from "swr";
export default function WorksPage() {
  const { data, error, isLoading } = useSWR("/api/works", { fallbackData: [] });
  const { data: session } = useSession();
  console.log(session);
  // Set the initial state to "graphics"
  const [selectedCategory, setSelectedCategory] = useState("graphics");

  //state for the add form visibility
  const [isFormVisible, setIsFormVisible] = useState(false);

  //add form submit
  async function addWork(id) {
    const response = await fetch(`/api/works/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
    });
    if (response.ok) {
      router.push("/");
    }
  }
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
        {session && (
          <button
            onClick={() => setIsFormVisible((prev) => !prev)} // Show the form on button click
            type="button"
            className="crud button--add"
          >
            +
          </button>
        )}
      </ul>
      {isFormVisible && <EditForm onSubmit={addWork} />}
      <CardsByCategory images={filteredImages} />
    </>
  );
}
