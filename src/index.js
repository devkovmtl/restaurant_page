import { createHTMLElement } from './helpers'
import './styles/index.scss'

const content = document.querySelector('div#content')
const div = createHTMLElement('div', 'leftPane', ['pane', 'left-pane'])

content.appendChild(div)

console.log({ one: 1, two: 2 })
