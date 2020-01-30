function submitComment() {
  const inputField = document.getElementById("name");
  const textField = document.getElementById("msg");
  const name = inputField.value;
  const msg = textField.value;

  const comment = document.createElement("section");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  h3.innerHTML = `${name} said:`;
  p.innerHTML = msg;
  comment.classList.add("comment");
  comment.appendChild(h3);
  comment.appendChild(p);
}
