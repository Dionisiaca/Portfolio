import React from 'react';
import styled from 'styled-components';

const Main = () => {
  const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0004fd;
    color: white;
  `;

  const Text = styled.div`
    width: 55%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
  `;

  const H1 = styled.h1`
    margin: 0;
    font-size: 5rem;
  `;

  const P = styled.p`
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0.5em;

    &:hover {
      color: #80ff00;
      font-size: 3rem;
    }
  `;

  return (
    <Container id='main'>
      <Text>
        <H1> CODE IS </H1>
        <div>
          <P>EFFICIENT</P>
          <P>CLEAN </P>
          <P>TRANSFORMATIVE</P>
          <P>DISRUPTIVE </P>
          <P>HUMANE</P>
          <P>MADE.</P>
        </div>
      </Text>
    </Container>
  );
};

export default Main;
