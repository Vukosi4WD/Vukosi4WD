const input = document.getElementById("tweet");
const submitBtn = document.getElementById("submit");
const complete = document.getElementById("complete");
const error = document.getElementById("error-display");
const counter = document.getElementById("charCount");
const displayArea = document.getElementById("displayArea");

function charLimit(){

    //clear display messages as default
    error.innerText = "";
    complete.innerText = "";
    counter.innerText = "";

    // pause submission
    submitBtn.addEventListener("click", (e) => {
        if(input.value.length > 240){ 
                e.preventDefault()}
                else if(input.value.length < 10){
                    e.preventDefault();
                }else{
                    alert("Shakespheare could never!");
                    input.value = "";
                    error.innerText = "";
                }
    }
   )

    //check if user input is within allowed range
    input.addEventListener("input", () =>
    { 
        if(input.value.length > 240){

            //
            char = input.value.length;
            
            counter.innerText = "you've reached the character limit!";
            complete.innerText = "";
            error.innerText = "That's too much yapping gang!";
            input.value = input.value.slice(0, 240);

    }else{
        char = input.value.length;

        counter.innerText = 240 - char;
        complete.innerText = "Keep talking, I'm listening.";

    }
    })

    // style messages

    input.addEventListener("input", alertStyles);

    // input display box size/style
    

    input.addEventListener("input", () => {
        input.style.height = "auto";
        input.style.height = input.scrollHeight + "px";
    })

    
}

function alertStyles(){

    char = input.value.length;

    if(char < 10){

        counter.style.color = "red";
        input.style.borderColor = "red";

    }else if(char >= 10 && char < 220){

        counter.style.color = "green";
        input.style.borderColor = "green";

    }else{

        counter.style.color = "red";
        input.style.borderColor = "red";
    }

}

charLimit();