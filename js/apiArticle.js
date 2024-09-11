document.addEventListener("DOMContentLoaded", function () {
    // URL pour récupérer les articles WordPress via l'API REST
    const apiUrl = "https://www.unsimplesourire.com/admin/wp-json/wp/v2/posts";
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Trier les articles du plus récent au plus ancien
        data.sort((a, b) => new Date(b.date) - new Date(a.date));
  
        // Parcourir les articles triés
        data.forEach((post) => {
          // Créer un conteneur pour chaque post
          let postContainer = document.getElementById("post-container");
  
          // Vérifier si le conteneur existe dans le DOM
          if (postContainer != null) {
            // Créer un élément pour chaque article
            const postElement = document.createElement("div");
            postElement.classList.add("post");
  
            // Ajouter le titre de l'article
            const postTitle = document.createElement("h2");
            postTitle.innerHTML = post.title.rendered;
            postElement.appendChild(postTitle);
  
            // Ajouter la date de publication
            const postDate = document.createElement("p");
            postDate.classList.add("post-date");
            postDate.innerHTML = `Publié le : ${new Date(post.date).toLocaleDateString()}`;
            postElement.appendChild(postDate);
  
            // Ajouter le contenu de l'article
            const postContent = document.createElement("div");
            postContent.innerHTML = post.content.rendered;
            postElement.appendChild(postContent);
  
            // Ajouter l'élément article au conteneur
            postContainer.appendChild(postElement);
          }
        });
      })
      .catch((error) => {
        console.error("Erreur:", error);
      });
  });
  