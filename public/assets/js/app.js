window.onload = () => {
  let devourButton = document.getElementsByClassName("readybtn");

  function devour(event) {
    let id = this.getAttribute("data-id");
    console.log(id);

    fetch("/api/burgers/" + id, { method: "PUT" }).then(response =>
      console.log(response.json())
    );
  }
  for (let i = 0; i < devourButton.length; i++) {
    devourButton[0].addEventListener("click", devour);
  }
};
