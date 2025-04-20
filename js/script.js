// Criar ovos flutuantes
const eggBg = document.querySelector('.egg-background');

for (let i = 0; i < 20; i++) {
  const egg = document.createElement('div');
  egg.classList.add('egg');
  egg.style.left = Math.random() * 100 + 'vw';
  egg.style.animationDuration = (5 + Math.random() * 10) + 's';
  egg.style.background = `radial-gradient(circle at center, 
    hsl(${Math.random()*360}, 100%, 90%), 
    hsl(${Math.random()*360}, 100%, 70%))`;
  eggBg.appendChild(egg);
}

// Mostrar coelhinho quando se clica no botão
document.getElementById('surpriseBtn').addEventListener('click', () => {
  const bunny = document.getElementById('bunny');
  bunny.style.display = 'block';
});
