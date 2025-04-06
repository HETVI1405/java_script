
const quotes = [
  { text: "Arise, awake, and stop not until the goal is reached.", author: "Swami Vivekananda" },
  { text: "You may never know what results come of your actions, but if you do nothing, there will be no result.", author: "Mahatma Gandhi" },
  { text: "It is very easy to defeat someone, but it is very hard to win someone.", author: "A. P. J. Abdul Kalam" },
  { text: "Excellence happens not by accident. It is a process.", author: "A. P. J. Abdul Kalam" },
  { text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.", author: "A. P. J. Abdul Kalam" }
];
const bgColors = [
  "#1e3a8a", 
  "#047857", 
  "#7c3aed", 
  "#b91c1c", 
  "#f59e0b" ,
];



  let index = 0;

  function showQuote(i) {
    $('#quoteText').text(`"${quotes[i].text}"`);
    $('#quoteAuthor').text(`${quotes[i].author}`);
    $('body').css('background-color', bgColors[i]);
  }

  showQuote(index);

  setInterval(() => {
    index = (index + 1) % quotes.length;
    showQuote(index);
  }, 4000);

