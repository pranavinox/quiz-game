const questions = [
    {
        question: "which is the captital of india?",
        answer:[
            {Text:"delhi",correct:true},
            {Text:"odisha" ,correct:false},
            {Text:"bengaluru" ,correct:false},

        ]
    
    },
{
        question: "which is the national game of india?",
        answer:[
            {Text:"cricket",correct:false},
            {Text:"none of above",correct:true},
            {Text:"hocky" ,correct:false},

        ]
},
{
        question: "what is the formula of (a+b^2)? ",
        answer:[
            {Text:"a^2-2ab-b^2",correct:false},
            {Text:"a^4+2ba+a^2" ,correct:false},
            {Text:"a^2+2ab+b^2" ,correct:true},

        ]
    }
]

const questiontag =document.getElementById("qus");
const answerbtn =document.getElementById("answer-btn");
const nextbtn =document.getElementById("next");

let currentqusin = 0;
let score = 0;

function startquiz(){
    currentqusindex = 0;
    score = 0;
    nextbtn.innerHTML = "next";
    showqus();
}

function showqus(){
    resetstate();
    let currentqus= questions[currentqusindex];
    let qusno = currentqusindex + 1;
    questiontag.innerHTML = qusno +". "+currentqus.
    question;

    currentqus.answer.forEach(answer =>{
        const button =document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click",select);
    });
}

function resetstate(){
    nextbtn.style.display = "none"
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}
function select(e){
    const selectedbtn  =e.target;
    const iscorrect = selectedbtn.dataset.correct === "true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
       score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbtn.style.display="block";
}

function showscore(){
    resetstate();
    questiontag.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextbtn.innerHTML = "play again";
    nextbtn.style.display = "block"
}

function handlenextbtn(){
    currentqusindex++;
    if(currentqusindex < questions.length){
        showqus();
    }
    else{
        showscore();
    }
}

nextbtn.addEventListener("click",()=>{
    if(currentqusindex < questions.length){
        handlenextbtn()
    }
else{
    startquiz()
}
})
startquiz();
