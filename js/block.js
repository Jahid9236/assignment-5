document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('donation-block').classList.remove('hidden');
    document.getElementById('history-block').classList.add('hidden');
    document.getElementById('footer').classList.remove('hidden');

    document.getElementById('donation-btn').classList.add('bg-blue-300');
    document.getElementById('history-btn').classList.remove('bg-blue-300');
})

document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('history-block').classList.remove('hidden');
    document.getElementById('donation-block').classList.add('hidden');

    document.getElementById('donation-btn').classList.remove('bg-blue-300');
    document.getElementById('history-btn').classList.add('bg-blue-300');
    document.getElementById('footer').classList.add('hidden');
})