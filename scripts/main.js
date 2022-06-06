var user_data = [];

document.querySelector("form").addEventListener("submit", function_submit);

function function_submit() {
  event.preventDefault();

  var form = document.querySelector("#signup_form");

  var name = form.name.value;

  var email = form.email.value;

  var address = form.address.value;

  var amount = form.amount.value;

  console.log(name, email, address, amount);

  var data = {
    name: name,
    email: email,
    address: address,
    wallet: amount,
  };

  user_data.push(data);

  localStorage.setItem("user", JSON.stringify(user_data));

  form.name.value = null;

  form.email.value = null;

  form.address.value = null;

  form.amount.value = null;
}
