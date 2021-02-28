import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import { Content, Header } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <h1>Olá, seja bem-vindo ao seu gerenciador de eventos</h1>
      </Header>
      <Content>
        <div>
          <h2>Escolha uma das opções</h2>
        </div>
        <Link to="/registerEvent">
          <Button className="cadastrar">Cadastrar evento</Button>
        </Link>
        <Link to="/registerSubscription">
          <Button className="inscricao">Inscrição em evento</Button>
        </Link>
        <Link to="/listSubscription">
          <Button className="lista">Emitir lista </Button>
        </Link>
      </Content>
    </>
  );
};

export default Home;
