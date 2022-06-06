var user = JSON.parse(localStorage.getItem("user"));

document.querySelector("#wallet_balance").innerText = user[0].wallet;
localStorage.setItem("wallet_balance", user[0].wallet);

var purchase_data = [];

async function voucher_data() {
  var url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

  try {
    var data = await fetch(url);

    var response = await data.json();

    console.log(response[0].vouchers);

    var alldata = response[0].vouchers;

    display_data(alldata);
  } catch (error) {
    console.log("error");
  }
}

voucher_data();

function display_data(data) {
  data.forEach(function (el) {
    var voucher = document.createElement("div");
    voucher.setAttribute("class", "voucher");
    document.querySelector("#voucher_list").append(voucher);

    var name = document.createElement("p");
    name.innerText = el.name;

    var image = document.createElement("img");
    image.setAttribute("src", el.image);

    var price = document.createElement("p");
    price.innerText = el.price;

    var buy = document.createElement("button");
    buy.setAttribute("class", "buy_voucher");
    buy.innerText = "BUY";

    buy.addEventListener("click", function_buy);

    function function_buy() {
      if (user[0].wallet >= el.price) {
        alert("Hurray! purchase successful");

        user[0].wallet = user[0].wallet - el.price;

        document.querySelector("#wallet_balance").innerText = user[0].wallet;

        localStorage.setItem("wallet_balance", user[0].wallet);

        console.log("current balance " + user[0].wallet);

        var purchased = el;

        purchase_data.push(purchased);

        console.log(purchase_data);

        localStorage.setItem("purchase", JSON.stringify(purchase_data));
      } else {
        alert("Sorry! insufficient balance");
      }
    }

    voucher.append(name, image, price, buy);
  });

  document.querySelector("#purchase").addEventListener("click", function () {
    window.location.href = "purchase.html";
  });
}
