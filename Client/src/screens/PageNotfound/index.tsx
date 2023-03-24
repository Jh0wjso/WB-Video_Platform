import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import Icon from "../../images/undraw_drink_coffee_0asa.svg";

const PageNotFound = () => {
  return (
    <div className='containerContent'>
    <img src={Icon} width={300} alt="Dragon Ball cover" className="imgIcon"/>
      <h1 className='tittleErrorMessage'>404 - Página não encontrada</h1>
      <p className='subTittleErrorMessage'>Kamisama ainda está construindo essa area.</p>
      <Link to="/" className='btnBack'>
        Voltar para o site
      </Link>
    </div>
  );
};

export default PageNotFound;