import { VercelRequest, VercelResponse } from "@vercel/node"
// @ts-ignore
import appStore from "app-store-scraper"
import playStore from "google-play-scraper"

export default async (req: VercelRequest, res: VercelResponse) => {
  const appstore_id: string = req.query.appstore_id as string
  const playstore_id: string = req.query.playstore_id as string

  const data = {
    appStore: {},
    playStore: {},
  }

  try {
    data.appStore = appstore_id ? await appStore.app({ id: appstore_id }) : {}
    data.playStore = playstore_id ? await playStore.app({ appId: playstore_id }) : {}
    res.json({ data })
  } catch (err) {
    console.log(err)
    res.json({ err })
  }
}
