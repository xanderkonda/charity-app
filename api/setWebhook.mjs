import { setWebhook } from "charity-app"
import bot from "../src/app/page.tsx"

const path = "api/telegram.mjs"

export default setWebhook({ bot, path, handleErrors: true })
