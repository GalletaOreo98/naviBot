import { bot } from "../index";
import { textController } from "../controllers/text-controller";

bot.on('text', ctx => {
    textController(ctx.message.text, ctx)
})

export { bot }