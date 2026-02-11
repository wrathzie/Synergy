// Initialize an array with pre-generated journeys
const journeys = [
    {
        username: "Alice",
        location: "Paris",
        imageURL: "https://example.com/paris.jpg",
        cost: 1500,
        culturalHeritage: "Eiffel Tower",
        easeOfTravel: "Easy"
    },
    {
        username: "Bob",
        location: "New York",
        imageURL: "https://example.com/newyork.jpg",
        cost: 2000,
        culturalHeritage: "Statue of Liberty",
        easeOfTravel: "Moderate"
    },
    {
        username: "Catherine",
        location: "Tokyo",
        imageURL: "https://example.com/tokyo.jpg",
        cost: 3000,
        culturalHeritage: "Imperial Palace",
        easeOfTravel: "Easy"
    },
    {
        username: "David",
        location: "Rio de Janeiro",
        imageURL: "https://example.com/rio.jpg",
        cost: 1000,
        culturalHeritage: "Christ the Redeemer",
        easeOfTravel: "Moderate"
    },
    {
        username: "Eva",
        location: "Sydney",
        imageURL: "https://example.com/sydney.jpg",
        cost: 2500,
        culturalHeritage: "Sydney Opera House",
        easeOfTravel: "Easy"
    },
    {
        username: "Frank",
        location: "Cairo",
        imageURL: "https://example.com/cairo.jpg",
        cost: 1200,
        culturalHeritage: "Pyramids of Giza",
        easeOfTravel: "Difficult"
    },
    {
        username: "Grace",
        location: "Venice",
        imageURL: "https://example.com/venice.jpg",
        cost: 1800,
        culturalHeritage: "Grand Canal",
        easeOfTravel: "Easy"
    }
];

let currentUser = null;

// Function to display journeys
function displayJourneys() {
    const journeyList = document.getElementById("journeyList");
    journeyList.innerHTML = "";
    journeyList.style.display = "block";

    journeys.forEach((journey) => {
        const journeyDiv = document.createElement("div");

        // Create HTML elements to display each property of the journey
        const usernameElement = document.createElement("p");
        usernameElement.textContent = "Username: " + journey.username;

        const locationElement = document.createElement("p");
        locationElement.textContent = "Location: " + journey.location;

        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", journey.imageURL);
        imageElement.setAttribute("alt", "Places Image");

        const costElement = document.createElement("p");
        costElement.textContent = "Cost: " + journey.cost;

        const culturalHeritageElement = document.createElement("p");
        culturalHeritageElement.textContent = "Cultural Heritage Sites: " + journey.culturalHeritage;

        const easeOfTravelElement = document.createElement("p");
        easeOfTravelElement.textContent = "Ease of Travel Evaluation: " + journey.easeOfTravel;

        // Append elements to journeyDiv
        journeyDiv.appendChild(usernameElement);
        journeyDiv.appendChild(locationElement);
        journeyDiv.appendChild(imageElement);
        journeyDiv.appendChild(costElement);
        journeyDiv.appendChild(culturalHeritageElement);
        journeyDiv.appendChild(easeOfTravelElement);

        // Append journeyDiv to journeyList
        journeyList.appendChild(journeyDiv);
    });
}

// Function to create a new user
function createUser() {
    const username = prompt("Enter your username:");
    if (username) {
        currentUser = username;
        alert(`User ${currentUser} created.`);
    }
}

// Function to record a new journey
function recordJourney() {
    if (currentUser) {
        document.getElementById("journeyForm").style.display = "block";
    } else {
        alert("Please create a user first.");
    }
}

// Add event listener to create user button
document.getElementById("createUserBtn").addEventListener("click", createUser);

// Add event listener to record journey button
document.getElementById("recordJourneyBtn").addEventListener("click", recordJourney);

// Add event listener to view journeys button
document.getElementById("viewJourneysBtn").addEventListener("click", displayJourneys); // <-- Ensure this line is here

// Add event listener to the form to capture new journeys
document.getElementById("journeyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    if (!currentUser) {
        alert("Please create a user first.");
        return;
    }

    // Capture form inputs
    const location = document.getElementById("location").value;
    const imageURL = document.getElementById("imageURL").value;
    const cost = document.getElementById("cost").value;
    const culturalHeritage = document.getElementById("culturalHeritage").value;
    const easeOfTravel = document.getElementById("easeOfTravel").value;

    // Create a new journey object
    const newJourney = {
        username: currentUser,
        location: location,
        imageURL: imageURL,
        cost: cost,
        culturalHeritage: culturalHeritage,
        easeOfTravel: easeOfTravel
    };

    // Add the new journey to the journeys array
    journeys.push(newJourney);

    // Update the display
    displayJourneys();

    // Optionally, reset the form
    event.target.reset();
});

