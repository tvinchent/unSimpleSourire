document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = "https://www.unsimplesourire.com/admin/wp-json/wp/v2/pages";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      for (donnee = 0; donnee <= data.length; donnee++) {
        const post = data[donnee];
        let postContainer = document.getElementById("post-container" + post.id);
        if (postContainer != null) {
          const postElement = document.createElement("div");
          postElement.classList.add("post");

          const postTitle = document.createElement("h2");
          postTitle.innerHTML = post.title.rendered;
          postElement.appendChild(postTitle);

          const postContent = document.createElement("div");
          postContent.innerHTML = post.content.rendered;
          postElement.appendChild(postContent);

          postContainer.appendChild(postElement);
        }
      }
    })
    .catch((error) => {
      console.error("Erreur:", error);
    });
});
