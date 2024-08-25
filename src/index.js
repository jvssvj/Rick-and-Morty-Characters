import { numberPage, status, gender, searchCharacter, previousPage, nextPage, cleanFilters} from "./nav.js";
import { characters } from "./character.js";


function openCloseFilter() {
    let openModal = document.querySelector('#filter-btn')
    let closeModal = document.querySelector('#close-modal')
    let modal = document.querySelector('#filter-modal')
    openModal.addEventListener('click', () => {
        modal.classList.toggle('open')
    })
    
    closeModal.addEventListener('click', () => {
        modal.classList.remove('open')
    })
}

status()
gender()
searchCharacter()
previousPage()
nextPage()
characters(numberPage)
openCloseFilter()
cleanFilters()