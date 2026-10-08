    /* =========================================
       ELEMENTS
    ========================================== */

    const noticeCard = document.querySelector(".notice-card");
    const topImage = document.querySelector(".top-image");
    const dateDisplay = document.querySelector(".date-display");


    /* =========================================
       CARD ENTRANCE
    ========================================== */

    if (noticeCard) {
        noticeCard.style.opacity = "0";

        setTimeout(() => {
            noticeCard.style.transition =
                "opacity 0.8s ease, transform 0.8s ease";

            noticeCard.style.opacity = "1";
        }, 200);
    }


    /* =========================================
       IMAGE LOAD EFFECT
    ========================================== */

    if (topImage) {

        const image = topImage.querySelector("img");

        if (image) {

            image.addEventListener("load", () => {
                topImage.classList.add("image-loaded");
            });

        }
    }


    /* =========================================
       HOLIDAY DATE
       08 OCTOBER 2026 - 13 OCTOBER 2026
    ========================================== */

    const startDate = new Date("2026-10-08T00:00:00");
    const endDate = new Date("2026-10-13T23:59:59");


    function updateHolidayStatus() {

        if (!dateDisplay) return;

        const now = new Date();

        let status = "";

        if (now < startDate) {

            status = "holiday-upcoming";

        } else if (now >= startDate && now <= endDate) {

            status = "holiday-active";

        } else {

            status = "holiday-ended";
        }

        dateDisplay.dataset.status = status;
    }


    updateHolidayStatus();

    // Update every minute
    setInterval(updateHolidayStatus, 60000);


    /* =========================================
       SUBTLE CARD TILT
    ========================================== */

    if (noticeCard && window.matchMedia("(min-width: 800px)").matches) {

        noticeCard.addEventListener("mousemove", (event) => {

            const rect = noticeCard.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -1.5;
            const rotateY = ((x - centerX) / centerX) * 1.5;

            noticeCard.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-4px)`;
        });


        noticeCard.addEventListener("mouseleave", () => {

            noticeCard.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
        });
    }


    /* =========================================
       PREVENT IMAGE DRAGGING
    ========================================== */

    document.querySelectorAll("img").forEach((img) => {
        img.setAttribute("draggable", "false");
    });


    /* =========================================
       CONSOLE MESSAGE
    ========================================== */

    console.log(
        "%c HUOKAING THARA BANK ",
        "background:#8f1520;color:#f4d98b;font-size:16px;font-weight:bold;padding:8px;"
    );

    console.log(
        "Pchum Ben Holiday Notice - 08 October 2026 to 13 October 2026"
    );

});
