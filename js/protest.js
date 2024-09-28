document.getElementById('donation-btn-protest').addEventListener('click', function(){
    const inputAmountProtest = getInputFieldById('donation-input-protest');
    const amountProtest = getTextFieldById('amount-protest');
    const balance = getTextFieldById('available-balance');

    if(isNaN(inputAmountProtest)){
        alert ('Please insert number as input...');
        return;
    }

    if(inputAmountProtest > balance){
        alert ('You do not have sufficent balance...');
        return;
    }

    if(inputAmountProtest < 0 || inputAmountProtest === 0 ){
        alert ('Please insert positive number....');
        return;
    }
    else{
        my_modal_4.showModal();
    }
    

    const newAmountProtest = inputAmountProtest + amountProtest;
    const newBalance = balance - inputAmountProtest;



    
    document.getElementById('amount-protest').innerText = newAmountProtest;
    document.getElementById('available-balance').innerText = newBalance;




    // transaction history

    const div = document.createElement('div');
    div.classList.add('my-10');
    div.innerHTML = `
        <h4 class="text-xl text-gray-500 py-3 px-4 rounded-md border font-bold text-center">${inputAmountProtest} Taka is successfully donated for Quota Movement. <br> Date: ${new Date().toLocaleDateString()} , Time: ${new Date().toLocaleTimeString()} </h4>
    `

    document.getElementById('history-block').appendChild(div);

})