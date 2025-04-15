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
    image: "https://a.co/d/fEZv9pY",
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
}

];

function showCards() {
  const cardContainer = document.getElementById("card-container");
  const templateCard = document.querySelector(".card");

  cardContainer.innerHTML = ""; // Clear old cards

  careers.forEach((career) => {
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, career);
    nextCard.style.display = "block"; // Make visible
    cardContainer.appendChild(nextCard);
  });
}

function editCardContent(card, career) {
  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = career.title;

  const cardImage = card.querySelector("img");
  cardImage.src = career.image;
  cardImage.alt = career.title + " Image";

  const ul = card.querySelector("ul");
  ul.innerHTML = "";

  career.goals.forEach((goal) => {
    const li = document.createElement("li");
    li.textContent = goal;
    ul.appendChild(li);
  });
}

function quoteAlert() {
  const randomCareer = careers[Math.floor(Math.random() * careers.length)];
  const randomQuote = randomCareer.quotes[Math.floor(Math.random() * randomCareer.quotes.length)];

  alert(
    "Quote: " + randomQuote +
    "\nCareer: " + randomCareer.title +
    "\nDescription: " + randomCareer.description
  );
}

function removeLastCard() {
  careers.pop();
  showCards();
}
function addNewCard() {
  const newCareer = {
    title: "New Career",
    description: "Description of the new career.",
    image: "https://example.com/new_career.jpg",
    goals: ["Goal 1", "Goal 2", "Goal 3"],
    quotes: ["Quote 1", "Quote 2"],
  };
  careers.push(newCareer);
  showCards();
}

document.addEventListener("DOMContentLoaded", showCards);
