import "./App.css";
import StrokeAnimation from "./componets/StrokeAnimanation";
import MapReactEchart from "./componets/MapReactEchart";
import BarCategoryEchart from "./componets/BarCategoryEchart";

function App() {
  return (
    <>
      <StrokeAnimation text={"Reporte Geo - Map"} fontSize={50} />
      <StrokeAnimation text={"Región de O'Higgins"} fontSize={40} />

      <div className="container">
        <MapReactEchart />
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
      <div className="container-info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          ullam consectetur suscipit, possimus maiores impedit sunt autem,
          rerum, laudantium necessitatibus iure nisi eos obcaecati voluptates
          hic excepturi! Nihil, ullam ipsam.
        </p>
      </div>
      <div>
        <h3>Developed by Víctor Olea</h3>
      </div>
    </>
  );
}

export default App;
