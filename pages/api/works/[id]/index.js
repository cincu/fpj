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
  //editing the work
  if (request.method === "PUT") {
    try {
      console.log(`request-body: ${request.body}`);
      await Work.findByIdAndUpdate(id, request.body);
      response.status(201).json({ status: `Work ${id} updated!` });
    } catch (error) {
      console.log(`Error updating the work!${error}`);
    }
  }
  //deleting the work
  if (request.method === "DELETE") {
    console.log(`id is here : ${id}`);
    await Work.findByIdAndDelete(id);
    return response
      .status(200)
      .json({ status: `Work ${id} succesfully deleted!` });
  }
  //adding the piece
  if (request.method === "POST") {
    const newWork = await Work.create(request.body);
    return response.status(200).json(newWork);
  }
}
