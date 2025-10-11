//calcul de base pour micro-indices
let micro_es_prix= document.getElementById("priceES").value;
micro_es_prix  = micro_es_prix * 50 /1000;

let micro_nq_prix = document.getElementById("priceNQ").value;
micro_nq_prix = micro_nq_prix *20/1000;



function calcul_lot(prix){
let risque = document.getElementById("riskAmount").value;
let pourcentage = document.getElementById("riskPercent").value;
let nbr_lot = risque/(prix*pourcentage);
nbr_lot = Math.round(nbr_lot);
let risque_exact = Math.round(nbr_lot*prix * pourcentage);

document.getElementById("résultat").innerHTML = "Il faut mettre "+ nbr_lot+" micro lot, avec un risque exact de " + risque_exact;
};

document.getElementById("Bes").addEventListener("click", function(){calcul_lot(micro_es_prix );});
document.getElementById("Bnq").addEventListener("click", function(){calcul_lot(micro_nq_prix);});

