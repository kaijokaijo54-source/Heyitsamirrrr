const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'playcandysmp.play.hosting',
  port: 25906,
  username: 'heyyitsamirrrr',
  version: false
})

bot.on('spawn', () => {
  console.log('Bot joined the server!')

  // Small movements so the bot stays active
  setInterval(() => {
    bot.setControlState('jump', true)

    setTimeout(() => {
      bot.setControlState('jump', false)
    }, 500)
  }, 30000)
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return

  console.log(`${username}: ${message}`)

  if (message.toLowerCase() === 'hello bot') {
    bot.chat(`Hello ${username}!`)
  }
})

bot.on('end', () => {
  console.log('Bot disconnected. Reconnecting in 10 seconds...')

  setTimeout(() => {
    process.exit(1)
  }, 10000)
})

bot.on('error', (err) => {
  console.log('Bot error:', err.message)
})
