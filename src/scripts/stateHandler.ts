interface PageState {
  someData: string
}

// Manejo del evento 'pagehide'
window.addEventListener('pagehide', (event: PageTransitionEvent) => {
  if (event.persisted) {
    const pageState: PageState = {
      someData: 'value'
    }
    sessionStorage.setItem('pageState', JSON.stringify(pageState))
  }
})

// Manejo del evento 'pageshow'
window.addEventListener('pageshow', (event: PageTransitionEvent) => {
  if (event.persisted) {
    const savedState = sessionStorage.getItem('pageState')
    if (savedState) {
      const pageState: PageState = JSON.parse(savedState)
      console.log('Estado restaurado: ', pageState)
      // Aquí puedes restaurar el estado del DOM o cualquier otra lógica
    }
  }
})
