const button = document.getElementById("btn")



button.addEventListener("click",() => {
    button.textContent = 'down'
    button.style.backgroundColor = "pink"
    perfomMovement(button)
   
}) 


function perfomMovement(element) {
    let position = 0
    let tick = setInterval(frame,5) 
    
    function frame() {
        if(position < document.body.clientHeight-button.clientHeight) {
            position++;
            button.style.top = position + 'px'
            if(position % 50 == 0)
                button.style.backgroundColor = '#' + Math.random().toString(16).substr(2,6)

        }
        else {
            clearInterval(tick)
        } 
    }
}
