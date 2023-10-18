import Card from "../../../components/Card/Card";
import { useRouter } from "next/router";
import useSWR from "swr";
export default function WorksDetailsPage({}) {
  const router = useRouter();
  const { id } = router.query;
  const image = useSWR(`/api/works/${id}`, []);
  console.log(image);
  return <h2>{image.title} </h2>;
}
