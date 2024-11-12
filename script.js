



const needle = document.getElementById('needle');
const speedValue = document.getElementById('speedValue');

async function getInternetSpeed() {

  const simulatedSpeed = Math.random() * 120; 
  return simulatedSpeed.toFixed(2);
}

function updateSpeed(speed) {

  const angle = (speed - 10) * (270 / 110);
  needle.style.transform = `rotate(${angle}deg)`;
  speedValue.textContent = `Current Speed: ${speed} Mbps`;
}

async function checkSpeed() {
  setInterval(async () => {
    const speed = await getInternetSpeed();
    updateSpeed(speed);
  }, 1000); 
}

document.getElementById('startTest').addEventListener('click', checkSpeed);
