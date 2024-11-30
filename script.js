const bill = document.querySelector('.bill');
const tipAmount=document.querySelector('.amount');
const fifteen=document.querySelector('.tip');

bill.addEventListener('input', calculateTip);
function calculateTip(){
     fifteen.addEventListener('click', (e)=>{
       tipAmount=(15*bill.getValue(e.target))/100;
       tipAmount=parseFloat(tipAmount.toFixed(2));
     });
};