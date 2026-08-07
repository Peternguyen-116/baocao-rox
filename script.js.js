document.addEventListener("DOMContentLoaded", function () {
    const productListContainer = document.getElementById("product-list");

    // Tiến hành gọi file data.json cùng thư mục
    fetch("data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Không thể tải file dữ liệu JSON.");
            }
            return response.json();
        })
        .then(data => {
            // Xóa thông báo "Đang tải..."
            productListContainer.innerHTML = "";

            // Duyệt qua mảng dữ liệu trong JSON và tạo HTML cho từng item
            data.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="card-content">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <a href="${item.link}" target="_blank" class="btn">Xem chi tiết</a>
                    </div>
                `;

                productListContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Lỗi:", error);
            productListContainer.innerHTML = `<p class="loading" style="color: red;">Đã xảy ra lỗi khi tải dữ liệu: ${error.message}</p>`;
        });
});