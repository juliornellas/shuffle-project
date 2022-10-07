const app = document.getElementById("app")

const content = document.createElement("div")

let questions = [
    {
        title: "Quem são os povos originários do Brasil?",
        answers: ["Europeus", "Aztecas", "Maias", "Incas"],
        correct: "Indígenas",
        timeToAnswer: 90
    },
    {
        title: "Quantas Copas do Mundo de Futebol o Brasil conquistou?",
        answers: [2, 3, 4, 6],
        correct: 5,
        timeToAnswer: 90
    },
    {
        title: "Quantos deputados federais formam o congresso nacional?",
        answers: [293, 652, 421, 433],
        correct: 513,
        timeToAnswer: 90
    }
    
]

/**
 * SHUFFLE
 */
const shuffle = (array) => {
    //Inital position (lenght of array) AND the random position
    let currentIndex = array.length, randomIndex;

    while(currentIndex != 0){
        //Grab element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        //Swap it with current element
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array;
}

/**
 * Questions
 */
shuffle(questions).forEach((question, index)=>{
    const element = document.createElement("div")
    element.setAttribute("id",`q${index}`)
    question.answers.push(question.correct)
    shuffle(question.answers)
    // question.answers.
    element.innerHTML = `
        <p>${question.title}</p>
    `;
    question.answers.forEach((answer)=>{
        element.innerHTML += `
            <input type="radio" value="${answer}" id="${answer}" name="${answer}">
            <label for=${answer}>${answer}</label>
        `;
    })
    content.appendChild(element)
})


app.appendChild(content)
