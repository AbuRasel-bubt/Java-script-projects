// step Number1 : add event Listener to the deposit
document.getElementById('btn-deposit').addEventListener('click', function() {
    // step Number2: get the deposit amount from the deposit  input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // get the current deposit total
    // for non-input(element other than input textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // add number to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;


    // // get ballance current total
    // const ballanceTotalElement = document.getElementById('balance-total');
    // const previousBallanceTotalString = ballanceTotalElement.innerText;
    // const previousBallanceTotal = parseFloat(previousBallanceTotalString);

    // // calculate current total ballance 
    // const currentBallanceTotal = previousBallanceTotal + newDepositAmount;

    // // set the ballance total
    // ballanceTotalElement.innerText = currentBallanceTotal;

    // step5 : get ballance current total
    const ballanceTotalElement = document.getElementById('balance-total');
    const previousBallanceString = ballanceTotalElement.innerText;
    const previousBallanceTotal = parseFloat(previousBallanceString);

    // step6 : calculate current total ballance
    const currentBallanceTotal = previousBallanceTotal + newDepositAmount;
    // step6 : set the ballance total 
    ballanceTotalElement.innerText = currentBallanceTotal;

    // clear the deposit field
    depositField.value = '';
})