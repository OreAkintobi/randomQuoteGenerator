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
    },
    {
    name: "Nelson Mandela",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall."
    },
    {
        name: "Walt Disney",
        quote: "The way to get started is to quit talking and begin doing."
    },
    {
        name: "Steve Jobs",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
    },
    {
        name: "Eleanor Roosevelt",
        quote: "If life were predictable it would cease to be life, and be without flavor."
    },
    {
        name: "Oprah Winfrey",
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."
    },
    {
        name: "James Cameron",
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
    },
    {
        name: "John Lennon",
        quote: "Life is what happens when you're busy making other plans."
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
