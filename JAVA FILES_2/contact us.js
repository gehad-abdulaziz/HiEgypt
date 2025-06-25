document.getElementById('submitBtn').addEventListener('click', function() {
    var name = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var type = document.getElementById("type").value.trim();
    var area = document.getElementById("area").value.trim();

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('type', type);
    localStorage.setItem('area', area);
});
