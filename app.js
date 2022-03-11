    var a = prompt("Enter Number here");
    var fact =1;
    if(a < 0){
        document.write(`Factorial of negative(-ve) numbers is not possible`);}
    else{
        for (var i = 1 ; i <= a ; i++)
         {fact= fact * i;}
         document.write(`The factorial of ${a} is ${fact}`)
        }
    