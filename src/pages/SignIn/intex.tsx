import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FiLock, FiMail } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import {
  BackgroundLeft,
  BackgroundRight,
  BackgroundTop,
  BackgroundBottom,
  AnimationContainer,
  Container,
  Content,
} from './styles';
import { useAuth } from '../../hooks/Auth';
import getValidationErrors from '../../utils/getValidationErros';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useToast } from '../../hooks/Toast';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });
        await signIn({ email: data.email, password: data.password });

        addToast({
          type: 'success',
          title: 'Sucesso',
          description: 'Autenticação realizada com sucesso',
        });

        history.push('/home');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
        addToast({
          type: 'error',
          title: 'Erro na Autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [signIn, history, addToast],
  );

  return (
    <Container>
      <BackgroundLeft />
      <Content>
        <BackgroundTop />
        <AnimationContainer>
          <h1>Faça seu logon</h1>
          <h4>Entre na melhor rede de cadastro de eventos.</h4>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>
            <div>
              <p>Você já tem uma conta?</p>
              <Link to="/signup">Registre-se</Link>
            </div>
          </Form>
        </AnimationContainer>
        <BackgroundBottom />
      </Content>
      <BackgroundRight />
    </Container>
  );
};

export default SignIn;
