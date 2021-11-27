
import React, { useState } from 'react';
import './vicosa.scss'
import imageDestack from '../../images/imagem-destaque.svg';
import Pills from '../../components/Pills';


{/*--------- COMPONENTE PAGES/VIÇOSA/INDEX ---------*/}


const PLACES = [
    'Praça',
    'Parque',
    'Igreja',
    'Hotel',
    'Restaurante',
    'Farmácia',
    'Loja',
    'Morro',
    'Universidade',
    'Quadras'
]
const Caxambu = props => {

    const [selectedPill, setSelectedPill] = useState('')

    return(
        <main id="main-content" className="home__container">
            <div className="home__col">
                <h1 className="home__title">{props.city} para todos</h1> 

                {/*HIDE DESKTOP*/}
                <div className="home__image home__image--destack hide-desktop">
                    <img src={imageDestack} alt="Imagem destaque cadeirante" />
                </div>
                <p className="home__text">Viçosa - Nossa missão é facilitar o encontro entre lugares inclusivos e pessoas que buscam alternativas culturais para sair de casa, com a mobilidade que todo cidadão precisa.</p>
                <p className="home__text">Checamos 10 itens essenciais de acessibilidade para pessoas com deficiência em diversos pontos da cidade.</p> 

                <div className="home__pills">
                    {
                        PLACES.map((item) => (
                            <Pills 
                                local={item}
                                selected={selectedPill == item }
                                onClick={() => setSelectedPill(item) }
                            
                            />

                        ))
                    }       
                </div>
            </div>
            <div className="home__col">

                {/*HIDE MOBILE*/}
                <div className="home__image home__image--destack hide-mobile">
                    <img src={imageDestack} alt="Imagem destaque cadeirante" />
                </div>
            </div>

            
        </main>
    )

}

export default Caxambu;
