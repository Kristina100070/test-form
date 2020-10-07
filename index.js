let radios = document.querySelectorAll('input[type="radio"]');
function result(event) {
    event.preventDefault;
    for (let radio of radios) {
        if (radio.checked) {
            let plan = radio.value;
            let price = document.querySelector('.numder-license__select').value;
            const result = plan * price;
            document.querySelector('.total__result').textContent = `$${result}`;
            selectPlan(plan);
        }
    }  
}

function selectPlan(plan) {
    const selectContainer = document.querySelector('.total__result_select');
if (plan == 13) {
    selectContainer.textContent = 'Selected plan: #1';
}
else if (plan == 22) {
    selectContainer.textContent = 'Selected plan: #2';
}
else {
    selectContainer.textContent = 'Selected plan: #3';
}
}
document.querySelector('.license-plan').addEventListener('click', result);
document.querySelector('.numder-license__select').addEventListener('click', result);   
   
