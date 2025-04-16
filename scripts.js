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
    image: "https://i.pinimg.com/736x/c9/7b/a9/c97ba98b802694a97a548160c9e324ef.jpg",
    goals: [
      "Build a successful app",
      "Work on innovative technology",
    ],
    quotes: ["Code like you could be the next Steve Jobs"],
  },
  {
    title: "Content Creator",
    description: "Creates engaging content for various platforms.",
    image: "img/IMG_1792.jpg",
    goals: [
      "Grow a loyal audience",
      "Produce high-quality content",
    ],
    quotes: ["Your creativity is your currency"],
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
    image: "https://i.pinimg.com/736x/11/35/4f/11354f25567e8b47e3e2b990ac11228c.jpg",
    goals: [
      "Foster a love for learning",
      "Support students' academic growth",
    ],
    quotes: ["Teaching is the greatest act of optimism"],
  },
  {
    title: "Recruiter",
    description: "Connects job seekers with employers.",
    image: "https://i.pinimg.com/736x/ea/c8/31/eac83105eb521f004de7c4900f4ef7de.jpg",
    goals: [
      "Match candidates with the right jobs",
      "Build strong relationships with clients",
    ],
    quotes: ["Your network is your networth"],
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