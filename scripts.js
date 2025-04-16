/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// This is an array of strings (career titles)

const careers = [
  {
    title: "Author",
    description: "Writes books and articles.",
    image: "https://m.media-amazon.com/images/I/51D6fgwoWRL._SL1500_.jpg",
    goals: [
      "Write a bestselling novel",
      "Publish articles in top magazines",
    ],
    quotes: ["Your story is your power"],
  },
  {
    title: "Software Engineer",
    description: "Develops software applications.",
    image: "https://pixabay.com/photos/software-developer-web-developer-6521720/_.jpg",
    goals: [
      "Build a successful app",
      "Work on innovative technology",
    ],
    quotes: ["Code like you could be the next Steve Jobs"],
  },
  {
    title: "Content Creator",
    description: "Creates engaging content for various platforms.",
    image: "https://example.com/content_creator.jpg",
    goals: [
      "Grow a loyal audience",
      "Produce high-quality content",
    ],
    quotes: ["Your creativity is your currency"],
  },
  {
    title: "Recruiter",
    description: "Helps companies find the right talent.",
    image: "https://example.com/recruiter.jpg",
    goals: [
      "Match candidates with job opportunities",
      "Develop effective recruitment strategies",
    ],
    quotes: ["You are the bridge between talent and opportunity"],
  },
  {
    title: "Social Worker",
    description: "Provides support and assistance to individuals in need.",
    image: "https://example.com/social_worker.jpg",
    goals: [
      "Advocate for social justice",
      "Create positive change in communities",
    ],
    quotes: ["Your compassion can change lives"],
  },
  {
   
    title: "Nurse",
    description: "Provides medical care and support to patients.",
    image: "img/nurse.jpg",
    goals: [
      "Deliver compassionate patient care",
      "Stay updated on medical advancements",
    ],
    quotes: ["Not all heroes wear capes some wear scrubs"],
  },
  {
    title: "Teacher",
    description: "Educates and inspires students.",
    image: "https://example.com/teacher.jpg",
    goals: [
      "Foster a love for learning",
      "Support students' academic growth",
    ],
    quotes: ["Teaching is the greatest act of optimism"],
  },

];

// This funtion is used to show the cards on the page
function showCards(filteredCareers = careers) {
  const container = document.getElementById("card-container");
  const template = document.querySelector(".card");
  container.innerHTML = ""; // Clear old cards

  filteredCareers.forEach((career) => {
    const nextCard = template.cloneNode(true);
    editCardContent(nextCard, career);
    nextCard.style.display = "block"; // Make visible

    nextCard.addEventListener("click", () => {
      alert(career.quotes.join(" "));
    });
    container.appendChild(nextCard);
  });
}

// This funtion Edit content of the card based on career data
function editCardContent(card, career) {
  card.querySelector(".card-title").textContent = career.title;
  card.querySelector(".card-description").textContent = career.description;
  card.querySelector(".card-image").src = career.image;
  card.querySelector(".card-goals").innerHTML = career.goals
  .map((goal) => `<li>${goal}</li>`)
  .join("");
  card.querySelector(".card-quote").textcontent = career.quotes.join(" ");
 }

 function searchCareer() {
  const searchTerm = document.getElementById("search-input").value.toLowerCase();
  const filtered = careers.filter((career) =>
    career.title.toLowerCase().includes(searchInput)
  );
  showCards(filtered);
}
// This function is used to filter the cards based on the search input
document.addEventListener("DOMContentLoaded", () => {
  showCards(); // Show all careers initially

  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();

    const filtered = careers.filter((career) =>
      career.title.toLowerCase().includes(searchTerm)
    );

    showCards(filtered);
  });
});
