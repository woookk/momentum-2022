const quotes = [
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote:
      "The people who are crazy enough to think the can change the world, are the ones who do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk",
  },
  {
    quote:
      "Constantly think about how you could be doing things better and question yourself.",
    author: "Elon Musk",
  },
  {
    quote: "Life is not fair; get used to it.",
    author: "Bill Gates",
  },
  {
    quote: "Do not put off. Act now!",
    author: "Bill Gates",
  },
  {
    quote:
      "If someone offers you an amazing opportunity and you're not sure you can do it, say" +
      '"Yes.",' +
      "then learn how to do it later.",
    author: "Richard Branson",
  },
  {
    quote: "Done is better than perfect.",
    author: "Mark Zuckerberg",
  },
  {
    quote:
      "If you born poor, it's not your mistake. But if you die poor, it's your mistake.",
    author: "Bill Gates",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
