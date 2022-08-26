document.addEventListener("DOMContentLoaded", function () {
  /* --------------- Definicion de Variables  --------------- */
  const btnInSesion = document.querySelector("#idInSesion");
  const loginForm = document.querySelector("#idLoginForm");
  /* const lblInvalidPassword = document.querySelector("#idLblInvalidPassword"); */
  /* ------------------------------------------------------------- */

  /* ----------------- Bootstrap custom submit v2 -------------------- */
  /* console.log(loginForm.checkValidity()); */
  btnInSesion.addEventListener("click", function () {
    if (!loginForm.checkValidity()) {
      loginForm.classList.add("was-validated");
    } else {
      window.location.href = "home.html";
    }
  });
});
