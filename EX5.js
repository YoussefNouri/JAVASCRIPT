
let p1 = Number(prompt("Donner le prix du premier article : "));
let p2 = Number(prompt("Donner le prix du deuxième article :"));
let s = p1 + p2;
if(isNaN(s)){
    document.write("Erreur!");
}
else{
    document.write(`Total des 2 articles : ${s}`);
    if(s >= 150 && s < 600){
        document.write(`Avec Remise : ${s * (1 - 15/100)}`);
    }
    else if(s > 600 && s <= 1000){
        document.write(`Avec Remise : ${s * (1 - 25/100)}`);
    }
    else if(s > 1000){
        document.write(`Avec Remise : ${s * (1 - 35/100)}`);
    }
}

