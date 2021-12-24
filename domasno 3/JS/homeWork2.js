function string(){ 
    console.log("Happy New Year");
    console.log("Kristijan Adziovski");
}
string();
string();

function broj(broj1, broj2){
    let zbir = broj1 + broj2;
    console.log(zbir);
    return zbir;
}
broj(1,2);
broj(4,6);

function podatoci( ime, prezime,pasos){ 
    console.log(`Jas se vikam ${ime} i se prezivam ${prezime} i mojot broj na pasos e ${pasos}`);
    return podatoci;
}
podatoci("Kristijan", "Adziovski" ,"A123456");

function nepoznata(broj1, broj2 , broj3){
    console.log(broj1);
    console.log(broj2);
    console.log(broj3);
}
nepoznata(2,4,8);
nepoznata(2,4);
nepoznata(10,undefined,8);
    
