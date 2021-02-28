import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { request } from 'https';
import { memoryUsage } from 'process';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FiArrowLeft, FiCast, FiCheck, FiChevronLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../../components/Button';
import Select from '../../components/ComboBox';
import Input from '../../components/Input';
import { useToast } from '../../hooks/Toast';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErros';
import { Background, Container, Content, AnimationContainer } from './styles';

interface RegisterSubscriptionFormData {
  name: string;
  cpf: string;
  email: string;
  birthDate: Date;
  event: string;
}

export interface EventData {
  id: string;
  title: string;
}

const RegisterSubscription: React.FC = () => {
  const fromRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();
  const [eventos, setEventos] = useState<EventData[]>([]);
  const [selectEvento, setSelectedEvento] = useState('');

  useEffect(() => {
    api.get('/events').then(response => setEventos(response.data));
  }, [eventos]);

  const handleSubmit = useCallback(
    async (data: RegisterSubscriptionFormData) => {
      try {
        const subscription = {
          name: data.name,
          cpf: data.cpf,
          email: data.email,
          birthDate: data.birthDate,
          event: selectEvento,
        };

        fromRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          cpf: Yup.string().required('CPF obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          birthDate: Yup.date().required('Data de nascimento obrigatório'),
        });
        await schema.validate(data, { abortEarly: false });
        await api.post('subscriptions', subscription);
        addToast({
          type: 'success',
          title: 'Sucesso',
          description: 'Inscrição realizada com sucesso',
        });
        history.push('/home');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors(err);
          fromRef.current?.setErrors(error);
        }
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Você não pode se inscrever nesse Evento',
        });
      }
    },
    [history, selectEvento],
  );
  return (
    <Container>
      <Background />
      <Content>
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
        <AnimationContainer>
          <h1>Para se inscrever em um evento adicione os dados abaixo</h1>
          <Form ref={fromRef} onSubmit={handleSubmit}>
            <Select
              name="event"
              id="event"
              value={selectEvento}
              onChange={e => setSelectedEvento(e.target.value)}
            >
              {eventos.map(item => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </Select>

            <Input name="name" icon={FiCheck} placeholder="Digite seu nome" />
            <Input name="cpf" icon={FiCheck} placeholder="Digite seu CPF" />
            <Input
              name="email"
              icon={FiCheck}
              placeholder="Digite seu E-mail"
            />
            <p>Data de Nascimento</p>
            <Input
              name="birthDate"
              icon={FiCheck}
              type="date"
              placeholder="Data de nascimento"
            />
            <Button type="submit">Salvar</Button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default RegisterSubscription;
