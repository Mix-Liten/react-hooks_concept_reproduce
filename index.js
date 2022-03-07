import { render } from './LocalReact.js'
import Component from './Component.js'

let propCount = 0
document.getElementById('btn-prop').addEventListener('click', () => {
  propCount++
  renderComponent()
})

function renderComponent() {
  render(Component, { propCount }, document.getElementById('root'))
  render(Component, { propCount }, document.getElementById('root2'))
}

renderComponent()
