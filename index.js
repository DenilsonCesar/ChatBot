const Bottr = require('bottr')
const BottrApp = require('bottr-app')
const bot = new Bottr.Bot()

bot.on('message_received', function(massage, session){
    session.send("Olá, Tudo bem?")
})

bot.use(new BottrApp())
bot.listen()
