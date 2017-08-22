# mapbox-gl-legend-control

Add a legend control to your Mapbox GL Map.

## Example

```js
var mapbox = require('mapbox-gl')
var LegendControl = require('mapbox-gl-legend')

var map = new mapboxgl.Map({
  container: 'map', // container id
  zoom: 5.5, // starting zoom
  maxBounds: [-87, -9, -70, 6]
})

var legend = new LegendControl(document.querySelector('#my-legend'))
map.addControl(legend, 'top-left')
```

```html
<div id="map"></div>
<div id="my-legend">
  <ul>
    <li><img src="/icons/fairy.png"> Fairy</li>
    <li><img src="/icons/centaur.png"> Centaur</li>
  </ul>
</div>
```

## API

#### ```var ctrl = LegendControl(legend: HTMLElement)```

Create the legend control. The control can be added to the map using `map.addControl(legend, location)`.

* `legend` is an HTMLElement that represents the legend. When the legend control is clicked or `toggle` is called, the legend will be shown or hidden.

#### ```ctrl.hide()```

Hide the legend.

#### ```ctrl.show()```

Show the legend.

#### ```ctrl.toggle()```

Toggle showing or hiding the legend.

#### ```ctrl.isOpen()```

Returns `true` if the legend is open.
