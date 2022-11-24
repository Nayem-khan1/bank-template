document.getElementById('depositBtn').addEventListener('click', function(){
    //get input fild amount
    const depositFild = document.getElementById('depositFild');
    const newDepositValueStr = depositFild.value;
    const newDepositValue = parseFloat(newDepositValueStr);
    
    depositFild.value = '';
    if(isNaN(newDepositValue)){
        alert('Please Enter Number of amount');
        return;
    }
    //get previous amount
    const totalDeposit = document.getElementById('totalDeposit');
    const totalDepositValueStr = totalDeposit.innerText;
    const totalDepositValue = parseFloat(totalDepositValueStr);
    //update diposit
    const updateDiposit = totalDepositValue + newDepositValue;
    totalDeposit.innerText = updateDiposit;
    //get previous blance
     const previousBlance = document.getElementById('totalBlance');
     const previousBlanceStr = previousBlance.innerText;
     const previousBlanceNum = parseFloat(previousBlanceStr);
     //update blance
     const updateBlance = updateDiposit + previousBlanceNum;
     previousBlance.innerText = updateBlance;
})