import Formulario from "./components/Formulario";
import {useEffect, useState} from "react";


function App() {
    //state de la app
    const [ busqueda, guardarBusqueda ] = useState('');

    useEffect(() =>{
       const consultarApi = async () => {
           if(busqueda === '') return;

           const imagnesPorPagina = 30;
           const key = '21596673-6966bfff3d038f861918c7246';
           const url = ` https://pixabay.com/api/?key=${ key }&q=${busqueda}&per_page=${imagnesPorPagina}`;

           const respuesta = await fetch(url);
           const resultado = await  respuesta.json();

           guardarBusqueda(resultado.hits);
       };
       consultarApi();

    },[busqueda]);


  return (
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center"> Buscador de Imagenes</p>
            <Formulario
                guardarBusqueda = {guardarBusqueda}
            />

        </div>

      </div>
  );
}

export default App;
