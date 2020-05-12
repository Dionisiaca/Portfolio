import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background-color: #0004fd;
    color: white;
  `;

  const H1 = styled.div`
    text-align: center;
    width: 90%;
    font-size: 4rem;
    margin-bottom: 2rem;
  `;

  const Link = styled.a`
    color: white;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    &:hover {
      color: #80ff00;
    }
  `;

  return (
    <Container id='contact'>
      <H1> Let's talk!</H1>
      <Link href='mailto:claudia.custodiog@gmail.com'>
        claudia.custodiog@gmail.com
      </Link>
      <Link
        href='https://www.linkedin.com/in/claudia-custodio/'
        target='_blank'
      >
        LinkedIn
      </Link>
      <Link href='https://github.com/Dionisiaca' target='_blank'>
        Github
      </Link>
    </Container>
  );
};

export default Contact;
