let btn = document.querySelector('button');

btn.addEventListener('click', ()=>{

    let amt = parseFloat(document.querySelector('.amount').value);
    let persons = parseFloat(document.querySelector('.people').value);
    let rate = parseFloat(document.querySelector('.rating').value);
    let tip = document.querySelector('.result');

    if(rate == 0 || isNaN(amt) || isNaN(persons)){
        alert("Enter Valid Values");
        return ;
    }

    let total = ((amt*rate)/persons).toFixed(2);


    tip.innerHTML = "Tip Amount: " + total + " Each"; 
    

});