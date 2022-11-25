document.getElementById('withdrawBtn').addEventListener('click', function(){
    //get inupt number
    const withrawAmount = document.getElementById('withdrawInput');
    const withrawAmountStr = withrawAmount.value;
    const withrawAmountNum = parseFloat(withrawAmountStr);
    withrawAmount.value = '';

    //conditon
    if(isNaN(withrawAmountNum)){
        alert('Please Enter Number of amount');
        return;
    }
    //get withdraw amount
    const newWithdraw = document.getElementById('withdraw');
    const newWithdrawStr = newWithdraw.innerText;
    const newWithdrawNum = parseFloat(newWithdrawStr);
    //calculation
    const updateWthdraw = newWithdrawNum + withrawAmountNum;
    //blance part
    const currentBlance = document.getElementById('totalBlance');
    const currentBlanceStr = currentBlance.innerText;
    const currentBlanceNum = parseFloat(currentBlanceStr);

    //condition
    if(withrawAmountNum > currentBlanceNum){
        alert('Insufficient Balance');
        return;
    }
    //update withdraw amount
    newWithdraw.innerText = updateWthdraw;
    //update current blance
    const updateCurrentBlance = currentBlanceNum - withrawAmountNum;
    currentBlance.innerText = updateCurrentBlance;
    
    
})
