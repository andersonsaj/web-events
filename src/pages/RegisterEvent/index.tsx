import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiCast, FiCheck, FiChevronLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../../components/Button';
import Input from '../../components/InputOrange';
import { useToast } from '../../hooks/Toast';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErros';
import { Background, Container, Content, AnimationContainer } from './styles';

interface RegisterEventFormData {
  title: string;
  description: string;
  place: string;
  dateEvent: Date;
  deadline: Date;
  minimumAge: number;
  maximumQuantity: number;
}

const RegisterEvent: React.FC = () => {
  const fromRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: RegisterEventFormData) => {
      try {
        fromRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Titúlo obrigatório'),
          description: Yup.string().required('Descrição obrigatório'),
          place: Yup.string().required('local do evento obrigatório'),
          dateEvent: Yup.date().required('Data do evento obrigatório'),
          deadline: Yup.date().required('Data limite de inscrição obrigatório'),
          minimumAge: Yup.number().required('Idade mínima obrigatório'),
          maximumQuantity: Yup.string().required(
            'Data limite de inscrição obrigatório',
          ),
        });
        await schema.validate(data, { abortEarly: false });
        await api.post('events', data);
        addToast({
          type: 'success',
          title: 'Sucesso',
          description: 'Cadastro realizada com sucesso',
        });
        history.push('/home');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          fromRef.current?.setErrors(errors);
        }
        addToast({
          type: 'error',
          title: 'Erro',
          description: `${err.errors}`,
        });
      }
    },
    [history],
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
          <h1>Para cadastrar seu evento adicione os dados abaixo</h1>
          <Form ref={fromRef} onSubmit={handleSubmit}>
            <Input
              name="title"
              icon={FiCheck}
              placeholder="Adicione um titúlo"
            />
            <Input
              name="description"
              icon={FiCheck}
              placeholder="Descreva o seu evente"
            />
            <Input name="place" icon={FiCheck} placeholder="Local do evente" />
            <p className="date-event">Data do evente</p>
            <Input
              name="dateEvent"
              icon={FiCheck}
              type="datetime-local"
              placeholder="Data do evente"
            />
            <p className="date-limit">Data limite de inscrição</p>
            <Input
              name="deadline"
              icon={FiCheck}
              type="datetime-local"
              placeholder="Data limite de inscrição"
            />
            <Input
              name="minimumAge"
              icon={FiCheck}
              type="number"
              placeholder="Idade mínima"
            />
            <Input
              name="maximumQuantity"
              icon={FiCheck}
              type="number"
              placeholder="Quantidade Máxima de Pessoas"
            />
            <Button type="submit">Salvar</Button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default RegisterEvent;
