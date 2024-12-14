const card =  document.querySelector('.card'),
text = document.querySelector('input');
btn = document.querySelector('button');

text.addEventListener('input', () =>[
   card.style.backgroundColor = text.value,
   card.style.width = text.value,
   card.style.height = text.value,
   card.style.borderRadius = text.value,
   card.textContent = text.value,

])


btn.addEventListener('click', () => {
   window.location.reload();
});


