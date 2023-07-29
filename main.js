'use strict'
const scriptURL = 'https://script.google.com/macros/s/AKfycbxVhxDCVnmz_1YIA0N9DEIgdQG04Vr3UEehAIWhfOQqGwyZBFsOukPlVIIX2co0GSq7/exec'
const form = document.forms['submit-to-google-sheet']
const body = document.querySelector('body')
const skills = document.querySelector('.skill')
const experience = document.querySelector('.experience')
const education = document.querySelector('.education')
const skillz = document.querySelector('.skills')
const experiences = document.querySelector('.experiences')
const educations = document.querySelector('.educations')
const active = document.querySelector('.active')
const actives = document.querySelector('.actives')
const close = document.querySelector('.fas')
const open = document.querySelector('.fass')
const list = document.querySelector('.list')
const overlay = document.querySelector('.overlay')
const msg = document.getElementById('msg')

skills.addEventListener('click', function(){
    skills.classList.add('active')
    skillz.classList.add('actives')
    experience.classList.remove('active')
    education.classList.remove('active')
    experiences.classList.remove('actives')
    educations.classList.remove('actives')
})
experience.addEventListener('click', function(){
    experience.classList.add('active')
    experiences.classList.add('actives')
    skills.classList.remove('active')
    skillz.classList.remove('actives')
    education.classList.remove('active')
    educations.classList.remove('actives')
})
education.addEventListener('click', function(){
    experience.classList.remove('active')
    experiences.classList.remove('actives')
    skills.classList.remove('active')
    skillz.classList.remove('actives')
    education.classList.add('active')
    educations.classList.add('actives')
})

open.addEventListener('click', function(){
    list.classList.remove('hide')
    overlay.classList.remove('hide')
})

close.addEventListener('click', function(){
    hidenav()
})
overlay.addEventListener('click', function(){
    hidenav()
})



function hidenav() {
    list.classList.add('hide')
    overlay.classList.add('hide')
}


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.textContent = 'Your Message Has been Delivered Successfully'
        setTimeout(function(){
            msg.textContent = ''
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
// skills.forEach(btn => btn.addEventListener('click', function(){
//     skills.classList.add('active')
//     experience.classList.remove('active')
//     education.classList.remove('active')
// }));
// experience.forEach(click => click.addEventListener('click', function(){
//     skills.classList.add('active')
//     experience.classList.remove('active')
//     education.classList.remove('active')
// }));