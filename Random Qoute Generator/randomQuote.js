const quoteDisplay = document.getElementById("quote-display");
const submitBtn = document.getElementById("submit");

const quotes = {
    1: "Talk is cheap. Show me the code. - Linus Torvalds",
    2: "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson",
    3: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
    4: "First, solve the problem. Then, write the code. - John Johnson",
    5: "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
    6: "In order to be irreplaceable, one must always be different. - Coco Chanel",
    7: "Java is to JavaScript what car is to Carpet. - Chris Heilmann",
    8: "Knowledge is power. - Francis Bacon",
    9: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. - Dan Salomon",
    10: "Good design is good business. - Thomas J. Watson",
    11: "The best way to predict the future is to invent it. - Alan Kay",
    12: "Deleted code is debugged code. - Jeff Sickel",
    13: "Walking on water and developing software from a specification are easy if both are frozen. - Edward V. Berard",
    14: "Optimism is an occupational hazard of programming: feedback is the treatment. - Kent Beck",
    15: "Simplicity is the soul of efficiency. - Austin Freeman",
    16: "Before software can be reusable it first has to be usable. - Ralph Johnson",
    17: "Make it work, make it right, make it fast. - Kent Beck",
    18: "Design is thinking made visual. - Saul Bass",
    19: "It\’\s not a bug. It\’\s an undocumented feature! - Anonymous",
    20: "If debugging is the process of removing software bugs, then programming must be the process of putting them in- Edsger Dijkstra"
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * Object.keys(quotes).length) + 1;
    quoteDisplay.innerText = quotes[randomIndex];


    quoteDisplay.style.opacity = "0";  

 setTimeout(() => {
        quoteDisplay.innerText = quotes[randomIndex];
        quoteDisplay.style.opacity = "1";
    }, 200);

    });