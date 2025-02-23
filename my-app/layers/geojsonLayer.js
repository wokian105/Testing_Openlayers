import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';

const geojsonLayer = new VectorLayer({
    source: new VectorSource({
        url: 'assets/converted_geojson.json', // Use the new file here
        format: new GeoJSON(),
    })
});
export default geojsonLayer;