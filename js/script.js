let notes = document.querySelectorAll('#note')
notes.forEach(note => note.addEventListener('click', noteActive))

let liValue = ''
function noteActive(note) {
  let li = note.target
  let classContains = li.classList.contains('active')
  
  
  if (!classContains) {
    removeClass(notes)
    flagNote = true
    li.classList.add('active')
    liValue = li.value
  } else {
    flagNote = false
    li.classList.remove('active')
  }
}
function removeClass(notes) {
  notes.forEach(note => note.classList.remove('active'))
}




let divContainer = document.querySelector('.container')
let body = document.querySelector('#body')
let button = document.querySelector('#button')
button.addEventListener('click', sendNote)
let flagNote = false
function sendNote() {
  if (!flagNote) {
    window.alert('Defina uma nota')
  } else {
    divContainer.classList.add('containerHidden')

    body.innerHTML = 
      `<div class="containerThanks">
        <img src="images/illustration-thank-you.svg">
        <span>You selected ${liValue} out of 5</span>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support,
          don’t hesitate to get in touch!</p>
      </div>`
  }
}
