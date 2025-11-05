//calcul de base pour micro-indices
function calcul_lot(type) {
  let micro_nq_prix = document.getElementById("priceNQ").value * 20 / 1000;
  let micro_es_prix = document.getElementById("priceES").value * 50 / 1000;
  let risque = document.getElementById("riskAmount").value;
  let pourcentage = document.getElementById("riskPercent").value;

  let prix = (type === "ES") ? micro_es_prix : micro_nq_prix;

  let nbr_lot = risque / (prix * pourcentage);
  nbr_lot = Math.round(nbr_lot);
  let risque_exact = Math.round(nbr_lot * prix * pourcentage);

  document.getElementById("résultat").innerHTML =
    "Il faut mettre " + nbr_lot + " micro lot, avec un risque exact de " + risque_exact;
}

document.getElementById("Bes").addEventListener("click", function(){ calcul_lot("ES"); });
document.getElementById("Bnq").addEventListener("click", function(){ calcul_lot("NQ"); });




