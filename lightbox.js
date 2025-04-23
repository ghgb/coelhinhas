document.addEventListener('DOMContentLoaded', () => {
    const imagens = document.querySelectorAll('.lightbox-trigger');
    
    imagens.forEach((img, index) => {
      img.addEventListener('click', () => {
        // Cria o elemento do lightbox
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
    
        // Cria a imagem grande no lightbox
        const imgGrande = document.createElement('img');
        imgGrande.src = img.src; // Usa a imagem que foi clicada
        imgGrande.classList.add('lightbox-image');
    
        // Botão de fechar
        const closeButton = document.createElement('span');
        closeButton.classList.add('lightbox-close');
        closeButton.innerHTML = '&times;';
    
        // Setinhas de navegação
        const prevButton = document.createElement('span');
        prevButton.classList.add('lightbox-prev');
        prevButton.innerHTML = '&lt;';
    
        const nextButton = document.createElement('span');
        nextButton.classList.add('lightbox-next');
        nextButton.innerHTML = '&gt;';
    
        // Adiciona os elementos ao lightbox
        lightbox.appendChild(closeButton);
        lightbox.appendChild(prevButton);
        lightbox.appendChild(nextButton);
        lightbox.appendChild(imgGrande);
    
        document.body.appendChild(lightbox);
    
        // Função para fechar o lightbox
        closeButton.addEventListener('click', () => {
          lightbox.remove();
        });
    
        // Função para navegar para a imagem anterior
        prevButton.addEventListener('click', () => {
          index = index === 0 ? imagens.length - 1 : index - 1;
          imgGrande.src = imagens[index].src;
        });
    
        // Função para navegar para a próxima imagem
        nextButton.addEventListener('click', () => {
          index = index === imagens.length - 1 ? 0 : index + 1;
          imgGrande.src = imagens[index].src;
        });
    
        // Fecha o lightbox ao clicar em qualquer parte do fundo
        lightbox.addEventListener('click', (e) => {
          if (e.target === lightbox) {
            lightbox.remove();
          }
        });
      });
    });
  });
  