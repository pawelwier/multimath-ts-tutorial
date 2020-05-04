function startGame() {
    // comments
    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome'
}

document.getElementById('startGame')!.addEventListener('click', startGame);