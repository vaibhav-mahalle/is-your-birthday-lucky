const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#number");
const checkButton = document.querySelector("#check-output");
const message     = document.querySelector("#message");

function isBirthDateLucky() {
    const date = dateOfBirth.value;
    const luckyNum = luckyNumber.value;
    if(date==="" || luckyNum<=0 )
     {
        message.innerText = "Either number is less than 0 or the input is null.";
        
     }
     else
     {
    const sum = calculateSum(date);
    console.log(sum);

    if(sum%luckyNum==0)
    {
        message.innerText = "Lucky Birthday!";

    }
    else
    {
        message.innerText = "not so lucky";
        console.log("not so lucky");
    }
}
}

function calculateSum(date) {
    console.log(typeof(date));

    date = date.replaceAll("-","");
    var number = parseInt(date);
    var sum = 0;

    while(number>10)
    {
        sum += number%10;
        number =  Math.floor(number/10);
        if(number<10)
        sum += number;
    }
    return sum;


}


checkButton.addEventListener('click',isBirthDateLucky)