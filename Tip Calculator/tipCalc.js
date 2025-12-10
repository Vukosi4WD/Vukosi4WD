const screen = document.getElementById("screen");
const totalOrder = document.getElementById("total");
const numberOfPeople = document.getElementById("total-guests");
const tipPerPerson = document.getElementById("tip-pps");
const tipAmount = document.getElementById("percentage");
const calculate = document.getElementById("submit");
const displayTpps = document.getElementById("display-tpps");
const spliBtn = document.getElementById("splitBtn");
const displaySplit = document.getElementById("split-amount");
const errorDisplay = document.getElementById("error-display");


let total = 0;
const gratuity = 0.2;
let guests = 1;
let indiTip = 0;
let toPay = 0;
let splitTotal = 0;

//receive input values
    totalOrder.addEventListener("input", () => {

        if(totalOrder.value <= 0 || isNaN(totalOrder.value)){
            errorDisplay.innerText = "Enter valid amount!";
            errorDisplay.style.color = "red";       
        }else{
            //calculate amount to be paid
        total = Number(totalOrder.value);
        tip = total * gratuity;
        toPay = total + tip;

        //calculate tpps

        if(guests > 0){
            indiTip = tip / guests;
        };
        }

        
    });

//receive number of guests and calc tips p.p
    numberOfPeople.addEventListener("input", () => {

        guests = Number(numberOfPeople.value);

        if(guests > 0){
            indiTip = tip / guests;
        };
    });



//display totals

function tipCalculator(){

    //listen for slip request

spliBtn.addEventListener("click", () => {
    splitTotal = toPay / guests;

    
    
})

     calculate.addEventListener("click", () => {
        screen.innerText = "Total: R" + toPay.toFixed(2);
        displayTpps.innerText = "Tip per Person: R" + indiTip.toFixed(2);

    if(splitTotal <= 0){
        displaySplit.innerText = "";
    }else{
        displaySplit.innerText = "Total per Person: R" + splitTotal.toFixed(2);
    }
        
        
    });

}
    
    

tipCalculator()