import { VercelRequest, VercelResponse } from "@vercel/node"

export default async (req: VercelRequest, res: VercelResponse) => {
  const {
    query: { slug },
  } = req

  res.json(slug)
}
