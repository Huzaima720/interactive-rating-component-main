let rating = 0
let numbers = document.querySelectorAll('.rating span');

function removePreviousRating(currentRating){
    numbers.forEach(number => {
        let newRating = parseInt(number.innerText)
        if(newRating != currentRating){
            number.classList.remove('active')
        }
     });
    
}
numbers.forEach(number => {
    number.addEventListener('click', () => {
        let crntRating = parseInt(number.innerText)
        number.classList.add('active')
        removePreviousRating(crntRating)
        rating = crntRating
    })
 });


let submitBtn = document.querySelector('.submit')
let ratingSection = document.querySelector('.rating-section')
let thanksSection = document.querySelector('.thanks-section')
let rated =thanksSection.querySelector('.rated')


submitBtn.addEventListener('click', () => {
    if(rating === 0){
        alert('Please select a rating')
        return
    }
    ratingSection.style.display = 'none'
    thanksSection.style.display = 'flex'
    rated.innerText = `You rated ${rating} out of 5`

    
 })

