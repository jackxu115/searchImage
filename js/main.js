// data object
const data = {
    access_key: 'Tos0NL02JwPPE1sWzetqCgyWjJLkuvzIut5bPRFXLkA',
    searchWord: null,
}

// get photo
const cbFetch = () => {
    fetch(`https://api.unsplash.com/search/photos?client_id=${data.access_key}&page=1&query=${data.searchWord}`)
        .then(json => json.json())
        .then(img => {
            // console.log(img)
            const imgURL = img.results[0].urls.regular
            backgroundImage(imgURL)
        }).catch(error => console.log('this is error', error))
}

// update the search word
const cbInput = event => {
    data.searchWord = event.target.value
}

// change background image
const backgroundImage = (imgURL) => {
    document.body.style.backgroundImage = `url(${imgURL})`
    document.body.style.backgroundSize = 'cover'

}

// create header DOM
const createHeader = () => {
    const eleHeader = document.createElement('header')
    const eleHeading = document.createElement('h1')
    eleHeader.appendChild(eleHeading)
    eleHeading.textContent = "Search Image"
    return eleHeader
}

// create content DOM
const createContent = () => {
    const eleContent = document.createElement('div')
    const eleInput = document.createElement('input')
    const eleButton = document.createElement('button')
    const eleIcon = document.createElement('i')

    eleContent.classList.add('content')
    eleIcon.classList.add('fa-solid', 'fa-magnifying-glass')

    eleInput.addEventListener('input', cbInput)
    eleButton.addEventListener('click', cbFetch)

    eleButton.appendChild(eleIcon)
    eleContent.appendChild(eleInput)
    eleContent.appendChild(eleButton)
    return eleContent
}

// append DOM
const appendDOM = () => {
    document.body.appendChild(createHeader())
    document.body.appendChild(createContent())
}

appendDOM()


