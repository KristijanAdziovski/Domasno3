let money=+prompt("Enter how much money you have in your bill")
let sum=+prompt("Enter how much money you want to withdraw")
function atm(){
    let vkupno=money-sum;
    if(money<sum){
        console.log("You don't have money on bill")
    }
   
    else {
        console.log(`You withdrawn ${sum}, and you have ${vkupno} money on your bill`)
    }
    return atm;
}
atm()