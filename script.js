let apiQuotes = [];

// Show new quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
}

// Get quotes from API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  const response = await fetch(apiUrl);
  apiQuotes = await response.json();
  newQuote();
  try {
  } catch (error) {
    alert(error);
    // console.log(error)
  }
}

// On load
getQuotes();
