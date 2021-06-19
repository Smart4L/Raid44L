import { MapControl, withLeaflet } from "react-leaflet";
import L from "leaflet";

class Legend extends MapControl {
  createLeafletElement(props) {}

  componentDidMount() {
    let legends = [
        {
            color: "#1D78C9",
            text: "Chemin prévu pour février 2022"
        }
    ]

    const legend = L.control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      let labels = [];

      labels  = legends.map( legend => {
          return (
            '<i style="background:' +
            legend.color +
            '"></i> ' +
            legend.text
          )
      })

      div.innerHTML = labels.join("<br>");
      return div;
    };

    const { map } = this.props.leaflet;
    legend.addTo(map);
  }
}

export default withLeaflet(Legend);
