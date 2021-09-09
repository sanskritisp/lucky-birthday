const dob = document.querySelector("#date");
const luckyNum =  document.querySelector("#num");
const checkBtn = document.querySelector("#btn-check");
const output = document.querySelector("#output");


function isBirthdayLucky()
{
const dateOfBirth = dob.value;
// console.log(dob.value);
const LuckyNmuber = luckyNum.value;
// console.log(luckyNum.value);
const sum= calculateSum(dateOfBirth);
// console.log(sum);
if(sum&&dateOfBirth)
{
checkluck(sum,LuckyNmuber)
}
else{
    output.innerHTML = "Please enter both date-of-birth and your lucky number";
}

}
checkBtn.addEventListener("click", isBirthdayLucky)
 

function calculateSum(dateOfBirth){

//   console.log(dateOfBirth);
  let sum = 0;
  for(i=0;i<dateOfBirth.length;i++)
      if(!isNaN(parseFloat(dateOfBirth[i])))
         sum = sum + parseFloat(dateOfBirth[i]);
  
  return sum;
}

function checkluck(sum,LuckyNmuber)
{
    // console.log(sum,LuckyNmuber)
    if(sum % LuckyNmuber === 0)
    {
    // console.log("your birthday is lucky")}
    output.innerHTML ="WOAH!! Your birthday is lucky!!"
    }
    else{
        // console.log("ypur bdy is not lucky")}
        output.innerHTML = "OOPS!!! Your birthday is not lucky";
    }
}
