import { useState } from "react";
import CardsByCategory from "@/components/CardsByCategory/CardsByCategory";
import EditForm from "@/components/EditForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

export default function WorksPage() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR("/api/works", {
    fallbackData: [],
  });
  const { data: session } = useSession();
  console.log("session is:", session);
  // set the initial state to "graphics"
  const [selectedCategory, setSelectedCategory] =
    useLocalStorageState("graphics");

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
      router.push("/works");
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
  if (isLoading) return <div className="simple-shape-two">loading...</div>;
  if (!data) return;
  return (
    <>
      <hr className="breaker--hr padded" />

      <div className="filterbar">
        <button
          className="button--navigation"
          onClick={() => handleCategorySelect("graphics")}
          style={
            activeButton === "graphics"
              ? { backgroundColor: "black", color: "white" }
              : {}
          }
        >
          graphics
        </button>
        <button
          className="button--navigation"
          onClick={() => handleCategorySelect("tattoo")}
          style={
            activeButton === "tattoo"
              ? { backgroundColor: "black", color: "white" }
              : {}
          }
        >
          tattoos
        </button>
        <button
          className="button--navigation"
          onClick={() => handleCategorySelect("shop")}
          style={
            activeButton === "shop"
              ? { backgroundColor: "black", color: "white" }
              : {}
          }
        >
          shop
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
      </div>
      {isFormVisible && <EditForm onSubmit={addWork} />}
      <CardsByCategory images={filteredImages} />
    </>
  );
}
