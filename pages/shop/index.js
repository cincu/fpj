import { useEffect, useState } from "react";
import CardsByCategory from "@/components/CardsByCategory/CardsByCategory";
import EditForm from "@/components/EditForm/EditForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "./ShopPage.module.css";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function ShopPage() {
  const router = useRouter();

  const { data, error, isLoading } = useSWR("/api/shop", fetcher);
  const { data: session } = useSession();
  const [filteredImages, setFilteredImages] = useState();
  console.log("session is:", session);
  // set the initial state to "graphics"
  const [selectedCategory, setSelectedCategory] = useLocalStorageState("shop", {
    defaultValue: "shop",
  });
  const [activeButton, setActiveButton] = useState(selectedCategory);

  //state for the add form visibility
  const [isFormVisible, setIsFormVisible] = useState(false);

  //add form submit
  async function addWork(id) {
    const response = await fetch(`/api/shop/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
    });
    if (response.ok) {
      router.push("/shop");
    }
  }
  // state to track the currently selected button

  // Function to handle button clicks and update the selected category
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setActiveButton(category);
  };

  useEffect(() => {
    if (data) {
      setFilteredImages(
        data.filter((image) => image.category === selectedCategory)
      );
    }
  }, [data, selectedCategory]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading art</div>;
  if (!filteredImages) return;
  return (
    <div>
      <div className={styles.filterbar}>
        <button
          className={styles["button--navigation"]}
          onClick={() => handleCategorySelect("shop")}
          style={
            activeButton === "shop" ? { borderBottom: "1px solid black" } : {}
          }
        >
          shop
        </button>
        {session && (
          <button
            onClick={() => setIsFormVisible((prev) => !prev)} // Show the form on button click
            type="button"
            className={styles.crud}
          >
            +
          </button>
        )}
      </div>
      {isFormVisible && <EditForm onSubmit={addWork} />}
      <CardsByCategory images={filteredImages} />
    </div>
  );
}
