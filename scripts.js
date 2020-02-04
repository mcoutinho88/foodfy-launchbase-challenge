const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes){
    recipe.addEventListener('click', function() {
        const imgId = recipe.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `./layout/assets/${imgId}.png`
        const p = recipe.querySelectorAll('p')
        modalOverlay.querySelectorAll('p')[0].textContent = p[0].textContent
        modalOverlay.querySelectorAll('p')[1].textContent = p[1].textContent
    }
    )
}


document.querySelector('.close-modal').addEventListener("click", () =>
modalOverlay.classList.remove('active')

)