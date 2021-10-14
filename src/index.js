import { createHTMLElement } from './helpers'
import './styles/index.css'

const content = document.querySelector('#content')

const createNavLink = (page) => {
  const li = createHTMLElement('li', null, ['nav-link'], null)
  const a = createHTMLElement('a', null, null, page)
  a.setAttribute('href', page === 'home' ? '/' : `/${page}.html`)
  li.appendChild(a)
  return li
}

const createNavbar = () => {
  const navBar = createHTMLElement('div', null, ['navbar'], null)
  const ul = createHTMLElement('ul', null, ['nav'], null)

  const h2 = createHTMLElement('h2', null, ['nav-brand'], 'Stella Restaurant')
  ul.appendChild(h2)
  const span = createHTMLElement('span', null, ['flex'], null)
  ul.appendChild(span)
  const liHome = createNavLink('home')
  ul.appendChild(liHome)
  const liMenu = createNavLink('menu')
  ul.appendChild(liMenu)
  const liContact = createNavLink('contact')
  ul.appendChild(liContact)
  return navBar.appendChild(ul)
}

const createHome = () => {
  const home = createHTMLElement('div', null, ['home'], null)
  const shadow = createHTMLElement('div', null, ['backdrop-shadow'], null)
  const card = createHTMLElement('div', null, ['card'], null)
  const h1 = createHTMLElement(
    'h1',
    null,
    ['restaurant-name'],
    'Stella Restaurant'
  )
  card.appendChild(h1)
  const p = createHTMLElement(
    'p',
    null,
    ['content'],
    'Discover new flavor, new taste.'
  )
  card.appendChild(p)
  const a = createHTMLElement('a', null, ['btn'], 'Check our menu')
  a.setAttribute('href', '/menu.html')
  card.appendChild(a)
  shadow.appendChild(card)
  home.appendChild(shadow)
  return home
}

const navBar = createNavbar()
const home = createHome()

content.appendChild(navBar)
content.appendChild(home)
