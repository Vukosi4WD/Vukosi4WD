const steps = document.querySelectorAll("form fieldset");
let currentStep = 0;

// FIXED: .step not .steps
const progress = document.getElementById("progress");
const stepIndicators = document.querySelectorAll(".step");

showStep(currentStep);
updateProgressBar();
attachEnterListenerToStep(currentStep);

function showStep(index){
    steps.forEach((step, i) => {
        step.style.display = i === index ? "block" : "none";
    });
}

function updateProgressBar(){
    const totalSteps = steps.length - 1;
    const percent = (currentStep / totalSteps) * 100;

    progress.style.width = percent + "%";

    stepIndicators.forEach((circle, index) => {
        if (index <= currentStep){
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });
}

function goToNextStep(){
    const inputs = steps[currentStep].querySelectorAll("input");

    for(let input of inputs){

        if(input.required && !input.value){
            alert("Please fill in the field before continuing.");
            return;
        }

        // FIXED: radio validation
        if(input.type === "radio"){
            const checked = steps[currentStep].querySelector(`input[name="${input.name}"]:checked`);
            if (!checked) {
                alert("Please choose an option.");
                return;
            }
        }
    }

    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
        updateProgressBar();
        attachEnterListenerToStep(currentStep);
    } 
    else {
        fakeSubmit();
    }
}

function attachEnterListenerToStep(stepIndex) {
    const inputs = steps[stepIndex].querySelectorAll("input");

    inputs.forEach(input => {
        input.onkeydown = function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                goToNextStep();
            }
        };
    });
}

function fakeSubmit() {
    alert("🎉 Thank you! Your signup is complete (well… fake complete 😄).");
}

// OPTIONAL: If button is outside form, connect it:
document.getElementById("next").addEventListener("click", fakeSubmit);
