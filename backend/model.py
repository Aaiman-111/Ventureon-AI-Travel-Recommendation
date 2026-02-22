import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder

data = {
    "budget": [15000, 20000, 50000, 80000, 120000, 30000, 60000, 100000, 1800, 1600, 2200, 2000, 1400, 1600, 900, 800, 1200, 1700],
    "days": [2, 3, 5, 7, 6, 4, 5, 8,10],
    "interest": ["adventure", "relaxation", "nature", "luxury", "luxury", "adventure", "nature", "luxury", "anime", "history", "beach", "cultural", "nature", "adventure", "relaxation", "luxury", "nature", "adventure"],
    "destination": [ "Goa", "Manali", "Switzerland", "Jaipur", "Kerala","Tokyo", "Turkey", "Dubai", "Canada", "Australia", "Africa", "South-Korea", "China", "Malaysia", "Sri Lanka"]
}

df = pd.DataFrame(data)

# Encode interest
le_interest = LabelEncoder()
df["interest_encoded"] = le_interest.fit_transform(df["interest"])

# Encode destination (target)
le_destination = LabelEncoder()
df["destination_encoded"] = le_destination.fit_transform(df["destination"])

X = df[["budget", "days", "interest_encoded"]]
y = df["destination_encoded"]

# Train model
model = RandomForestClassifier()
model.fit(X, y)

def recommend_trip(budget, interest, days):
    interest_encoded = le_interest.transform([interest])[0]

    prediction = model.predict([[budget, days, interest_encoded]])

    destination = le_destination.inverse_transform(prediction)[0]

    itinerary = []
    for day in range(1, days + 1):
        itinerary.append(f"Day {day}: Explore {destination} - Enjoy {interest} activities")

    return {
        "destination": destination,
        "itinerary": itinerary
    }
