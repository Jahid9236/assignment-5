      document.getElementById('donation-btn-noakhali').addEventListener('click', function(){
    const inputAmountNoakhali = getInputFieldById('donation-input-noakhali');
    const amountNoakhali = getTextFieldById('amount-noakhali');
    const balance = getTextFieldById('available-balance');

    if(isNaN(inputAmountNoakhali)){
        alert ('Please insert number as input...');
        return;
    }

    if(inputAmountNoakhali > balance){
        alert ('You do not have sufficent balance...');
        return;
    }

    if(inputAmountNoakhali < 0 || inputAmountNoakhali === 0 ){
        alert ('Please insert positive number....');
        return;
    }
    else{
        my_modal_4.showModal();
    }

    

    const newAmountNoakhali = inputAmountNoakhali + amountNoakhali;
    const newBalance = balance - inputAmountNoakhali;



    
    document.getElementById('amount-noakhali').innerText = newAmountNoakhali;
    document.getElementById('available-balance').innerText = newBalance;




    // transaction history

    const div = document.createElement('div');
    div.classList.add('my-10');
    div.innerHTML = `
        <h4 class="text-xl text-gray-500 py-3 px-4 rounded-md border font-bold text-center">${inputAmountNoakhali} Taka is successfully donated for Flood Relief at Noakhali, Bangladesh. <br> Date: ${new Date().toLocaleDateString()} , Time: ${new Date().toLocaleTimeString()} </h4>
    `

    document.getElementById('history-block').appendChild(div);

})