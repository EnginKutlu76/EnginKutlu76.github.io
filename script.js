document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // Generate certificate cards
    const certificatesGrid = document.getElementById("certificates-grid");

    if (certificatesGrid) {

        for (let i = 1; i <= 27; i++) {

            const card = document.createElement("div");

            card.className = "certificate-card";

            const number = String(i).padStart(2, "0");

            card.innerHTML = `
                <div>
                    <div class="certificate-number">
                        CERTIFICATE ${number}
                    </div>

                    <h3>Certificate ${number}</h3>
                </div>

                <a
                    class="certificate-link"
                    href="assets/certificates/${i}.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Certificate
                    <span>→</span>
                </a>
            `;

            certificatesGrid.appendChild(card);
        }
    }

});