const modal = document.getElementById('property-modal');
const modalTitle = document.getElementById('modal-title');
const modalAddress = document.getElementById('modal-address');
const modalPrice = document.getElementById('modal-price');
const modalDesc = document.getElementById('modal-description');
const modalImages = document.getElementById('modal-images');
const closeBtn = document.querySelector('.modal-close');

document.querySelectorAll('.listing-card').forEach(card=>{
  card.addEventListener('click',()=>{
    modal.style.display='flex';
    modalTitle.textContent = card.dataset.title;
    modalAddress.textContent = card.dataset.address;
    modalPrice.textContent = card.dataset.price;
    modalDesc.textContent = card.dataset.description;
    modalImages.innerHTML='';
    card.dataset.images.split(',').forEach(src=>{
      const img = document.createElement('img');
      img.src = src.trim();
      modalImages.appendChild(img);
    });
  });
});

closeBtn.addEventListener('click',()=>{modal.style.display='none';});
window.addEventListener('click',e=>{if(e.target===modal)modal.style.display='none';});
