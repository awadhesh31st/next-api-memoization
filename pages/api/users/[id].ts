import { NextApiRequest, NextApiResponse } from "next";
import users from "@/data/user-mock.json";

export default function getUser(
  req: NextApiRequest,
  res: NextApiResponse<(typeof users)[0] | undefined>
) {
  res.status(200).json(users.find((user) => user.id === Number(req.query.id)));
}
