// =====================
// DESTINATION NAVIGATION
// =====================

const pages = {
    goa: "goa.html",
    kerala: "kerala.html",
    manali: "manali.html",
    rajasthan: "rajasthan.html",
    mumbai: "mumbai.html",
    uttarpradesh: "uttarpradesh.html",
    jaipur: "jaipur.html"
};

function goToPage() {
    let input = document.getElementById("searchInput").value.toLowerCase().trim();

    if (!input) {
        alert("Please enter a destination");
        return;
    }

    for (let key in pages) {
        if (input.includes(key)) {
            window.location.href = pages[key];
            return;
        }
    }

    alert("Destination not found in this site");
}

// Optional click navigation from cards or dropdown
function openDestination(place) {
    if (pages[place]) {
        window.location.href = pages[place];
    } else {
        alert("Page not found!");
    }
}

// =====================
// BOOKING BUTTON
// =====================

function openBooking() {
    alert("Booking feature coming soon 🚀");
}

// =====================
// REVIEW SYSTEM (FIREBASE)
// =====================

function submitReview() {
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let rating = document.getElementById("rating").value;

    if (!name || !message) {
        alert("Please fill all fields!");
        return;
    }

    if (typeof db === "undefined") {
        alert("Database not connected!");
        return;
    }

    db.collection("reviews").add({
        name: name,
        message: message,
        rating: rating,
        time: new Date()
    });

    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
    document.getElementById("rating").value = "";
}

// Live review load
if (typeof db !== "undefined") {
    db.collection("reviews")
        .orderBy("time", "desc")
        .onSnapshot((snapshot) => {
            let container = document.getElementById("new-reviews");
            if (!container) return;

            container.innerHTML = "";

            snapshot.forEach((doc) => {
                let data = doc.data();

                container.innerHTML += `
                    <div class="new-review-card">
                        <h4>${data.name}</h4>
                        <p>${data.message}</p>
                        <div>${data.rating}</div>
                    </div>
                `;
            });
        });
}

// =====================
// SCROLL ANIMATION
// =====================

const elements = document.querySelectorAll(
    ".card, .why-box, .review-card, .cta-box"
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});