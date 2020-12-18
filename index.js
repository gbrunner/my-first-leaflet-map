var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://a.tile.stamen.com/toner/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, under CC BY 3.0.',
        maxZoom: 18
}).addTo(mymap);
