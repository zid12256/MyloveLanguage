// Création de petits cœurs qui flottent au clic
document.addEventListener('click', (e) => {
  const heart = document.createElement('div');
  heart.innerHTML = '💙';
  heart.style.position = 'fixed';
  heart.style.left = e.clientX + 'px';
  heart.style.top = e.clientY + 'px';
  heart.style.fontSize = '20px';
  heart.style.pointerEvents = 'none';
  heart.style.animation = 'moveUp 2s linear forwards';
  heart.style.zIndex = '1000';
  
  document.body.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 2000);
});

// Ajoute ce style CSS dynamiquement pour l'animation des cœurs
const style = document.createElement('style');
style.innerHTML = `
@keyframes moveUp {
  0% { transform: translateY(0) opacity(1); }
  100% { transform: translateY(-100px) opacity(0); }
}`;
document.head.appendChild(style);