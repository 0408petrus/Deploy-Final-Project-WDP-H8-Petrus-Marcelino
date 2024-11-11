const userName = document.getElementById("name");
const email = document.getElementById("email");
const comment = document.getElementById("comment");

const form = document.querySelector(".userComment");
const comments = document.querySelector(".list");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addComment(userName.value, email.value, comment.value);
});

// function add comment with name, email, and comment and push to comment list after that store it in local storage
function addComment(name, email, comment) {
  if (name !== "" && email !== "" && comment !== "") {
    const userComment = {
      id: Date.now(),
      name: name,
      email: email,
      comment: comment,
    };
    comments.push(userComment);
    addToLocalStorage(comments);
    renderComments(comments);
    userName.value = "";
    email.value = "";
    comment.value = "";
  }
}

// function to render given comments to screen
function renderComments(comments) {
  commentList.innerHTML = "";
  comments.forEach(function (item) {
    const li = document.createElement("li");
    li.setAttribute("class", "item");
    li.setAttribute("data-key", item.id);
    const h3 = document.createElement("h3");
    h3.textContent = item.name;
    const p1 = document.createElement("p");
    p1.textContent = item.email;
    const p2 = document.createElement("p");
    p2.textContent = item.comment;
    li.append(h3, p1, p2);
    commentList.append(li);
  });
}

// function to add comments to local storage
function addToLocalStorage(comments) {
  localStorage.setItem("comments", JSON.stringify(comments));
  renderComments(comments);
}
