document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
        });
        function search() {
            var input = document.getElementById("searchInput").value.toUpperCase();
            var faqItems = document.querySelectorAll(".faq-list li");
          
            faqItems.forEach(function(faqItem) {
              var faqTitle = faqItem.querySelector(".faq-title").textContent || faqItem.querySelector(".faq-title").innerText;
              faqItem.style.display = faqTitle.toUpperCase().includes(input) ? "" : "none";
            });
          }
          
          document.getElementById("searchButton").addEventListener("click", search);
          document.getElementById("searchInput").addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
              event.preventDefault();
              search();
            }
          });
          
