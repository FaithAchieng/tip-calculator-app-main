const bill = document.querySelector('.bill');
const tipAmount = document.querySelector('.amount');
const totalAmount = document.querySelector('.total');
const tipButtons = document.querySelectorAll('.tip');
const peopleInput = document.querySelector('.people');
let selectedTip = 15; 


bill.addEventListener('input', calculateTip);


tipButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); 
    selectedTip = parseInt(e.target.textContent);
    calculateTip();
  });
});


peopleInput.addEventListener('input', calculateTip);


function calculateTip() {
  const billValue = parseFloat(bill.value);
  const peopleCount = parseInt(peopleInput.value) || 1; 
  if (billValue > 0 && peopleCount > 0) {
  
    const tipPerPerson = (billValue * selectedTip) / 100 / peopleCount;
    tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;

  
    const totalPerPerson = (billValue / peopleCount) + tipPerPerson;
    totalAmount.textContent = `$${totalPerPerson.toFixed(2)}`;
  } else {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
  }
}
