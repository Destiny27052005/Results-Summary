const reaction = document.querySelector('.reaction')
const memory = document.querySelector('.memory')
const verbal = document.querySelector('.verbal')
const visual = document.querySelector('.visual')

const reactImg = document.getElementById('reactImg')
const memoryImg = document.getElementById('memoryImg')
const verbalImg = document.getElementById('verbalImg')
const visualImg = document.getElementById('visualImg')

const reactScore = document.getElementById('reactScore')
const memoryScore = document.getElementById('memoryScore')
const verbalScore = document.getElementById('verbalScore')
const visualScore = document.getElementById('visualScore')

fetch('/data.json')
    .then(response =>
        response.json()
    )
    .then(data => {
        console.log(data)
        reactImg.src = data[0].icon
        reactScore.innerText = data[0].score
        memoryImg.src = data[1].icon
        memoryScore.innerText = data[1].score
        verbalImg.src = data[2].icon
        verbalScore.innerText = data[2].score
        visualImg.src = data[3].icon
        visualScore.innerText = data[3].score
    }
    )
    .catch(error =>
        console.error("fetched failed")
    )

