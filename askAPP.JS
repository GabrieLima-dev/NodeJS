const questions = [
    "Olá qual o seu nome?",
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

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim() + "\n")
    if (answers.length < questions.length){
        ask(answers.length)
    } else{
        process.exit()
    }  
})

process.on('exit', () => {
 console.log(`
 *********************************************************************** 
            Olá ${answers[0]}

    Hoje foram planejadas essas tarefas:
    ${answers[1]}

    As tarefas realizadas foram:
    ${answers[2]}

    As tarefas não realizadas foram:
    ${answers[3]}

    O motivo da não realização das tarefas foram:
    ${answers[4]}

    O que deve ser feito para que amanhã consiga realizar todas as tarefas:
    ${answers[5]}

    Erros são provas de que você está tentando.
    Não desista... 
    
*********************************************************************** 
`)
})