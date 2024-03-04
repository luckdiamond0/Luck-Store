function goToPage(page) {
  window.location.href = page;
}
// Configuração do canvas
const canvas = document.getElementById('snowfall');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Configuração dos flocos de neve
const snowflakes = [];
const numSnowflakes = 100;

for (let i = 0; i < numSnowflakes; i++) {
  snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 3 + 1,
      opacity: Math.random()
  });
}

// Função para animar os flocos de neve
function animateSnowfall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < numSnowflakes; i++) {
      const snowflake = snowflakes[i];

      ctx.beginPath();
      ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`;
      ctx.fill();

      snowflake.y += snowflake.speed;

      // Recicla flocos que atingem o fundo da tela
      if (snowflake.y > canvas.height) {
          snowflake.y = 0;
      }
  }

  requestAnimationFrame(animateSnowfall);
}

// Inicia a animação
animateSnowfall();

// Redimensiona o canvas quando a janela é redimensionada
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

  document.addEventListener("DOMContentLoaded", function () {
  var images = ["Cshack.webp", "aimware.png", "nix.webp", "undefined.webp", "vacban.wtf.webp"];
  var currentImageIndex = 0;
  var sliderImage = document.getElementById("imagemAtual");

  function changeImage() {
    sliderImage.style.opacity = 0;
    setTimeout(function () {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      sliderImage.src = images[currentImageIndex];
      sliderImage.style.opacity = 1;
    }, 500);
  }

  setInterval(changeImage, 3000);
});

function toggleMenu() {
  const menuUsuario = document.querySelector('.menu-usuario');
  menuUsuario.style.display = menuUsuario.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('click', function (event) {
  const menuUsuario = document.querySelector('.menu-usuario');
  const botaoUsuario = document.querySelector('.botao-usuario');

  if (!botaoUsuario.contains(event.target) && !menuUsuario.contains(event.target)) {
    menuUsuario.style.display = 'none';
  }
});

// Iniciar a troca automática quando a página carregar
window.onload = iniciarTrocaAutomatica;