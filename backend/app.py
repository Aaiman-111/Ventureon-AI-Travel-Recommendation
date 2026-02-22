from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  



def choose_destination(budget, style):
    style = style.lower()

    if "paradise" in style:
        return "Switzerland Luxury"

    elif "adventure" in style:
        return "Ladakh Adventure"

    elif "relax" in style:
        return "Kerala Backwaters"

    elif "luxury" in style:
        return "Dubai Luxury"

    elif "Anime" in style:
        return "Tokyo"

    elif "beautiful" in style:
        return "Turkey"

    elif "cold" in style:
        return "Canada"

    elif "beauty" in style:
        return "Australia"

    elif "wild life" in style:
        return "Africa"

    elif "k-pop culture " in style:
        return "South-Korea"

    elif "culture" in style:
        return "China"

    elif "malaysia" in style:
        return "Malaysia"

    elif "sri lanka" in style:
        return "Sri Lanka"

    elif budget < 15000:
        return "Goa Beach"

    else:
        return "Manali Mountains"




def generate_activities(destination):
    activities = {
        "Goa Beach": [
            "Parasailing",
            "Scuba Diving",
            "Beach Party",
            "Sunset Cruise"
        ],
        "Manali Mountains": [
            "Snow Trekking",
            "Camping",
            "River Rafting",
            "Mall Road Walk"
        ],
        "Kerala Backwaters": [
            "Houseboat Stay",
            "Ayurveda Spa",
            "Village Tour",
            "Backwater Cruise"
        ],
        "Ladakh Adventure": [ 
            "Bike Trip",
            "High Pass Trek",
            "Pangong Lake Visit",
            "Camping Under Stars"
        ],
        "Switzerland Luxury": [
            "Mountain Train Ride",
            "Luxury Resort Stay",
            "Lake Cruise",
            "Ski Experience"
        ],
        "Dubai Luxury": [
            "Desert Safari",
            "Luxury Shopping",
            "Sky Diving",
            "Luxury Spa Day"
        ],
        "Tokyo": [
            "City Tour",
            "Sushi Making Class",
            "Cherry Blossom Viewing",
            "Anime Museum Visit"
        ],
        "Turkey": [
            "Historical Sites Tour",
            "Hot Air Balloon Ride",
            "Turkish Bath Experience",
            "Bosphorus Cruise"
        ],
        "Canada": [
            "Niagara Falls Visit",
            "Rocky Mountains Hiking",
            "City Tour of Toronto",
            "Whale Watching"
        ],
        "Australia": [
            "Great Barrier Reef Snorkeling",
            "Sydney Opera House Tour",
            "Kangaroo Encounter",
            "Uluru Sunset"
        ],
        "Africa": [
            "Safari Adventure",
            "Victoria Falls Visit",
            "Cultural Village Tour"
        ],
        "South-Korea": [
            "Seoul City Tour",
            "K-Pop Dance Class",
            "Traditional Hanbok Experience",
            "DMZ Tour"
        ],
        "China": [
            "Great Wall Hike",
            "Forbidden City Tour",
            "Terracotta Army Visit",
            "Peking Duck Dinner"
        ],
        "Malaysia": [
            "Petronas Towers Visit",
            "Batu Caves Tour",
            "Island Hopping",
            "Street Food Tasting"
        ],
        "Sri Lanka": [
            "Sigiriya Rock Fortress",
            "Tea Plantation Tour",
            "Yala National Park Safari",
            "Galle Fort Visit"
        ]
    }
    

    return activities.get(destination, [])



def categorize_budget(budget):
    if budget < 15000:
        return "Low Budget"
    elif budget < 40000:
        return "Medium Budget"
    else:
        return "Luxury"





@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        budget = int(data.get("budget", 0))
        days = int(data.get("days", 1))
        season = data.get("season", "")
        style = data.get("style", "")

        destination = choose_destination(budget, style)
        activities = generate_activities(destination)
        budget_category = categorize_budget(budget)

        return jsonify({
            "destination": destination,
            "activities": activities,
            "budget_category": budget_category,
            "days": days,
            "season": season,
            "style": style
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

def generate_itinerary(destination, days):
    return f"""
    Experience {destination} over {days} amazing days.
    Explore top attractions, enjoy local cuisine,
    and immerse yourself in unforgettable adventures.
    This curated plan balances relaxation and excitement.
    """


if __name__ == "__main__":
    app.run(debug=True)
