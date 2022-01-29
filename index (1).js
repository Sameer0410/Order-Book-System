 const orderType = document.getElementById("type");
const price = document.querySelector("input[type='price']");

orderType.onchange = function (e) {
    if (e.target.value === "Market") {
        price.disabled = true;
    } else {
        price.disabled = false;
    }
};
const defaultPrice = 150.0;
const cardNumber = document.getElementById("cardnumber");
cardNumber.onchange = function (e) {
    price.value = (
        parseFloat(defaultPrice) * parseFloat(e.target.value)
    ).toFixed(2);
};