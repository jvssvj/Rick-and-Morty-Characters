let statusValue = ''
let genderValue = ''
let searchValue = ''
let numberPage = 1
let pageNumber = document.querySelector('#page-number')
export { numberPage }
import { characters } from "./character.js";
pageNumber.textContent = `${numberPage}`

export function status() {
    document.querySelectorAll('input[name="status"]').forEach((radio) => {
        radio.addEventListener('change', async () => {
            pageNumber.textContent = `1`
            numberPage = 1
            statusValue = radio.value
            characters(numberPage, searchValue, statusValue, genderValue)
        })
    })
}

export function gender() {
    document.querySelectorAll('input[name="gender"]').forEach((radio) => {
        radio.addEventListener('change', async () => {
            pageNumber.textContent = `1`
            numberPage = 1
            genderValue = radio.value
            await characters(numberPage, searchValue, statusValue, genderValue)
        })
    })
}

export function searchCharacter() {
    document.querySelector('#search').addEventListener('input', async () => {
        pageNumber.textContent = `1`
        numberPage = 1
        searchValue = document.querySelector('#search').value
        await characters(numberPage, searchValue, statusValue, genderValue)
    })
}

export function previousPage() {
    document.querySelector('#previous').addEventListener('click', async () => {
        if (numberPage > 1) {
            numberPage -= 1
            window.scrollTo({ top: 0, behavior: 'smooth' })
            document.querySelector('#page-number').textContent = `${numberPage}`
            characters(numberPage, searchValue, statusValue, genderValue)
        }
    })
}

export function nextPage() {
    document.querySelector('#next').addEventListener('click', async () => {
        numberPage += 1
        window.scrollTo({ top: 0, behavior: 'smooth' })
        document.querySelector('#page-number').textContent = `${numberPage}`
        characters(numberPage, searchValue, statusValue, genderValue)
    })
}


export function cleanFilters() {
    let cleanBtn = document.querySelector('#clear-filter')
    let allRadiosInputs = document.querySelectorAll('input[type="radio"]')

    cleanBtn.addEventListener('click', () => {
        allRadiosInputs.forEach((radio) => {
            radio.checked = false
        })
        statusValue = ''
        genderValue = ''
        characters(numberPage, searchValue, statusValue, genderValue)
    })
}