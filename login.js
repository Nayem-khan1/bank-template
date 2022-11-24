document.getElementById('submitBtn').addEventListener('click', function(){
    const getEmail = document.getElementById('email');
    const emailValue = getEmail.value;
    const getPass = document.getElementById('pass');
    const passValue = getPass.value;
    if(emailValue === 'nayem@tech.com' && passValue === 'dream'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user');
    }
})