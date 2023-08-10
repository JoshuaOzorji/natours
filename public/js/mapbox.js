/*eslint-disable*/
export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibXJqb3NoIiwiYSI6ImNsa3NjMDl1ajAyNGozZnBjMzFsZTRmNTUifQ.VmkDmgcGZOulwWWGiU3-hw';

  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mrjosh/clksd7n4c00sf01pcg7hscuv6/draft', // style URL
    scrollZoom: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    //Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    //Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    //Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    //Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      padding: { top: 200, bottom: 150, left: 100, right: 100 }
    }
  });
};
