const mcq = [
  {
    text: "1. Which of the following countries is the world's largest producer of saffron?",
    options: ["India", "Iran", "Spain", "Greece"],
    ans: "Iran"
  },
  {
    text: "2. Which god is also known as ‘Gauri Nandan’?",
    options: ["Lord Shiva", "Lord Ganesha", "Lord Vishnu", "Lord Krishna"],
    ans: "Lord Ganesha"
  },
  {
    text: "3. What does not grow on a tree according to a popular Hindi saying?",
    options: ["Mango", "Apple", "Banana", "Money"],
    ans: "Money"
  },
  {
    text: "4. Which city is known as the Pink City of India?",
    options: ["Udaipur", "Jodhpur", "Jaipur", "Bikaner"],
    ans: "Jaipur"
  },
  {
    text: "5. Who wrote India's National Anthem?",
    options: ["Bankim Chandra", "Rabindranath Tagore", "Sarojini Naidu", "Subhash Bose"],
    ans: "Rabindranath Tagore",
  },
  {
    text: "6. How many major religions are there in India?",
    options: ["4", "5", "6", "7"],
    ans: "6"
  },
  {
    text: "7. When is National Hindi Diwas celebrated?",
    options: ["August 15", "October 2", "January 26", "September 14"],
    ans: "September 14"
  },
  {
    text: "8. Which country is the largest producer of coffee in the world?",
    options: ["Colombia", "Vietnam", "Brazil", "India"],
    ans: "Brazil"
  },
  {
    text: "9. Where is India Gate located?",
    options: ["Mumbai", "Chennai", "New Delhi", "Kolkata"],
    ans: "New Delhi"
  },
  {
    text: "10. Who wrote Vande Mataram?",
    options: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Lala Lajpat Rai", "Sarojini Naidu"],
    ans: "Bankim Chandra Chattopadhyay"
  }
];
let index = 0;
let timerInterval;
let timeLeft = 60; // ⏱️ 60 seconds for each question

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 60;
  const timer = document.getElementById("timer");
  timer.textContent = ` Time Left: ${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timer.textContent = ` Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      document.getElementById("anstext").textContent = "⏱ Time's up!";
      document.getElementById("anstext").style.color = "orange";

      setTimeout(() => {
        index = (index + 1) % mcq.length;
        showQuestion(index);
      }, 1000);
    }
  }, 1000);
}

function showQuestion(i) {
  const q = mcq[i];
  document.getElementById('quetext').textContent = q.text;
  const optionsContainer = document.getElementById('options');
  const ansText = document.getElementById('anstext');

  optionsContainer.innerHTML = '';
  ansText.textContent = '';

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;

    btn.onclick = () => {
      clearInterval(timerInterval); // Stop timer on answer
      if (opt === q.ans) {
        ansText.textContent = "✅ Correct!";
        ansText.style.color = "green";
      } else {
        ansText.textContent = `❌ Wrong! .....Right Answer: ${q.ans}`;
        ansText.style.color = "rgb(207, 56, 56)";
      }

      setTimeout(() => {
        index = (index + 1) % mcq.length;
        showQuestion(index);
      }, 2000); // Wait 2 seconds before moving to next
    };

    optionsContainer.appendChild(btn);
  });

  startTimer();
}

showQuestion(index);
