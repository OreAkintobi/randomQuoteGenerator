const quotes = [{
        name: "Ronald Knox",
        quote: "A good sermon should be like a woman's skirt: short enough to rouse the interest, but long enough to cover the essentials."
    },
    {
        name: "Unknown",
        quote: "When on the ladder of success, don't let boys look up your dress!"
    },
    {
        name: "Louis Hector Berlioz",
        quote: "Time is a great teacher, but unfortunately it kills all its pupils."
    }
];

const quoteButton = document.querySelector("#quoteButton");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteButton.addEventListener('click', displayQuote);

function displayQuote() {
    let number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}