import { useEffect, useState, useMemo } from "react";
import CardsByCategory from "@/components/CardsByCategory/CardsByCategory";
import EditForm from "@/components/EditForm/EditForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "./WorksPage.module.css";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function WorksPage() {
  const router = useRouter();

  const { data, error, isLoading } = useSWR("/api/works", fetcher);
  const { data: session } = useSession();

  const [selectedCategory, setSelectedCategory] = useLocalStorageState(
    "works",
    {
      defaultValue: "graphics",
    }
  );
  const [activeButton, setActiveButton] = useState(selectedCategory);

  // State for the add form visibility
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Memoized filtered images
  const filteredImages = useMemo(() => {
    if (data) {
      return data.filter((image) => image.category === selectedCategory);
    }
    return [];
  }, [data, selectedCategory]);

  // Add form submit
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

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setActiveButton(category);
  };

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!filteredImages.length) return null;
  return (
    <div>
      <div className={styles.filterbar}>
        <button
          className={styles["button--navigation"]}
          onClick={() => handleCategorySelect("graphics")}
          style={
            activeButton === "graphics"
              ? { borderBottom: "1px solid black" }
              : {}
          }
        >
          graphics
        </button>
        <button
          className={styles["button--navigation"]}
          onClick={() => handleCategorySelect("tattoos")}
          style={
            activeButton === "tattoo" ? { borderBottom: "1px solid black" } : {}
          }
        >
          tattoos
        </button>
        <button
          className={styles["button--navigation"]}
          onClick={() => handleCategorySelect("tattoos")}
          style={
            activeButton === "objects"
              ? { borderBottom: "1px solid black" }
              : {}
          }
        >
          objects
        </button>
        <button
          className={styles["button--navigation"]}
          onClick={() => handleCategorySelect("tattoos")}
          style={
            activeButton === "type" ? { borderBottom: "1px solid black" } : {}
          }
        >
          type
        </button>
        {session && (
          <button
            onClick={() => setIsFormVisible((prev) => !prev)}
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
