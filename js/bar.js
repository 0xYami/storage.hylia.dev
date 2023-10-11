function CreateSnackbar(txt, timeToStart, timeToRemove) {
        setTimeout(() => {
        document.getElementById(
          "snackbar"
        ).innerHTML = `${txt || '<i class="bi bi-heart-fill" style="color: red; font-size: 20px;"></i> This website is <a href="https://git.hylia.dev/hylia.dev" target="_blank">open source</a>.' }`;
        // Remove the class hid, and add the class show
        document.getElementById("snackbar").classList.remove("d-none");
        document.getElementById("snackbar").classList.add("show");

        setTimeout(function () {
          document.body.removeChild(document.getElementById("snackbar"));
        }, timeToRemove || 3000);
      }, timeToStart || 2000);
}


window.CreateSnackbar = CreateSnackbar
