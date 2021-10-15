const {EventEmitter} = require('events')
const ev = new EventEmitter()

ev.once('Clica aqui', (mensagem) => {
console.log('Você clicou aqui', (mensagem))
})

ev.emit('Clica aqui', "Gabriel Lima")
ev.emit('Clica aqui', "Vivia")
ev.emit('Clica aqui', "Genivaldo")