const coin = {
    state : 0,

    flip: function() {
        this.state = Math.round(Math. random())
    },

    toString: function() {
        if (this.state === 0){
            return "Heads"
        }
        if (this.state === 1){
            return "Tails"
        }
    },

    toHTML: function() {
        const image = document.createElement("img")
        if (this.state === 0){
            image.src = "./images/Heads.jpg"
            image.alt = "Heads"
        }
        if (this.state === 1){
            image.src = "./images/Tails.jpg"
            image.alt = "Tails"
        }

        return image
    }
}

function display20Flips() {
    const results = []
    const paragraph = document.createElement("p")

    for(let i=0; i<20; i++){
        coin.flip()
        results.push(coin.toString())
        paragraph.innerText = results[i]
        let paragraphClone = paragraph.cloneNode(true)
        document.body.appendChild(paragraphClone)
    }

    return results
}

function display20Images() {
    const results = []

    for(let j=0; j<20; j++){
        coin.flip()
        results.push(coin.toHTML())
        let image = coin.toHTML()
        let imageClone = image.cloneNode()
        document.body.appendChild(imageClone)
    }

    return results
}

display20Flips()
display20Images()