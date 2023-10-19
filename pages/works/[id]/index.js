import Card from "../../../components/Card/Card";
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
export default function WorksDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query.id);

  const { data, error, isLoading } = useSWR("/api/works", { fallbackData: [] });
  const currentImage = data.find((image) => image._id === id);
  console.log(currentImage);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!currentImage) return;
  return (
    <>
      <Link href="./">Back</Link>
      <Card image={currentImage} />
    </>
  );
}
