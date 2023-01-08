import { bot } from "../index";
import { textController } from "../controllers/text-controller";

bot.on('text', ctx => {
    textController(ctx.message.text, ctx);
});

/* bot.on('chat_member', ctx => {    
    console.log(ctx.message);
    ctx.replyWithSticker('CAACAgIAAxkBAAIj9GKLQek8_V-9k6zM4a4CFujDej50AAIQAAOvxlEan3fNNZ78i6ckBA');
    ctx.reply(`Welcome! ${ctx.chatMember}`);
}) */


export { bot as onText };