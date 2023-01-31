const dateofbirth=document.querySelector("#date-of-birth");
const luckynumber=document.querySelector("#lucky-number");
const checknumber=document.querySelector("#check-number");
const outputvalue=document.querySelector("#output");
checknumber.addEventListener("click", checkbdayislucky);

function checkbdayislucky(){
    const dob=dateofbirth.value;
    const sum=calculateSum(dob);
    const lucky=  luckynumber.value;
    console.log(sum,lucky);

     if(sum%lucky===0)
     outputvalue.innerText= "Your Birthday is lucky";
     else
     outputvalue.innerText= "Your Birthday is not that lucky";
}

function calculateSum(dob){
       dob=dob.replaceAll("-","");
   let sum=0;
   for(let index=0;index<dob.length;index++)
   {
    sum=sum+Number(dob.charAt(index));
   }
return sum;
}