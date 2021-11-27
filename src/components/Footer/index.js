import React from 'react';
import './footer.scss';
import iconTop from '../../images/icon-top.svg';

function Footer(){
    return(
    <footer className="footer">
        <div className="footer__section footer__section--first">
            <div className="footer__container">
                <p>
                    <strong>Observação: </strong>Observação: este site é uma amostra de desenvolvimento tecnológico de iniciativa independente  do curso de React Dev Week promovido pela EBAC, as informações aqui apresentadas podem estar eventualmente desatualizadas, por isso recomendamos sempre conferir as informações diretamente com o estabelecimento.  A exibição dos locais, nesta página não caracteria recomendação de uso.
                </p>
            </div>
        </div> 

        <div className="footer__section footer__section--second">
            <div className="footer__container">
                <p>
                    <strong>Projeto Elaborado durante a RDW <a href="https://ebac.art.br/" target="_blank">E.B.A.C</a> 2021</strong>
                    <small>
                        Projetado por <a href="https://linkedin.com/in/demetriustobias" target="_black">Demetrius Tobias</a>, com auxílio de <a href="https://www.linkedin.com/in/luizflira/" target="_blank">Luiz F. Lira</a>, desenvolvido por Aluno EBAC.
                        <p>GitHub<a href="https://github.com/Demetrrius" target="_blank"> Demetrius</a></p> 
                    </small>  
                </p> 
                <a href="#top" className="button">
                    <img src={iconTop} alt="Voltar ao topo" />
                </a>
            </div> 
        </div>
    </footer>
    )
}

export default Footer