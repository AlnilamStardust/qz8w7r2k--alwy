const denyButton = document.querySelector(".btn-deny");
const acceptButton = document.querySelector(".btn-accept");
const textElement = document.querySelector(".text-appear");

const textVariants = [
  "¿Segura, mi amorcito? 😳",
  "No seas mala... , x ,",
  "Piénsatelo bien... 🤔",
  "No me rompas el corazoncito- 💔",
  "Última oportunidad... 😢",
  "¿Es en serio-? x  x",
  "Está bien... tú ganas esta vez... Q  Q",
  "HMPH...",
  "Estoy enojado, hmph-",
  "Qué insistente, ya te dije que estoy enojado ` 3 `",
  "Bueno, está bien... pero no te acostumbres, hmph-",
  "Te amo, hmph-"
];

let textIndex = 0;
let acceptSize = 1;
let moveSpeed = 4;
let maxDistance = 120;
let textSize = 2;

function handleLoveNo() {
  textElement.textContent = textVariants[textIndex];
  textIndex = (textIndex + 1) % textVariants.length;

  acceptSize += 4.15;
  acceptButton.style.transform = `scale(${acceptSize})`;

  textSize += 0.2;
  textElement.style.fontSize = `${textSize}em`;
}
document.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const buttonRect = denyButton.getBoundingClientRect();
  const buttonCenterX = buttonRect.left + buttonRect.width / 2;
  const buttonCenterY = buttonRect.top + buttonRect.height / 2;

  const distanceX = mouseX - buttonCenterX;
  const distanceY = mouseY - buttonCenterY;
  const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

  if (distance < maxDistance) {
    const moveX = (distanceX / distance) * moveSpeed;
    const moveY = (distanceY / distance) * moveSpeed;

    let newX = denyButton.offsetLeft - moveX;
    let newY = denyButton.offsetTop - moveY;

    newX = Math.max(0, Math.min(window.innerWidth - buttonRect.width, newX));
    newY = Math.max(0, Math.min(window.innerHeight - buttonRect.height, newY));

    denyButton.style.position = "absolute";
    denyButton.style.left = `${newX}px`;
    denyButton.style.top = `${newY}px`;
  }
});

function handleLoveYes() {
  document.body.classList.add("bg-change");
  setTimeout(() => {
    window.location.href = "confirm.html";
  }, 1000);
}

denyButton.addEventListener("click", handleLoveNo);
