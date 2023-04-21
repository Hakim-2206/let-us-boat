function addPic() {
  let inputFile = document.getElementById("input-file");
  let profilePic = document.querySelector(".profile-pic");
  let storedImage = localStorage.getItem("profileImage"); // Récupérer l'image du stockage local
  // let forProfilpicAlert = document.querySelector('.forprofilpic-alert');

  if (storedImage) {
    profilePic.src = storedImage; // Afficher l'image stockée
  }

  inputFile.addEventListener("change", function () {
    let reader = new FileReader();
    reader.onload = function () {
      profilePic.src = reader.result;
      localStorage.setItem("profileImage", reader.result); // Stocker l'image dans le stockage locals
      // Ajouter une alerte Bootstrap
      let alertDiv = document.createElement("div");
      alertDiv.classList.add("alert", "alert-success", "mt-3", 'alert-pic');
      alertDiv.setAttribute("role", "alert");
      alertDiv.textContent = "La photo de profil a été modifiée avec succès!";
      document.getElementById('forprofilepic-alert').appendChild(alertDiv);

      // Supprimer l'alerte après 3 secondes
      setTimeout(() => {
        alertDiv.remove();
      }, 3000);
    };
    reader.readAsDataURL(inputFile.files[0]);
  });
}

function deco() {
  localStorage.removeItem('profileImage');
}

addPic();
