document.addEventListener("DOMContentLoaded", function () {

   
    const tripData = JSON.parse(localStorage.getItem("tripData"));

    if (!tripData) {
        window.location.href = "index.html";
        return;
    }

    const destination = tripData.destination;

    const destinationData = {

        "Goa Beach": {
            image: "images/goa.jpg",
            places: ["Baga Beach", "Calangute Beach", "Fort Aguada"],
            restaurants: ["Thalassa", "Britto’s", "Fisherman’s Wharf"],
            culture: "Goa is famous for beaches, nightlife and Portuguese heritage.",
            food: "Goan Fish Curry, Bebinca, Prawn Balchão"
        },

        "Manali Mountains": {
            image: "images/manali.jpg",
            places: ["Solang Valley", "Rohtang Pass", "Hadimba Temple"],
            restaurants: ["Cafe 1947", "Johnson's Cafe", "Drifters Inn"],
            culture: "Manali offers scenic Himalayan beauty and adventure sports.",
            food: "Himachali Dham, Trout Fish, Momos"
        },

        "Kerala Backwaters": { 
            image: "images/kerala.jpg",
            places: ["Alleppey", "Kumarakom", "Vembanad Lake"],
            restaurants: ["Rice Boat", "Grand Pavilion", "Thaff"],
            culture: "Kerala is known for houseboats, greenery and Ayurvedic traditions.",
            food: "Appam, Kerala Sadya, Fish Moilee"
        },

        "Ladakh Adventure": {
            image: "images/ladakh.jpg",
            places: ["Pangong Lake", "Nubra Valley", "Magnetic Hill"],
            restaurants: ["Gesmo Restaurant", "Bon Appetit", "Lamayuru Cafe"],
            culture: "Ladakh blends Tibetan culture with breathtaking landscapes.",
            food: "Thukpa, Momos, Butter Tea"
        },

        "Dubai Luxury": {
            image: "images/dubai.jpg",
            places: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall"],
            restaurants: ["Pierchic", "Al Fanar", "Zuma"],
            culture: "Dubai mixes modern luxury with Emirati traditions.",
            food: "Shawarma, Al Harees, Luqaimat"
        },
        "Tokyo": {
            image: "images/tokyo.jpg",
            places: ["Shibuya", "Tokyo Tower", "Asakusa"],
            restaurants: ["Sukiyabashi Jiro", "Ichiran Ramen", "Gyukatsu Motomura"],
            culture: "Tokyo blends tradition and technology.",
            food: "Sushi, Ramen, Tempura",
            budget: "$18000",
            days: 6,
            interests: ["Anime", "Technology", "Temples"]
        },
        "Turkey": {
            image: "images/turkey.jpg",
            places: ["Istanbul", "Cappadocia", "Pamukkale"],
            restaurants: ["Mikla", "Neolokal", "Karakoy Lokantasi"],
            culture: "Turkey is rich in history and hospitality.",
            food: "Kebabs, Baklava, Meze",
            budget: "$12000",
            days: 7,
            interests: ["History", "Hot Air Balloons", "Markets"]
        },
        "Jaipur": {
            image: "images/jaipur.jpg",
            places: ["Amber Fort", "Hawa Mahal", "City Palace"],
            restaurants: ["Laxmi Misthan Bhandar", "Suvarna Mahal", "Samode Haveli"],
            culture: "Jaipur is the Pink City of India.",
            food: "Dal Baati Churma, Ghewar, Laal Maas",
            budget: "$8000",
            days: 4,
            interests: ["Palaces", "Shopping", "Culture"]
        },
        "Canada": {
            image: "images/canada.jpg",
            places: ["Niagara Falls", "Banff National Park", "CN Tower"],
            restaurants: ["Joe Beef", "Tojo's", "Le Bremner"],
            culture: "Canada is known for natural beauty and multiculturalism.",
            food: "Poutine, Maple Syrup, Nanaimo Bars",
            budget: "$20000",
            days: 8,
            interests: ["Nature", "Wildlife", "Cities"]
        },
        "Australia": {
            image: "images/australia.jpg",
            places: ["Sydney Opera House", "Great Barrier Reef", "Uluru"],
            restaurants: ["Quay", "Attica", "Rockpool"],
            culture: "Australia is famous for beaches and wildlife.",
            food: "Vegemite, Lamingtons, Barramundi",
            budget: "$22000",
            days: 10,
            interests: ["Beaches", "Adventure", "Wildlife"]
        },
        "Africa": {
            image: "images/africa.jpg",
            places: ["Serengeti", "Table Mountain", "Victoria Falls"],
            restaurants: ["Mama Africa", "Carnivore", "La Colombe"],
            culture: "Africa is diverse in culture and landscapes.",
            food: "Bunny Chow, Jollof Rice, Bobotie",
            budget: "$17000",
            days: 9,
            interests: ["Safari", "Mountains", "Falls"]
        },
        "South-Korea": {
            image: "images/south-Korea.jpg",
            places: ["Seoul", "Jeju Island", "Gyeongbokgung Palace"],
            restaurants: ["Mingles", "Janguhjin", "Jinmi Sikdang"],
            culture: "South Korea is vibrant and modern.",
            food: "Kimchi, Bibimbap, Korean BBQ",
            budget: "$14000",
            days: 6,
            interests: ["K-pop", "History", "Islands"]
        },
        "China": {
            image: "images/china.jpg",
            places: ["Great Wall", "Forbidden City", "Terracotta Army"],
            restaurants: ["Da Dong", "Din Tai Fung", "Lost Heaven"],
            culture: "China has ancient history and cuisine.",
            food: "Peking Duck, Dim Sum, Hot Pot",
            budget: "$16000",
            days: 7,
            interests: ["History", "Cuisine", "Landmarks"]
        },
        "Malaysia": {
            image: "images/malaysia.jpg",
            places: ["Petronas Towers", "Langkawi", "Penang"],
            restaurants: ["Nasi Kandar Line Clear", "Fatty Crab", "Restoran Oversea"],
            culture: "Malaysia is a melting pot of cultures.",
            food: "Nasi Lemak, Satay, Laksa",
            budget: "$11000",
            days: 5,
            interests: ["Street Food", "Nature", "Islands"]
        },
        "Sri Lanka": {
            image: "images/sri lanka.jpg",
            places: ["Sigiriya", "Galle", "Kandy"],
            restaurants: ["Ministry of Crab", "Upali's", "Nihonbashi"],
            culture: "Sri Lanka is known for beaches and heritage.",
            food: "Rice & Curry, Hoppers, Kottu Roti",
            budget: "$9000",
            days: 6,
            interests: ["Beaches", "Temples", "Wildlife"]
        },

        "Switzerland": {
            image: "images/switzerland.jpg",
            places: ["Matterhorn", "Lake Geneva", "Interlaken"],
            restaurants: ["Zeughauskeller", "La Table d’Edgard", "Hiltl"],
            culture: "Switzerland is known for alpine beauty and precision lifestyle.",
            food: "Fondue, Rösti, Swiss Chocolate"
        }
    };

    
    const info = destinationData[destination];

   
    document.getElementById("overviewTitle").innerText = destination;

    
    if (!info) {
        document.getElementById("cultureText").innerText =
            "Overview coming soon for this destination.";
        return;
    }

    const heroSection = document.querySelector(".overviewHero");
    if (heroSection) {
        heroSection.style.backgroundImage = `url(${info.image})`;
        heroSection.style.backgroundSize = "cover";
        heroSection.style.backgroundPosition = "center";
    }
    const placesList = document.getElementById("placesList");
    placesList.innerHTML = "";

    info.places.forEach((place, index) => {
        const li = document.createElement("li");
        li.innerText = "📍 " + place;
        li.style.opacity = "0";
        li.style.transform = "translateY(15px)";
        li.style.transition = "all 0.4s ease";

        placesList.appendChild(li);

        setTimeout(() => {
            li.style.opacity = "1";
            li.style.transform = "translateY(0)";
        }, 200 + index * 150);
    });

    const restaurantsList = document.getElementById("restaurantsList");
    restaurantsList.innerHTML = "";

    info.restaurants.forEach((rest, index) => {
        const li = document.createElement("li");
        li.innerText = "🍽 " + rest;
        li.style.opacity = "0";
        li.style.transform = "translateY(15px)";
        li.style.transition = "all 0.4s ease";

        restaurantsList.appendChild(li);

        setTimeout(() => {
            li.style.opacity = "1";
            li.style.transform = "translateY(0)";
        }, 400 + index * 150);
    });

    document.getElementById("cultureText").innerText = info.culture;
    document.getElementById("foodText").innerText = info.food;

});
    


function goBack() {
    window.history.back();
}
