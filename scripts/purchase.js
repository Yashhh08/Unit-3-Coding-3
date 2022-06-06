var purchase_data = JSON.parse(localStorage.getItem("purchase"));

purchase_data.forEach(function (el) {
  var voucher = document.createElement("div");
  voucher.setAttribute("class", "voucher");
  document.querySelector("#purchased_vouchers").append(voucher);

  var name = document.createElement("p");
  name.innerText = el.name;

  var image = document.createElement("img");
  image.setAttribute("src", el.image);

  var price = document.createElement("p");
  price.innerText = el.price;

  voucher.append(image, name, price);
});

var balance = JSON.parse(localStorage.getItem("wallet_balance"));

document.querySelector("#wallet_balance").innerText = balance;
