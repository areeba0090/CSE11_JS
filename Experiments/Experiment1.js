function calculateResult(){
    const n=document.getElementById("subjects").value;
    let total=0;
    let i;
    for(i=0;i<n;i++){
        let x=parseFloat(prompt("Enter the subject number"+(i+1)));
        total+=x;
    }
    let average=total/n;
    let grade;
    if(average>90)
    {
        grade='A+';
    }
    else if(average>80)
    {
        grade='A';
    }
    else if(average>70)
    {
        grade='B';
    }
    else if(average>60)
        grade='C';
    else if(average>50)
        grade='D';
    else
        grade='C';
    let r;
    if(average>40)
        r="pass";
    else
        r="fail";
    let result=document.getElementById("result").innerHTML="Total marks:"+total+"Average marks:"+average+"Grade:"+grade+"Result:"+r;

}