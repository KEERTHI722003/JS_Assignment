// Function to fetch a random quote and update the HTML
async function fetchRandomQuote() {
  try {
    // Fetch a random quote from the Quotes Free API
    const response = await fetch('https://type.fit/api/quotes');
    
    if (!response.ok) {
      throw new Error('Failed to fetch a random quote');
    }
    
    // Parse the JSON response
    const data = await response.json();
    
    // Get a random quote from the array
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];
    
    // Update the HTML with the random quote
    const quoteContainer = document.querySelector('.quote');
    quoteContainer.innerHTML = `<p>${randomQuote.text}</p><p>— ${randomQuote.author || 'Unknown'}</p>`;
  } catch (error) {
    console.error('Error:', error);
    const quoteContainer = document.querySelector('.quote');
    quoteContainer.innerHTML = '<p>Failed to fetch a random quote.</p>';
  }
}

// Call the fetchRandomQuote function when the page loads
window.addEventListener('load', fetchRandomQuote);

// Add event listener for the "New Quote" button
const newQuoteBtn = document.getElementById('new-quote-btn');
newQuoteBtn.addEventListener('click', fetchRandomQuote);
