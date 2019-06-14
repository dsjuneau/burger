window.onload = () => {
  let devourButton = document.getElementsByClassName("readybtn");
  let addButton = document.getElementById("addbtn");

  function devour(event) {
    let id = this.getAttribute("data-id");
    console.log(id);

    fetch("/api/burgers/" + id, { method: "PUT" }).then(location.reload());
  }

  function addBurger(event) {
    event.preventDefault();
    let data = { burger: document.forms["main"].elements["addburger"].value };
    console.log(data);
    fetch("/api/burgers/", { method: "POST", body: data }).then(
      location.reload()
    );
  }

  //Listeners activated
  for (let i = 0; i < devourButton.length; i++) {
    devourButton[0].addEventListener("click", devour);
  }

  addButton.addEventListener("click", addBurger);
};
