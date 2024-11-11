const userName = document.getElementById("name");
const email = document.getElementById("email");
const comment = document.getElementById("comment");

const form = document.querySelector(".userComment");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addComment(userName.value, email.value, comment.value);
});

function addComment(userName, email, comment) {
  if (userName !== "" && email !== "" && comment !== "") {
    const userComment = {
      userName: userName,
      email: email,
      comment: comment,
    };

    comments.push(userComment);
    addToLocalStorage(comments);

    userName.value = "";
    email.value = "";
    comment.value = "";
  }
}
