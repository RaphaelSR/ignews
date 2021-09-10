// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";  

  export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {"id": 1, "name": "Raphael"},
        {"id": 2, "name": "Souza"},
        {"id": 3, "name": "Rocha"}
    ]

    return response.json(users)
  }