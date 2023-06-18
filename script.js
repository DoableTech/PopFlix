const form = document.getElementById('form');
const embedList = document.getElementById('embedList');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const title = document.getElementById('title').value;
  const embed = document.getElementById('embed').value;
  
  const embedItem = document.createElement('div');
  embedItem.classList.add('embedItem');
  embedItem.innerHTML = `
    <h3>${title}</h3>
    <p>${embed}</p>
  `;
  
  embedList.appendChild(embedItem);
  
  // Limpa os campos do formulário
  document.getElementById('title').value = '';
  document.getElementById('embed').value = '';
});
