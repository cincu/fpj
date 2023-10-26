import dbConnect from "../../../db/connect";
import Work from "../../../db/models/Work";

export default async function handler(request, response) {
  await dbConnect();
  try {
    if (request.method === "GET") {
      const works = await Work.find();
      return response.status(200).json(works);
    }
    //USER STORY:5:ADMIN ACCESS
    //
    // if (request.method === "POST") {
    // const newWorks = await Work.create(request.body);
    // return response.status(200).json(newWorks)
    // }
  } catch (error) {
    console.log(`hi i am an error ${error}`);
    return response.status(404).json({ message: "Not found" });
  }
}
