import { createHTMLElement } from './helpers'
import './styles/index.css'

const content = document.querySelector('#content')

const createNavLink = (page) => {
  const li = createHTMLElement('li', null, ['nav-link'], null)
  const a = createHTMLElement('a', null, null, page)
  // a.setAttribute('href', page === 'home' ? '/' : `/${page}.html`)
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
  a.addEventListener('click', menu)
  // a.setAttribute('href', '/menu.html')
  card.appendChild(a)
  shadow.appendChild(card)
  home.appendChild(shadow)
  return home
}

const createCardMenu = (imgSrc, alt, content) => {
  const div = createHTMLElement('div', null, ['card'], null)

  const img = createHTMLElement('img', null, null, null)
  // img.setAttribute('src', imgSrc)
  // img.setAttribute('alt', alt)
  div.appendChild(img)

  const p = createHTMLElement('p', null, null, content)
  div.appendChild(p)

  return div
}

const createMenu = () => {
  const menu = createHTMLElement('div', null, ['menu'], null)
  const shaddow = createHTMLElement(
    'div',
    null,
    ['backdrop-shadow', 'bs-menu'],
    null
  )
  const h3Title = createHTMLElement('h3', null, ['menu-title'], 'Menu')
  shaddow.appendChild(h3Title)
  const menuContainer = createHTMLElement('div', null, ['menu-container'], null)

  let cardMenu = createCardMenu('./images/pizza.jpg', 'Pizza', 'Pizza $12')
  menuContainer.appendChild(cardMenu)

  cardMenu = createCardMenu('./images/pizza.jpg', 'Pizza', 'Pizza $12')
  menuContainer.appendChild(cardMenu)

  cardMenu = createCardMenu('./images/pizza.jpg', 'Pizza', 'Pizza $12')
  menuContainer.appendChild(cardMenu)

  shaddow.appendChild(menuContainer)
  menu.appendChild(shaddow)
  return menu
}

const createContact = () => {
  const contact = createHTMLElement('div', null, ['contact'], null)
  const shaddow = createHTMLElement(
    'div',
    null,
    ['backdrop-shadow', 'bs-menu'],
    null
  )
  const h3Title = createHTMLElement('h3', null, ['contact-title'], 'Contact Us')
  shaddow.appendChild(h3Title)
  const contactContainer = createHTMLElement(
    'div',
    null,
    ['contact-container'],
    null
  )

  let i = createHTMLElement('i', null, ['fas', 'fas-phone'])
  let p = createHTMLElement('p', null, null, `123 456 7890`)
  contactContainer.appendChild(p)
  i = createHTMLElement('i', null, ['fas', 'fas-home'])
  p = createHTMLElement('p', null, null, `Montréal, QC H3H 1A1`)
  contactContainer.appendChild(p)

  const mapRouter = createHTMLElement('div', null, ['mapouter'], null)
  const gmapCanvas = createHTMLElement('div', null, ['gmap_canvas'], null)
  const iFrame = createHTMLElement('iframe', 'gmap_canvas', null, null)
  iFrame.setAttribute(
    'src',
    'https://maps.google.com/maps?q=Montr%C3%A9al,%20QC%20H3H%201A1&t=&z=11&ie=UTF8&iwloc=&output=embed'
  )
  iFrame.setAttribute('frameborder', '0')
  iFrame.setAttribute('scrolling', 'no')
  iFrame.setAttribute('marginheight', '0')
  iFrame.setAttribute('marginwidth', '0')
  gmapCanvas.appendChild(iFrame)
  mapRouter.appendChild(gmapCanvas)
  contactContainer.appendChild(mapRouter)

  shaddow.appendChild(contactContainer)
  contact.appendChild(shaddow)

  return contact
}

function home() {
  content.innerHTML = ''
  const navBar = createNavbar()
  const home = createHome()

  content.appendChild(navBar)
  content.appendChild(home)
}

function menu() {
  content.innerHTML = ''
  const navBar = createNavbar()
  const menu = createMenu()

  content.appendChild(navBar)
  content.appendChild(menu)
}

function contact() {
  content.innerHTML = ''
  const navBar = createNavbar()
  const contact = createContact()
  content.appendChild(navBar)
  content.appendChild(contact)
}

home()

document.addEventListener('click', (e) => {
  e.preventDefault()
  const target = e.target.innerText

  console.log(target)
  if (target === 'home') {
    home()
  }
  if (target === 'menu') {
    menu()
  }

  if (target === 'contact') {
    contact()
  }
})
