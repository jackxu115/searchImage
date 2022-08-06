const data = {
    access_key: 'Tos0NL02JwPPE1sWzetqCgyWjJLkuvzIut5bPRFXLkA',
    searchWord: null,
}

const fetchPhoto = () => {
    fetch(`https://api.unsplash.com/search/photos?client_id=${data.access_key}&page=1&query=${data.searchWord}`)
        .then(json => json.json())
        .then(img => {
            const imgURL = img.results[0].urls.regular
            backgroundImage(imgURL)
        })
}

const cbInput = event => {
    data.searchWord = event.target.value
}


const cbSearch = event => {
    fetchPhoto()
}

const backgroundImage = (imgURL) => {
    document.body.style.backgroundImage = `url(${imgURL})`
    document.body.style.backgroundSize = 'cover'

}


const createHeader = () => {
    const eleHeader = document.createElement('header')
    const eleHeading = document.createElement('h1')
    eleHeader.appendChild(eleHeading)
    eleHeading.textContent = "Search Image"
    return eleHeader
}

const createContent = () => {
    const eleContent = document.createElement('div')
    const eleInput = document.createElement('input')
    const eleButton = document.createElement('button')
    const eleIcon = document.createElement('i')
    eleContent.classList.add('content')
    eleIcon.classList.add('fa-solid', 'fa-magnifying-glass')
    eleButton.appendChild(eleIcon)
    eleInput.addEventListener('input', cbInput)
    eleButton.addEventListener('click', cbSearch)
    eleContent.appendChild(eleInput)
    eleContent.appendChild(eleButton)
    return eleContent
}


document.body.appendChild(createHeader())
document.body.appendChild(createContent())

