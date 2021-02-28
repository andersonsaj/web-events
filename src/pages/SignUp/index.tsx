import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import {
  FiArrowLeft,
  FiChevronLeft,
  FiLock,
  FiMail,
  FiUser,
} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Background, Container, Content, AnimationContainer } from './styles';
import { useAuth } from '../../hooks/Auth';
import getValidationErrors from '../../utils/getValidationErros';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import { useToast } from '../../hooks/Toast';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  passwordCopy: string;
}

const SignUp: React.FC = () => {
  const fromRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        fromRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
          passwordCopy: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'Senha não é idual! ',
          ),
        });
        await schema.validate(data, { abortEarly: false });
        await api.post('users', data);
        addToast({
          type: 'success',
          title: 'Sucesso',
          description: 'Cadastro realizado com sucesso',
        });
        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          fromRef.current?.setErrors(errors);
        }
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Erro no cadastro',
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
          <h1>Registre sua conta!</h1>
          <h4>Para fins de segurança, seus dados são obrigatórios.</h4>
          <Form ref={fromRef} onSubmit={handleSubmit}>
            <Input name="name" icon={FiUser} placeholder="Insira seu nome" />
            <Input
              name="email"
              icon={FiMail}
              placeholder="Insira o endereço de E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Insira sua senha"
            />
            <Input
              name="passwordCopy"
              icon={FiLock}
              type="password"
              placeholder="Insira novamente sua senha"
            />
            <Button type="submit">Registrar conta</Button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
