import Card from "@/components/Card/Card";
import useSWR from "swr";
import { useRouter } from "next/router";
import EditForm from "@/components/EditForm";
import { useSession } from "next-auth/react";
import Link from "next/link";
export default function WorksDetailsPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const { id } = router.query;
  console.log(router.query.id);

  const { data, error, isLoading, mutate } = useSWR("/api/works", {
    fallbackData: [],
  });
  const currentImage = data.find((image) => image._id === id);
  console.log(currentImage);

  async function editWork(currentImage) {
    const response = await fetch(`/api/works/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentImage),
    });
    if (response.ok) {
      mutate(), router.push("/works");
    } else {
      console.log(`Error: ${response.status}`);
    }
    console.log("work edited ?");
  }
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div className="simple-shape-two">loading...</div>;
  if (!currentImage) return;
  return (
    <>
      <Link href="/works" className="back--button">
        ↽
      </Link>
      <Card image={currentImage} />
      {session && (
        <EditForm
          onSubmit={editWork}
          formName={"edit-work"}
          defaultData={currentImage}
        />
      )}
    </>
  );
}