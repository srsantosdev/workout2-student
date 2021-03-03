import React, { useCallback, useRef, useState } from 'react';
import { FiUser } from 'react-icons/fi';

import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import backgroundImg from '../../assets/background-signin.png'
import logoImg from '../../assets/logo.svg'

import Button from '../../components/Button';
import Input from '../../components/Input';

import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks';

import { Container, Content } from './styles';
import { useHistory } from 'react-router-dom';

interface CheckinData {
  document: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const history = useHistory()
  const { checkIn } = useAuth()

  const [loading, setLoading] = useState(false)

  const handleSubmit = useCallback(async (data: CheckinData) => {
    try {
      setLoading(true);

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        document: Yup.string().required('CPF obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await checkIn(data.document)

      history.push('/home')
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);

        return;
      }

      console.log(error)
    } finally {
      setLoading(false);
    }
  }, [history, checkIn])

  return (
    <Container>
      <img src={backgroundImg} alt="Workout Background" />

      <Content>
        <img src={logoImg} alt="Workout"/>

        <h1>Faça seu check-in</h1>

        <Form ref={formRef}onSubmit={handleSubmit}>
          <Input name="document" label="CPF" placeholder="Insira o nº de CPF" icon={FiUser} />
          <Button loading={loading}>Check-in</Button>
        </Form>
      </Content>
    </Container>
  )
}

export default SignIn;