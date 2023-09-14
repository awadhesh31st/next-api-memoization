import { NextApiRequest, NextApiResponse } from "next";
import users from "@/data/user-mock.json";

export default function getUser(
  req: NextApiRequest,
  res: NextApiResponse<typeof users>
) {
  res.status(200).json(users);
}
