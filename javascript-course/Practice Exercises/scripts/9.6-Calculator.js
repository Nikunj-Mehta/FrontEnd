let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function updateCalculation(value)
{
  calculation += value;
  localStorage.setItem('calculation', calculation);
  document.querySelector('.js-display-calculation').innerHTML = calculation;
}

function displayCalculation()
{
  document.querySelector('.js-display-calculation').innerHTML = calculation;
}