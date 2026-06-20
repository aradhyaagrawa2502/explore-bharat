console.log("JS Loaded Successfully");
const trips = {
    goa: {
        title: "Goa 🌴",
        itinerary: [
            "Day 1: Arrival + North Goa Chill (Baga Beach)",
            "Day 2: North Goa Beaches (Anjuna, Vagator, Chapora Fort)",
            "Day 3: Markets & Cafes (Flea Market, café hopping)",
            "Day 4: South Goa Peace Day (Colva Beach, resorts)",
            "Day 5: Palolem & Agonda Beaches",
            "Day 6: Goa Culture (Bom Jesus, Fontainhas, cruise)",
            "Day 7: Dudhsagar Waterfalls",
            "Day 8: Water sports + adventure activities",
            "Day 9: Shopping + Departure"
        ],
        hotels: [
            "W Goa - ₹25,000/night",
            "Novotel Goa - ₹8,000/night",
            "Taj Exotica - ₹20,000/night"
        ],
        food: [
            "Britto’s - Baga Beach",
            "Martin’s Corner - South Goa",
            "Bean Me Up - Vegan Café"
        ]
    },

    kerala: {
        title: "Kerala 🌴",
        itinerary: [
            "Day 1: Munnar Arrival + Tea Gardens",
            "Day 2: Munnar Sightseeing (Echo Point, Dam)",
            "Day 3: Top Station + Nature Exploration",
            "Day 4: Thekkady Wildlife + Spice Plantation",
            "Day 5: Periyar Boating + Cultural Show",
            "Day 6: Alleppey Houseboat Stay",
            "Day 7: Backwater Village Tour",
            "Day 8: Kovalam Beach Relaxation",
            "Day 9: Shopping + Departure"
        ],
        hotels: [
            "Fragrant Nature Munnar",
            "Spice Village Thekkady",
            "Taj Kovalam"
        ],
        food: [
            "Rapsy Restaurant Munnar",
            "Bamboo Café Thekkady",
            "Halais Alleppey"
        ]
    },

    manali: {
        title: "Manali 🏔️",
        itinerary: [
            "Day 1: Arrival + Mall Road",
            "Day 2: Hadimba Temple + Old Manali",
            "Day 3: Solang Valley Adventure",
            "Day 4: Atal Tunnel + Sissu",
            "Day 5: Naggar Castle + Art Gallery",
            "Day 6: Kasol Trip",
            "Day 7: Kheerganga Trek",
            "Day 8: Tosh Village + Relaxation",
            "Day 9: Local café + shopping + departure"
        ],
        hotels: [
            "The Himalayan Resort",
            "Snow Valley Resort",
            "Zostel Manali"
        ],
        food: [
            "Café 1947",
            "Johnson’s Café",
            "The Lazy Dog"
        ]
    },

    rajasthan: {
        title: "Rajasthan 🏰",
        itinerary: [
            "Day 1: Jaipur City Tour",
            "Day 2: Amber Fort Circuit",
            "Day 3: Jaipur Heritage Day",
            "Day 4: Jodhpur Blue City",
            "Day 5: Jodhpur Culture + Markets",
            "Day 6: Desert Safari (Osian)",
            "Day 7: Jaisalmer Fort",
            "Day 8: Sam Sand Dunes Camp",
            "Day 9: Local shopping + departure"
        ],
        hotels: [
            "Rambagh Palace",
            "RAAS Jodhpur",
            "Suryagarh Jaisalmer"
        ],
        food: [
            "LMB Jaipur",
            "Gypsy Jodhpur",
            "Trio Jaisalmer"
        ]
    },

    up: {
        title: "Uttar Pradesh 🕌",
        itinerary: [
            "Day 1: Agra Taj Mahal",
            "Day 2: Agra Fort + Mehtab Bagh",
            "Day 3: Mathura Temple Tour",
            "Day 4: Vrindavan Spiritual Tour",
            "Day 5: Lucknow Food Tour",
            "Day 6: Local markets + culture",
            "Day 7: Nearby excursion",
            "Day 8: Relax day",
            "Day 9: Departure"
        ],
        hotels: [
            "Taj Hotel Agra",
            "Clarks Shiraz",
            "Hyatt Regency Lucknow"
        ],
        food: [
            "Dasaprakash Agra",
            "Tunday Kababi Lucknow",
            "Mathura Peda Shops"
        ]
    },

    mumbai: {
        title: "Mumbai 🌆",
        itinerary: [
            "Day 1: Gateway of India",
            "Day 2: Marine Drive + CST",
            "Day 3: Heritage Mumbai",
            "Day 4: Bandra Bollywood Tour",
            "Day 5: Juhu Beach",
            "Day 6: Versova + shopping",
            "Day 7: Lonavala Trip",
            "Day 8: Alibaug Trip",
            "Day 9: Kashid + return"
        ],
        hotels: [
            "Sea Palace Hotel",
            "Residency Hotel Fort",
            "Radisson Alibaug"
        ],
        food: [
            "Bademiya",
            "Café Leopold",
            "Juhu Street Food"
        ]
    }
};

function generatePlan() {
    let place = document.getElementById("place").value;
    let days = document.getElementById("days").value;
    let output = document.getElementById("output");

    let data = trips[place];

    output.innerHTML = `<h2>🌍 ${data.title} AI Trip Plan</h2>`;

    output.innerHTML += `<h3>📅 Itinerary</h3>`;
    data.itinerary.slice(0, days).forEach(d => {
        output.innerHTML += `<p>✔️ ${d}</p>`;
    });

    output.innerHTML += `<h3>🏨 Hotels</h3>`;
    data.hotels.forEach(h => {
        output.innerHTML += `<p>🏨 ${h}</p>`;
    });

    output.innerHTML += `<h3>🍽️ Food</h3>`;
    data.food.forEach(f => {
        output.innerHTML += `<p>🍴 ${f}</p>`;
    });
}