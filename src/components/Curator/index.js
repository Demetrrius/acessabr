import React from 'react';
import './curator.scss';
import curatorPhoto from '../../images/photo-demetrius.png'

function CuratorItem(){

    return(
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto criador Demetrius Tobias" />
            </div>
            <div className="curator__details">
                <h3>Demetrius Tobias</h3>
                <h6>Criador</h6>
                <p>Analistas de sistemas, instrutor de informática e analista de suporte técnico</p>
            </div>
        </div>
    )
}
export default CuratorItem