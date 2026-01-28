// Telegram popup (auto)
setTimeout(() => {
  document.getElementById("telegram-popup").style.display = "flex";
}, 4000);

// Close popup
document.getElementById("close-popup").onclick = () => {
  document.getElementById("telegram-popup").style.display = "none";
};

console.log("Jaidev Edit website loaded successfully");
