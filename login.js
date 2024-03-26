document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Ganti dengan username dan password yang baru
    var validUsername = "alyaak536@gmail.com";
    var validPassword = "233307063";

    // Cek apakah username dan password sesuai
    if (username === validUsername && password === validPassword) {
        // Tampilkan popup ucapan selamat datang
        alert("Selamat datang alya ");

        // Redirect ke halaman menu
        window.location.href = "menu.html";
    } else {
        // Tampilkan pesan kesalahan
        var errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "Username atau password salah. Silakan coba lagi.";
        errorMessage.style.display = "block"; // Tampilkan pesan kesalahan
    }
});