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
let careers = [
  {
    title: "Author",
    description: "Writes books and articles.",
    image: "https://www.amazon.com/THESE-MOMENTS-Joyce-Jeleh-Nimely/dp/B0D4MN9MTD",
    goals: [
      "Write a bestselling novel",
      "Publish articles in top magazines",
      "Attend book signings and events",
    ],
    quotes: ["Your story is your power"],
  },
  {
    title: "Software Engineer",
    description: "Develops software applications.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Software_engineer_icon.png",
    goals: [
      "Build a successful app",
      "Contribute to open-source projects",
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
      "Collaborate with brands",
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
      "Build a strong professional network",
      "Develop effective recruitment strategies",
    ],
    education: "Bachelor's degree in Human Resources or related field",
    quotes: ["You are the bridge between talent and opportunity"],
  },
  {
    title: "Social Worker",
    description: "Provides support and assistance to individuals in need.",
    image: "https://example.com/social_worker.jpg",
    goals: [
      "Advocate for social justice",
      "Support individuals and families",
      "Create positive change in communities",
    ],
    quotes: ["Your compassion can change lives"],
  },
  {
    title: "Stay-at-Home-Parent",
    description: "Manages household and family responsibilities.",
    image: "https://example.com/stay_at_home_parent.jpg",
    goals: [
      "Create a nurturing environment for children",
      "Balance household tasks and family time",
      "Support children's education and development",
    ],
    quotes: ["Your love is the foundation of your family"],
  },
  {
    title: "Nurse",
    description: "Provides medical care and support to patients.",
    image: "https://example.com/nurse.jpg",
    goals: [
      "Deliver compassionate patient care",
      "Stay updated on medical advancements",
      "Collaborate with healthcare teams",
    ],
    quotes: ["Not all heroes wear capes some wear scrubs"],
  },
  {
    title: "Teacher",
    description: "Educates and inspires students.",
    image: "https://example.com/teacher.jpg",
    goals: [
      "Foster a love for learning",
      "Create engaging lesson plans",
      "Support students' academic growth",
    ],
    quotes: ["Teaching is the greatest act of optimism"],
  },
  {
    title: "Doctor",
    description: "Diagnoses and treats medical conditions.",
    image: "https://example.com/doctor.jpg",
    goals: [
      "Provide quality healthcare",
      "Stay updated on medical research",
      "Build strong doctor-patient relationships",
    ],
    quotes: ["Your knowledge can save lives"],
  },
];

// This funtion is used to show the cards on the page
function showCards(filteredCareers = careers) {
  const cardContainer = document.getElementById("card-container");
  const templateCard = document.querySelector(".card");

  cardContainer.innerHTML = ""; // Clear old cards

  filteredCareers.forEach((career) => {
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, career);
    nextCard.style.display = "block"; // Make visible
    cardContainer.appendChild(nextCard);
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
  card.querySelector(".card-quotes").textContent = career.quotes.join(" ");
}
// This function is used to filter the cards based on the search input
document.addEventListener("DOMContentLoaded", () => {
  showCards(); // Show all careers initially

  const searchInput = document.getElementById("search-input");  Se

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();

    const filtered = careers.filter((career) =>
      career.title.toLowerCase().includes(searchTerm)
    );

    showCards(filtered);
  });
});
