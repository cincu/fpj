import dbConnect from "../../../../db/connect";
import Work from "../../../../db/models/Work";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const works = await Work.findById(id);

    if (!works) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(works);
  }
}
