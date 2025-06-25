function scrollToLatestProducts() {
    var latestProductsHeading = document.getElementById("latestProductsHeading");
    latestProductsHeading.scrollIntoView({ behavior: "smooth", block: "start" });
}


    function showMessage() {
        alert("Stay tuned for our new products!");
    }

    document.addEventListener('DOMContentLoaded', function () {
        const searchInput = document.getElementById('searchInput');
        const cards = document.querySelectorAll('.card');
    
        searchInput.addEventListener('input', function () {
            const searchText = searchInput.value.toLowerCase().trim(); 
    
            cards.forEach(card => {
                const desc = card.querySelector('.desc').textContent.toLowerCase().trim(); 
                if (searchText && desc.includes(searchText)) { 
                    card.classList.add('highlight');
                } else {
                    card.classList.remove('highlight');
                }
            });
        });
    });

        function showBuyForm() {
            var buyForm = document.getElementById("buyForm");
            buyForm.style.display = "block";
        }
    
        function closeForm() {
            var buyForm = document.getElementById("buyForm");
            buyForm.style.display = "none";
        }
    
        var buyButtons = document.querySelectorAll(".btn");
        buyButtons.forEach(function(button) {
            button.addEventListener("click", showBuyForm);
        });


        function validateForm() {
            var firstName = document.getElementById("firstName").value;
            var lastName = document.getElementById("lastName").value;
            var address = document.getElementById("address").value;
            var phone = document.getElementById("phone").value;
            var email = document.getElementById("email").value;
            var paymentMethod = document.getElementById("paymentMethod").value;
        
            if (firstName === "" || lastName === "" || address === "" || phone === "" || email === "" || paymentMethod === "") {
                alert("Please fill in all fields.");
                return false;
            }
        
            if (!/^\d{10}$/.test(phone)) {
                alert("Please enter a valid 10-digit phone number.");
                return false;
            }
        
            if (!/\S+@\S+\.\S+/.test(email)) {
                alert("Please enter a valid email address.");
                return false;
            }
        
            return true;
        }
        
        function saveFormData() {
            var formData = {
                firstName: document.getElementById("firstName").value,
                lastName: document.getElementById("lastName").value,
                address: document.getElementById("address").value,
                phone: document.getElementById("phone").value,
                email: document.getElementById("email").value,
                paymentMethod: document.getElementById("paymentMethod").value
            };
        
            var formDataJson = JSON.stringify(formData);
        
            localStorage.setItem("formData", formDataJson);
        }
        
        document.getElementById("orderForm").addEventListener("submit", function(event) {
            event.preventDefault();
            if (validateForm()) {
                saveFormData();
                alert("Form submitted successfully!");
                closeForm(); 
            }
        });
        
        function loadFormData() {
            var formDataJson = localStorage.getItem("formData");
            if (formDataJson) {
                var formData = JSON.parse(formDataJson);
                document.getElementById("firstName").value = formData.firstName;
                document.getElementById("lastName").value = formData.lastName;
                document.getElementById("address").value = formData.address;
                document.getElementById("phone").value = formData.phone;
                document.getElementById("email").value = formData.email;
                document.getElementById("paymentMethod").value = formData.paymentMethod;
            }
        }
        
        window.onload = loadFormData;
        
        function closeForm() {
            var buyForm = document.getElementById("buyForm");
            buyForm.style.display = "none";
        }