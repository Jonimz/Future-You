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

// const FRESH_PRINCE_URL =
//   "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
// const CURB_POSTER_URL =
//   "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
// const EAST_LOS_HIGH_POSTER_URL =
//   "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (career titles)
let careers =[
  {
    title: "Author",
    description: "Writes books and articles.",
    image: "https://example.com/author.jpg",
    goals: [
      "Write a bestselling novel",
      "Publish articles in top magazines",
      "Attend book signings and events",
    ],
    quotes: ["your story is your power"],
  },
  {
      title: "Software Engineer",
      description: "Develops software applications.",
      image: "https://example.com/software_engineer.jpg",
      goals: [
        "Build a successful app",
        "Contribute to open-source projects",
        "Work on innovative technology",
      ],
      quotes: ["code like you could be the next Steve Jobs"],
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
    title: "stay-at-home parent",
    description: "Manages household and family responsibilities.",
    image: "https://example.com/stay_at_home_parent.jpg",
    goals: [
      "Provide a nurturing environment for children",
      "Balance household tasks and family time",
      "Support children's education and development",
    ],
    quotes: ["To be a stay-at-home parent is to be a superhero in disguise"],
  },
];

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  careers.forEach((careers) => { //this is a for loop that iterates through the careers array 

    const nextcard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextcard, careers); 
    cardContainer.appendChild(nextcard); // Add new card to the container
  });
}

function editCardContent(card, career) { //this function edits the content of the card
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = careers.title;

  const cardImage = card.querySelector("img"); //this is a query selector that selects the img element
  cardImage.src = careers.image;
  cardImage.alt = newTitle + " Image";

  const u1= card.querySelector("u1"); //this is a query selector that selects the ul element
  u1.innerHTML = ""; // Clear existing list items

  careers.goals.forEach((goal) => { //this is a forEach loop that iterates through the goals array
    const li = document.createElement("li"); //this creates a new list item
    li.textContent = goal; 
    u1.appendChild(li); // adds the new list item to the ul
  });

}
function quoteAlert() {
  const randomCareer = careers[Math.floor(Math.random() * careers.length)]; //this selects a random career from the careers array
  const randomQuote =  randomCareer.quotes[Math.floor(Math.random() * quote.length)]; //this selects a random quote from the quotes array
  
  alert
  "${randomQuote}//nCareer: ${randomCareer.title}\\nDescription: ${randomCareer.description}";
  // Display the quote and career information in an alert

  console.log("envision your future");
  alert(
    "Random Quote: " +
      randomQuote +
      "\nCareer: " +
      randomCareer.title +
      "\nDescription: " +
      randomCareer.description
  );

  function removeLastCard() {
    careers.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refres};
  }
document.addEventListener["DOMContentLoaded", showCards]
}
