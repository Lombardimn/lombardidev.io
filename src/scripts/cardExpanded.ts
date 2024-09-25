document.querySelectorAll('.card-button').forEach(button => {
  button.addEventListener('click', (event) => {
    const btn = event.currentTarget as HTMLElement // El botón clicado
    const card = btn.closest('.card') as HTMLElement // El contenedor padre más cercano
    const content = card.querySelector('.card-content') as HTMLElement // El contenido dentro de esa tarjeta
    const iconUp = btn.querySelector('.icon-up') as HTMLElement // El icono dentro del botón superior
    const iconDown = btn.querySelector('.icon-down') as HTMLElement // El icono dentro del botón inferior

    console.log(iconUp, iconDown)

    const isExpanded = content.hidden ? 'true' : 'false'
    btn.setAttribute('aria-expanded', isExpanded)
    content.hidden = !content.hidden

    iconUp.classList.toggle('hidden')
    iconDown.classList.toggle('hidden')
  })
})