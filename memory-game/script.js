document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        { name: 'apple', img: 'images/apple.png' },
        { name: 'apple', img: 'images/apple.png' },
        { name: 'banana', img: 'images/banana.png' },
        { name: 'banana', img: 'images/banana.png' },
        { name: 'cherry', img: 'images/cherry.png' },
        { name: 'cherry', img: 'images/cherry.png' },
        { name: 'grape', img: 'images/grape.png' },
        { name: 'grape', img: 'images/grape.png' },
        { name: 'orange', img: 'images/orange.png' },
        { name: 'orange', img: 'images/orange.png' },
        { name: 'pear', img: 'images/pear.png' },
        { name: 'pear', img: 'images/pear.png' },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            const cardImage = document.createElement('img')
            cardImage.setAttribute('src', cardArray[i].img)
            card.appendChild(cardImage)
            grid.appendChild(card)
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.classList.add('flipped')
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('.card')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].classList.remove('flipped')
            cards[optionTwoId].classList.remove('flipped')
        }

        cardsChosen = []
        cardsChosenId = []

        if (cardsWon.length === cardArray.length / 2) {
            alert('Congratulations! You found them all!')
        }
    }

    createBoard()
})
