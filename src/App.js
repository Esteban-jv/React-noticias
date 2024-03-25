import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // Definir la categoría
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const apiKey = 'd91bf7f8d23943949f96795ee6c43f03';
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${apiKey}`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      setNoticias(noticias.articles);
    }
    consultarAPI();

  }, [categoria])

  return (
    <Fragment>
      <Header title="Buscador de noticias"/>
      <div className="container white">
        <Formulario
          setCategoria={setCategoria}
        />

        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
