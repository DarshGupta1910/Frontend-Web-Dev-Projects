const panels = document.querySelectorAll('.image')

panels.forEach(image => {
    image.addEventListener('click', () => {
        removeActiveClasses()
        image.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(image => {
        image.classList.remove('active')
    })
}