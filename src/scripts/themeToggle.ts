class ThemeToggle extends HTMLElement {
  constructor() {
    super()
    
    const btn = this.querySelector('button')!

    // Configurar el tema en modo oscuro/claro.
    const setTheme = (dark: boolean) => {
      document.documentElement.classList[dark ? 'add' : 'remove']('theme-dark', 'dark')

      btn.setAttribute('aria-pressed', String(dark))

      // Guardar el estado en localStorage
      localStorage.setItem('theme-dark', String(dark))
    }

    // Alternar el tema cuando un usuario hace clic en el botón.
    btn.addEventListener('click', () => setTheme(!this.isDark()))

    // Inicializar el estado del botón para reflejar el tema actual.
    setTheme(this.isDark())
  }

  isDark() {

    // Comprobar si ya existe un valor en localStorage
    const storedTheme = localStorage.getItem('theme-dark')
    if (storedTheme !== null) return storedTheme === 'true'

    // Comprobar si el tema actual es oscuro
    return document.documentElement.classList.contains('theme-dark')
  }
}

customElements.define('theme-toggle', ThemeToggle)