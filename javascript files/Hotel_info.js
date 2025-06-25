(function() {
    let field = document.querySelector('.items');
    let li = Array.from(field.children);

    function FilterProduct() {
        for (let i of li) {
            const name = i.querySelector('strong');
            const x = name.textContent;
            i.setAttribute("data-category", x);
        }

        let indicator = document.querySelector('.indicator').children;
        this.run = function() {
            for (let i = 0; i < indicator.length; i++) {
                indicator[i].addEventListener('click', function() {
                    indicator.forEach(element => element.classList.remove('active'));
                    this.classList.add('active');
                    const displayItems = this.getAttribute('data-filter');

                    li.forEach(element => {
                        element.style.transform = "scale(0)";
                        setTimeout(() => {
                            element.style.display = "none";
                        }, 500);

                        if (element.getAttribute('data-category') === displayItems || displayItems === "all") {
                            element.style.transform = "scale(1)";
                            setTimeout(() => {
                                element.style.display = "block";
                            }, 500);
                        }
                    });
                });
            }
        }
    }

    function SortProduct() {
        const select = document.getElementById('select');
        const originalOrder = li.slice();
        
        li.forEach(item => {
            const price = Number(item.lastElementChild.textContent.trim().substring(1));
            item.dataset.price = price;
        });

        this.run = function() {
            select.addEventListener('change', sortingValue);
        }

        function sortingValue() {
            const sortedItems = li.slice().sort((a, b) => {
                const priceA = Number(a.dataset.price);
                const priceB = Number(b.dataset.price);
                return select.value === 'LowToHigh' ? priceA - priceB : priceB - priceA;
            });

            while (field.firstChild) { field.removeChild(field.firstChild); }
            field.append(...sortedItems);
        }
    }


    new FilterProduct().run();
    new SortProduct().run();
 
    
})();

