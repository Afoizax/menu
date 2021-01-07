function totalgg() {
    var input = document.getElementsByName("product")
    var total = 0;
    console.log(total);
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
            total += parseFloat(input[i].value);
            console.log(total);
        }
    }
    console.log(total);
    document.getElementById("total").value = "$" + total.toFixed(2)
}


function editPrice(product) {
    var ancienPrix = document.getElementById(product).nextElementSibling.value
    var nouveauPrix = prompt("Entrer le nouveau Prix:", "");
    if (nouveauPrix == null || nouveauPrix == ancienPrix) {
    } else {
       document.getElementById(product).nextElementSibling.nextElementSibling.innerHTML = nouveauPrix
       document.getElementById(product).nextElementSibling.value = nouveauPrix
    }
}
