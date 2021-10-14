export function createHTMLElement(elementType, id, classes, content) {
  const el = document.createElement(elementType)
  if (id) el.id = id
  if (classes) {
    for (let i = 0; i < classes.length; i++) {
      el.classList.add(classes[i])
    }
  }
  if (content) el.innerText = content
  return el
}
