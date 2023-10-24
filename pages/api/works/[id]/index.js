import dbConnect from "../../../../db/connect";
import Work from "../../../../db/models/Work";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const works = await Work.findOne({ _id: id });

    if (!works) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(works);
  }
  //editing the piece

  if (request.method === "PUT") {
    try {
      console.log(`request-body: ${request.body}`);
      console.log(`id: ${id}`);
      const work = await Work.findByIdAndUpdate(id, request.body, {
        new: true,
      });
      console.log(work);
      response.status(201).json({ status: `Work ${id} updated!` });
    } catch (error) {
      console.log(`Error updating the work!${error}`);
    }
  }
}
