// countdown
const countdownDate = new Date("2026-07-26T18:00:00");
const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const countdownSection = document.querySelector(".countdown")?.closest(".bg-dark");

const updateCountdown = () => {
  if (!countdownSection) return;

  const now = new Date();
  const timeLeft = countdownDate - now;

  if (timeLeft <= 0) {
    countdownSection.innerHTML = `
      <div class="container py-5 text-center">
        <h2 class="display-5 fw-bold">Coming Soon</h2>
        <p class="fs-5 mb-0">Grand Celebration akan segera hadir.</p>
      </div>
    `;
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  daysElement.textContent = days.toString().padStart(2, "0");
  hoursElement.textContent = hours.toString().padStart(2, "0");
  minutesElement.textContent = minutes.toString().padStart(2, "0");
  secondsElement.textContent = seconds.toString().padStart(2, "0");
};

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
