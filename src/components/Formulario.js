import React from 'react';
import UseSelect from '../hooks/UseSelect';
import styles from './Formulario.module.css'
import PropTypes from 'prop-types';
/**
 * 
 * En este caso se importa styles con un module.
 * Para poder acceder a styles de module y crudos se usan los acentos/comillas
 * Para acceder a guiones medios en styles combinados entre crudos y de modules
 * usamos corchetes y comillas simples
 * 
 * d91bf7f8d23943949f96795ee6c43f03
 */
const Formulario = ({setCategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entretainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'},
    ];
    const [ categoria, SelectNoticias] = UseSelect('general', OPCIONES);
    // On submt
    const buscarNoticias = e => {
        e.preventDefault();
        setCategoria(categoria);
    }
    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>

                    <SelectNoticias/>
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
}
export default Formulario;