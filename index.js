function save (event) {
    event.preventDefault;
    licenseValue = event.target.value;
    return licenseValue;
}

function counter(plan, price) {
    const result = plan * price;
    document.querySelector('.total__result').textContent = `$${result}`;

}
function result(event) {
    event.preventDefault;
    document.querySelector('.total__result_select').textContent = `Selected plan: ${1}`
    licensePrice = event.target.value;
   
    return counter(licenseValue, licensePrice);  
}
document.querySelector('.license-plan').addEventListener('click', save)
document.querySelector('.numder-license__select').addEventListener('click', result)
