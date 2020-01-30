function doesNotPassAllValidations(name, msg) {
  if (!name || !msg) {
    alert("you forgot");
    return true;
  }

  if (msg.length > 100) {
    alert("too long");
    return true;
  }

  return false;
}

function submitComment() {
  const inputField = document.getElementById("name");
  const textField = document.getElementById("msg");
  const commentSection = document.getElementById("comments");
  const name = inputField.value;
  const msg = textField.value;

  const comment = document.createElement("section");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  const isNotValid = doesNotPassAllValidations(name, msg);
  if (isNotValid) {
    return null;
  }

  h3.innerHTML = `${name} said:`;
  p.innerHTML = msg;
  comment.classList.add("comment");
  comment.appendChild(h3);
  comment.appendChild(p);
  commentSection.appendChild(comment);

  inputField.value = null;
  textField.value = null;
}
