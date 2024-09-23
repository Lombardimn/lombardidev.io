/**
 * Navbar
 */

class MenuButton extends HTMLElement {
  constructor() {
    super()

    // Insertar el contenido del <template> en el componente y seleccionar el primer botón dentro del componente.
    this.appendChild(this.querySelector('template')!.content.cloneNode(true))
    const btn = this.querySelector('button')!
    
    // Seleccionar el elemento con ID "menu-content" y ocultar, estableciendo su propiedad `hidden` a true.
    const menu = document.getElementById('menu-content')!
    menu.hidden = true
    menu.classList.add('menu-content')

    // Define una función que actualiza el estado de expansión del menú y el atributo `aria-expanded` del botón.
    const setExpanded = (expanded: boolean) => {
      btn.setAttribute('aria-expanded', expanded ? 'true' : 'false')
      menu.hidden = !expanded
    }

    btn.addEventListener('click', () => setExpanded(menu.hidden))

    //  Define una función para ajustar el estado de expansión según el tamaño de la pantalla, y configura un listener para cambios en el tamaño de la pantalla.
    const handleViewports = (e: MediaQueryList | MediaQueryListEvent) => {
      setExpanded(e.matches)
      btn.hidden = e.matches
    }

    const mediaQueries = window.matchMedia('(min-width: 50em)')
    handleViewports(mediaQueries)
    mediaQueries.addEventListener('change', handleViewports)
  }
}

customElements.define('menu-button', MenuButton)