const {EventEmitter} = require('events')
const ev = new EventEmitter()

ev.on('Clica aqui', (mensagem) => {
console.log('Você clicou aqui', (mensagem))
})

ev.emit('Clica aqui', "Gabriel Lima")