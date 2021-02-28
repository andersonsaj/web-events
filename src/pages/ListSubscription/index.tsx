import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { FiArrowLeft, FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Select from '../../components/ComboBox';
import { useToast } from '../../hooks/Toast';
import api from '../../services/api';
import { EventData } from '../RegisterSubscription';
import { Background, Container, Content, AnimationContainer } from './styles';

interface ListSubscriptionData {
  name: string;
  cpf: string;
  email: string;
  error: string;
}

const ListSubscription: React.FC = () => {
  const { addToast } = useToast();
  const [subscriptions, setSubscriptions] = useState<ListSubscriptionData[]>(
    [],
  );
  const [events, setEvents] = useState<EventData[]>([]);
  const [selectEvent, setSelectedEvent] = useState('');

  const handleSelect = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();
      try {
        api
          .get(`/subscriptions/${selectEvent}`)
          .then(response => setSubscriptions(response.data));
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Erro inesperado',
        });
      }
    },
    [selectEvent, subscriptions],
  );

  useEffect(() => {
    try {
      api.get('/events').then(response => setEvents(response.data));
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro',
        description: 'Erro inesperado',
      });
    }
  }, [events]);

  return (
    <Container>
      <Background />
      <Content>
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
        <AnimationContainer>
          <h1>Lista de inscritos no Evento</h1>
          <form onSubmit={handleSelect}>
            <div className="div-event">
              <Select
                value={selectEvent}
                onChange={e => setSelectedEvent(e.target.value)}
              >
                {events.map(event => (
                  <option key={event.id} value={event.id}>
                    {event.title}
                  </option>
                ))}
              </Select>
              <Button type="submit">Pesquisar</Button>
            </div>
          </form>
          {subscriptions.length !== 0 ? (
            subscriptions.map(list => (
              <div>
                <strong>{`Nome: ${list.name}`}</strong>
                <br />
                <strong>{`CPF: ${list.cpf}`}</strong>
                <br />
                <strong>{`E-mail: ${list.email}`}</strong>
              </div>
            ))
          ) : (
            <div>
              <strong>Não existe inscritos nesse evento</strong>
            </div>
          )}
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default ListSubscription;
