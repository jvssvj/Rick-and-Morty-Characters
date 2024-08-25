import { renderCharacter } from "./renderCharacter.js";
export { characters }

async function characters(page, character = '', status = '', gender = '') {
    let url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${character}&status=${status}&gender=${gender}`

    try {
        const resp = await fetch(url)

        if(!resp.ok) {
            document.querySelector('#search').classList.add('error')
            document.querySelector('#error').style.display= 'block'
            throw new Error('No characters found')
        } else {
            document.querySelector('#search').classList.remove('error')
            document.querySelector('#error').style.display= 'none'
        }

        const data = await resp.json()
        const arr = data.results
        const selectQuantity = arr.slice(0, 6)
        
        document.querySelector('.characters').innerHTML = ''

        selectQuantity.forEach((element) => {
            const img = element.image;
            const name = element.name;
            const gender = element.gender;
            const specie = element.species;
            const status = element.status;
            const location = element.location.name;
            const origin = element.origin.name;

            renderCharacter(img, name, status, specie, gender, location, origin)
        })

        if(data.info.prev == null) {
            document.querySelector('#previous').style.display = 'none'
            document.querySelector('.ram__nav__btns').style.justifyContent = 'end';
        } else {
            document.querySelector('#previous').style.display = 'block'
            document.querySelector('.ram__nav__btns').style.justifyContent = 'start';
        }

        if(data.info.next == null) {
            document.querySelector('#next').style.display = 'none'
        } else {
            document.querySelector('#next').style.display = 'block'
        }

        if(data.info.prev == null & data.info.next == null) {
            document.querySelector('#page-number').style.display = 'none'
        } else {
            document.querySelector('#page-number').style.display = 'block'
        }
    }  catch (error) {
        console.error('Erro ao buscar os dados:', error)
    }
    
}