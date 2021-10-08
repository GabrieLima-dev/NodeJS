const questions = [
    "Quais as tarefas foram planejadas para o dia de hoje?",
    "Quais tarefas conseguiu realizar hoje?",
    "Quais tarefas não foram realizadas?",
    "Por qual motivos essas tarefas não foram realizadas hoje?",
    "O que devo fazer amanhã para que todas as tarefas planejadas devam ser realizadas?"
]

const ask = (index = 0) => {
    process.stdout.write(questions[index] + "\n")
}

ask()

process.stdin.on("data", data => {
    process.stdout.write(data.toString().trim() + "\n")
})