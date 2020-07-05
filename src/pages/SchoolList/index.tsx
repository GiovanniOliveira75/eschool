import React, { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';

import logo from '../../assets/logo.svg';

interface School {
  cod: number;
  nome: string;
  cidade: string;
  estado: string;
  dependenciaAdministrativaTxt: string;
}

const CreatePoint = () => {
  const [schools, setSchool] = useState<School[]>([]);

  useEffect(() => {
    axios
      .get(
        'http://educacao.dadosabertosbr.com/api/escolas/buscaavancada?estado=RN'
      )
      .then((res) => {
        setSchool(res.data[1]);
      });
  }, []);

  return (
    <div id='page-create-point'>
      <header>
        <img src={logo} alt='Ecoleta' />
        <Link to='/'>
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <main>
        <h1>Lista de escolas</h1>

        {!schools.length ? (
          <h5>Carregando...</h5>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Administração</th>
              </tr>
            </thead>
            <tbody>
              {schools.map((school) => (
                <tr key={school.cod}>
                  <td>{school.nome}</td>
                  <td>{school.cidade}</td>
                  <td>{school.estado}</td>
                  <td>{school.dependenciaAdministrativaTxt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
};

export default CreatePoint;
