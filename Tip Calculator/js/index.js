const billInput= document.querySelector('#bill');
const tipInput= document.querySelector('#tip');
const btn = document.querySelector('#btn');
const total= document.querySelector('.total')

btn.addEventListener('click',()=>{
    const b = billInput.value;
    const t =tipInput.value;
    const result = b * (1+t/100);
    total.innerHTML=result.toFixed(2);
})

