const texts = [
    "ฉัน", "ชอบ", "???", "เลื่อนอีก", "ไม่ต้องละ",
    "ไม่ต้องไง", "หยุด", "หยุดดิ", "เออ", "แชทมาหา ในไลน์เดี๋ยวบอก"
  ];
  
  let currentIndex = 0;
  
  const textDisplay = document.getElementById("text-display");
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");
  
  function updateDisplay() {
    textDisplay.textContent = texts[currentIndex];
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === texts.length - 1;
  }
  
  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateDisplay();
    }
  });
  
  nextButton.addEventListener("click", () => {
    if (currentIndex < texts.length - 1) {
      currentIndex++;
      updateDisplay();
    }
  });
  
  // Initialize display
  updateDisplay();
  