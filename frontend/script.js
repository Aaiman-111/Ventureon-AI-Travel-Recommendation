async function generateTrip() {
    try {
        const budget = document.getElementById("budget").value;
        const days = document.getElementById("days").value;
        const style = document.getElementById("interests").value;

        const response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                budget: budget,
                days: days,
                style: style,
                season: "Any"
            })
        });

        if (!response.ok) {
            throw new Error("Server error");
        }

        const data = await response.json();

      
        localStorage.setItem("tripData", JSON.stringify(data));

        document.body.style.opacity = "0";
        document.body.style.transition = "opacity 0.5s ease";

         setTimeout(() => {
            window.location.href = "results.html";
        }, 500);

    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Make sure backend is running.");
    }
}

