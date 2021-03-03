import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import backgroundImg from '../../assets/background-signin.png'
import logoImg from '../../assets/logo.svg'
import Button from '../../components/Button';

import { useAuth } from '../../hooks';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const history = useHistory()
  const { checkOut } = useAuth()

  const handleCheckOut = useCallback(() => {
    checkOut()
    history.push('/')
  }, [checkOut, history])

  return (
    <Container>
      <img src={backgroundImg} alt="Workout Background" />

      <Content>
        <img src={logoImg} alt="Workout" />

        <h1>Você está online</h1>

        <div>
          <Button onClick={handleCheckOut}>Check-out</Button>
        </div>
      </Content>
    </Container>
  )
}

export default Home;