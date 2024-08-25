export { renderCharacter }

function renderCharacter( imageUrl, name, status, species, gender, location, origin) {
    const imgC = document.createElement('img')
    imgC.src = `${imageUrl}`

    const nameC = document.createElement('h2')
    nameC.textContent = `${name}`

    const divStatusSpecieGender = document.createElement('div')
    const statusC = document.createElement('span')
    const specieC = document.createElement('span')
    const genderC = document.createElement('span')
    const statusColor = document.createElement('div')
    statusC.textContent = `${status}`
    specieC.textContent = `${species}`
    genderC.textContent = `${gender}`
    divStatusSpecieGender.append(statusColor, statusC, specieC, genderC)

    const divLocation = document.createElement('div')
    const statusLocationC = document.createElement('span')
    const locationC = document.createElement('span')
    statusLocationC.textContent = 'Last known location:'
    locationC.textContent = `${location}`
    divLocation.append(statusLocationC, locationC)

    const divOrigin = document.createElement('div')
    const statusOrigin = document.createElement('span')
    const originC = document.createElement('span')
    statusOrigin.textContent = `First seen in:`
    originC.textContent = `${origin}`
    divOrigin.append(statusOrigin, originC)

    const div = document.createElement('div')
    div.append(nameC, divStatusSpecieGender, divLocation, divOrigin)
    div.classList.add('div__character__infos')

    const divMain = document.createElement('div')
    divMain.append(imgC, div)
    divMain.classList.add('div__character')

    const main = document.querySelector('.characters')
    main.append(divMain)

    imgC.classList.add('div__character__img')
    nameC.classList.add('character__name')

    divStatusSpecieGender.classList.add('div__status__specie__gender')
    statusC.classList.add('character__status')
    statusColor.classList.add('ball__status')
    genderC.classList.add('character__gender')
    specieC.classList.add('character__specie')

    divLocation.classList.add('div__location')
    statusLocationC.classList.add('character__location__status')
    locationC.classList.add('character__location')

    divOrigin.classList.add('div__origin')
    statusOrigin.classList.add('character__origin__status')
    originC.classList.add('character__origin')

    const allStatusContainers = document.querySelectorAll('.div__status__specie__gender');
    allStatusContainers.forEach((container) => {
        const statusElement = container.querySelector('.character__status');
        const ball = container.querySelector('.ball__status');
        
        if (statusElement && ball) {
            const statusText = statusElement.textContent.trim();

            if (statusText === 'Alive') {
                ball.style.backgroundColor = 'rgb(51, 255, 0)'; // Verde
            } else if (statusText === 'Dead') {
                ball.style.backgroundColor = 'rgb(255, 0, 0)'; // Vermelho
            } else if (statusText === 'unknown') {
                statusElement.textContent = 'Unknown';
                ball.style.backgroundColor = 'rgb(255, 145, 0)'; // Laranja
            }
        }
    });

    const allOrigin = document.querySelectorAll('.character__origin')
    allOrigin.forEach((origin) => {
        if(origin.textContent == 'unknown') {
            origin.textContent = 'Unknown'
        }
    })
    const allLocation = document.querySelectorAll('.character__location')
    allLocation.forEach((location) => {
        if(location.textContent == 'unknown') {
            location.textContent = 'Unknown'
        }
    })
}