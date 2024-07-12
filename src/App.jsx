import "./App.css";
//import MapReactEchart from "./componets/MapReactEchart";
import StrokeAnimation from "./componets/StrokeAnimanation";
import Mapa6Region from "./assets/map_6_region.svg";
import BarCategoryEchart from "./componets/BarCategoryEchart";

function App() {
  return (
    <>
      <StrokeAnimation text={"Reporte Geo - Map"} fontSize={50} />
      <StrokeAnimation text={"Región de O'Higgins"} fontSize={40} />

      <div className="container">
        <img src={Mapa6Region} alt="Mapa Test" />
        {/* <MapReactEchart /> */}
      </div>
      <div className="container-info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          distinctio reiciendis accusamus fugit quidem animi? Voluptatum odio
          numquam at. Libero tempore necessitatibus dolorem incidunt fuga iure
          saepe qui! Consectetur, perferendis.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          ullam nulla fugit, modi facere placeat tempore sapiente dignissimos
          eveniet debitis! Dicta quo recusandae, consectetur numquam vero
          nostrum quos in voluptate?
        </p>
      </div>
      <div className="container-bar">
        <BarCategoryEchart />
      </div>
      <div>
        <h3>Developed by Víctor Olea</h3>
      </div>
    </>
  );
}

export default App;
