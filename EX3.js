let v = Number(prompt("Donnez le prix : "));
const TVA = 19;
if(isNaN(v)){
    alert("Erreur !");
}
else{
    alert(`PRIXNET = ${v + (v * TVA/100)}`);
}