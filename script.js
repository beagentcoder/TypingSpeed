document.addEventListener('DOMContentLoaded', function () {
  const startBtn = document.getElementById('start-btn');
  const input = document.getElementById('input');
  const timer = document.getElementById('timer');
  const sentence = document.getElementById('sentence');
  const result = document.getElementById('result');
  const speedDisplay = document.getElementById('speed');
  const accuracyDisplay = document.getElementById('accuracy');
  const retryBtn = document.getElementById('retry-btn');

  const paragraph = 
    `The quick brown fox jumps over the lazy dog.
    Sphinx of black quartz, judge my vow.
    Pack my box with five dozen liquor jugs.
    How vexingly quick daft zebras jump!`;

  let timeLeft = 30;
  let timerInterval;
  let startTime;

  startBtn.addEventListener('click', startTest);
  retryBtn.addEventListener('click', resetTest);

  function startTest() {
      input.disabled = false;
      input.value = '';
      input.focus();
      sentence.textContent = paragraph;
      startBtn.disabled = true;
      timeLeft = 30;
      timer.textContent = `Time: ${timeLeft}s`;
      result.style.display = 'none';
      startTime = Date.now();

      timerInterval = setInterval(function () {
          timeLeft--;
          timer.textContent = `Time: ${timeLeft}s`;

          if (timeLeft <= 0) {
              clearInterval(timerInterval);
              endTest();
          }
      }, 1000);
  }

  function endTest() {
      input.disabled = true;
      startBtn.disabled = true;
      result.style.display = 'block';

      const typedText = input.value.trim();
      const typedWords = typedText.split(' ');
      const originalWords = paragraph.split(' ');
      const correctWords = typedWords.filter((word, index) => word === originalWords[index]).length;
      const correctChars = typedText.split('').filter((char, index) => char === paragraph[index]).length;
      
      const timeTaken = (30 - timeLeft) / 60;  // in minutes

      // Calculate speed (words per minute)
      const speed = correctWords / timeTaken;

      // Calculate accuracy percentage
      const accuracy = (correctChars / paragraph.length) * 100;

      speedDisplay.textContent = `${Math.round(speed)}`;
      accuracyDisplay.textContent = `${Math.round(accuracy)}`;
  }

  function resetTest() {
      startBtn.disabled = false;
      result.style.display = 'none';
      input.value = '';
      input.disabled = true;
      sentence.textContent = '';
      timer.textContent = 'Time: 30s';
  }
});




// const sentences = 
//   `The quick brown fox jumps over the lazy dog . Sphinx of black quartz, judge my vow . Pack my box with five dozen liquor jugs . How vexingly quick daft zebras jump !`
// ;

// let currentSentenceIndex = 0;
// let startTime, endTime;
// let timerInterval;

// const sentenceElement = document.getElementById("sentence");
// const inputElement = document.getElementById("input");
// const startButton = document.getElementById("start-btn");
// const timerElement = document.getElementById("timer");
// const speedElement = document.getElementById("speed");
// const accuracyElement = document.getElementById("accuracy");
// const resultElement = document.getElementById("result");
// const retryButton = document.getElementById("retry-btn");


// function startTest() {
//   sentenceElement.innerHTML = sentences;
//   inputElement.value = "";
//   inputElement.disabled = false;
//   inputElement.focus();
//   startButton.disabled = true;
//   startTime = new Date();
//   timerInterval = setInterval(updateTimer, 1000);
//   setTimeout(endTest, 30000); // End the test after 30 seconds
// }




// function updateTimer() {
//   const currentTime = new Date();
//   const elapsedTime = Math.floor((currentTime - startTime) / 1000);
//   const remainingTime = 30 - elapsedTime;
//   const minutes = Math.floor(remainingTime / 60);
//   const seconds = remainingTime % 60;
//   timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
// }




// function endTest() {
//   clearInterval(timerInterval);
//   endTime = new Date();
//   const elapsedTime = Math.floor((endTime - startTime) / 1000);
//   const typedSentence = inputElement.value.trim();
//   const correctSentence = sentenceElement.textContent.trim();
  
//   let speed = 0;
//   let typedWords = [];
//   if(typedSentence != ""){
//     typedWords = typedSentence.split(" ");
//   }
  
//   const correctWords = correctSentence.split(" ");
//   console.log(correctWords);
//   let correctCount = 0;
//   let ind =0;
//   typedWords.forEach((word, index) => {
//     if (word === correctWords[index]) {
//       correctCount++;
//       ind =index;
//     }
//   });
//   if(typedSentence != ""){
//     speed = Math.floor(((correctCount) / 30) * 60);
//   }
//   const accuracy = (correctCount / correctWords.length  ) * 100;
//   speedElement.textContent = speed;
//   accuracyElement.textContent = accuracy.toFixed(2);
//   resultElement.style.display = "block";
//   retryButton.focus();
// }




// startButton.addEventListener("click", startTest);



// retryButton.addEventListener("click", () => {
//   resultElement.style.display = "none";
//   startButton.disabled = false;
//   inputElement.value = "";
// });
