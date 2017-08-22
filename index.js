function createEl (tagName, className, container) {
  const el = window.document.createElement(tagName)
  if (className) el.className = className
  if (container) container.appendChild(el)
  return el
}

function Legend (legend) {
  if (!(this instanceof Legend)) return new Legend(legend)
  this._map = null // mapbox-gl Map
  this._mapContainer = null // HTMLElement
  this._className = 'mapboxgl-ctrl' // string
  this._container = null // HTMLelement
  this._legendButton = null // HTMLElement
  this._open = true // boolean
  this.toggle = this.toggle.bind(this)
  this._legend = (typeof legend === 'function') ? legend(this._onClickToggleLegend) : legend
}

Legend.prototype.onAdd = function (map) {
  this._map = map
  this._mapContainer = this._map.getContainer()
  this._container = createEl('div', `${this._className} mapboxgl-ctrl-group`)
  const button = this._legendButton = createEl('button', (`${this._className}-icon ${this._className}-legend`), this._container)
  button.setAttribute('aria-label', 'Toggle legend')
  button.innerHTML = 'L'
  button.type = 'button'
  this._legendButton.addEventListener('click', this.toggle)
  return this._container
}

Legend.prototype.onRemove = function () {
  DOM.remove(this._container)
  this._map = null
}

Legend.prototype.toggle = function () {
  if (this._open) return this.hide()
  else return this.show()
}

Legend.prototype.hide = function () {
  this._open = false
  this._legend.style.display = 'none'
}

Legend.prototype.show = function () {
  this._open = true
  this._legend.style.display = ''
}

module.exports = Legend
