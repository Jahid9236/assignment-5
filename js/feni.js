document.getElementById('donation-btn-feni').addEventListener('click', function(){
    const inputAmountFeni = getInputFieldById('donation-input-feni');
    const amountFeni = getTextFieldById('amount-feni');
    const balance = getTextFieldById('available-balance');

    if(isNaN(inputAmountFeni)){
        alert ('Please insert number as input...');
        return;
    }

    if(inputAmountFeni > balance){
        alert ('You do not have sufficent balance...');
        return;
    }

    if(inputAmountFeni < 0 || inputAmountFeni === 0 ){
        alert ('Please insert positive number....');
        return;
    }
    else{
        my_modal_4.showModal();
    }
    

    const newAmountFeni = inputAmountFeni + amountFeni;
    const newBalance = balance - inputAmountFeni;



    
    document.getElementById('amount-feni').innerText = newAmountFeni;
    document.getElementById('available-balance').innerText = newBalance;




    // transaction history

    const div = document.createElement('div');
    div.classList.add('my-10');
    div.innerHTML = `
        <h4 class="text-xl text-gray-500 py-3 px-4 rounded-md border font-bold text-center">${inputAmountFeni} Taka is successfully donated for Flood Relief at Feni, Bangladesh. <br> Date: ${new Date().toLocaleDateString()} , Time: ${new Date().toLocaleTimeString()} </h4>
    `

    document.getElementById('history-block').appendChild(div);

})