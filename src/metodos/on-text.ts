import { bot } from "../index";
import { textController } from "../util/text-controller";

bot.on('text', ctx => {
    textController(ctx.message.text, ctx)
})

export { bot }