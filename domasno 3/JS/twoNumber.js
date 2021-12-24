let boy = + prompt("Enter the number of boy's");
let girls = + prompt("Enter the number of girl's");
function twoNumber(){
    if(boy<10 && girls <10){
    console.log(`0${boy} boy, and 0${girls} girls`)}
    else if (boy<10 && girls >10) {
     console.log(`0${boy} boy, and ${girls} girls`)
    }
    else if (boy>10 && girls <10){
        console.log(`${boy} boy, and 0${girls} girls`)
    }
    else 
    console.log(`${boy} boy, and ${girls} girls`)
    return twoNumber;
}
twoNumber()
