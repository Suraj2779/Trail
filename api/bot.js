export default async function handler(req, res) {

const TOKEN = process.env.BOT_TOKEN;

if(req.method!=="POST"){
return res.status(200).send("Bot Running");
}

const update=req.body;

if(update.message){

const chatId=update.message.chat.id;

const text=update.message.text;

await fetch(
`https://api.telegram.org/bot${TOKEN}/sendMessage`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
chat_id:chatId,
text:`You said: ${text}`
})
}
);

}

return res.status(200).json({
ok:true
});

}
