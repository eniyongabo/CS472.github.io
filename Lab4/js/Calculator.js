function calcTip(){

    var subtotal = parseFloat(document.getElementById("subtotal").value);
    var tipPercent = parseFloat(document.getElementById("tip").value);

    var tipAmount = subtotal * (tipPercent/100);
    var total = subtotal + tipAmount;

    document.getElementById("total").textContent= "$"+total.toFixed(2);
}