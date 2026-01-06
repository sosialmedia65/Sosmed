// Animasi saat halaman dibuka
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {
            card.style.transition = "0.5s";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150);
    });
});

// Efek klik
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(0.95)";
        setTimeout(() => {
            card.style.transform = "scale(1)";
        }, 150);
    });
});
function shareProfile() {
    const shareData = {
        title: "Social Media Profile",
        text: "Cek akun sosial media saya di sini!",
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData)
            .catch(err => console.log("Share dibatalkan"));
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert("Link berhasil disalin!");
    }
}