// step1:add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function() {
    // console.log('click submit button')
    // step2: get the email address inside the input field.
    // always remember to use . value to get text from  input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);

    // step3: get password
    // 3.a: set id on the html element
    // 3.b: get the element 
    // 3.c: get the value form hte element 

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // DANGER: DO NOT VERIFY EMAIL PASSWORD ON THE CLIENT SIDE
    // step4: verify email and password and check wether valid user or not valid user 

    if (email === 'sontan@bapp.com' && password === 'secret') {

        window.location.href = 'bank.html'
    } else {
        alert('tui password bule gesos tuke ami tejjo sontan gusona korlam.')
    }
})