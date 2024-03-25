import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {
    const { urlToImage, url, title, description, source } = noticia;
    const urlImage = (urlToImage) ? urlToImage : '';
    // console.warn(urlImage.match(/\.(jpeg|jpg|gif|png)$/) != null);

    const imgComponent = (urlImage.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/) != null) ? (
    <div className="card-image">
        <img src={urlToImage} alt={title} />
        <span className="card-title">{source.name}</span>
    </div>) : null;
    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                { imgComponent }

                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver noticia completa</a>
                </div>
            </div>
        </div>
     );
}
 
Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}
export default Noticia;