document.addEventListener("DOMContentLoaded", function () {
    const menuList = document.querySelectorAll(".menu-list");
    const totalElement = document.getElementById("total");
    let total = 0;

    menuList.forEach(list => {
        list.addEventListener("click", function (event) {
            const menuItem = event.target.closest("li");
            if (!menuItem) return; // Exit jika bukan menu yang diklik

            const price = parseFloat(menuItem.getAttribute("data-price"));
            const orderCount = menuItem.querySelector(".order-count");
            let count = parseInt(orderCount.textContent);

            if (event.target.classList.contains("plus-btn")) {
                count++;
                total += price;
            } else if (event.target.classList.contains("minus-btn") && count > 0) {
                count--;
                total -= price;
            }

            orderCount.textContent = count;
            updateTotal();
        });
    });

    function updateTotal() {
        totalElement.textContent = "Total: Rp " + total.toFixed(2);
    }
});