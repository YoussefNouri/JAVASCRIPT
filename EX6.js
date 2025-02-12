let i = 0;
let exp, s = 0;
let comp1 = 0, comp2 = 0;
let ch = "";

do {
    exp = prompt(`Donnez l'expression ${i + 1} : `);
    i++;
if(isNaN(exp)){
    ch+=exp+" ";
    comp1++;
}
else {
    let num = Number(exp);

    s += num; 
    comp2++;
}
}while(i < 7);
alert(`Il y a ${comp1} chaînes : ${ch} et ${comp2} nombres dont la somme est ${s}`);

   

