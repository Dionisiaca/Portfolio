import React from 'react';
import styled from 'styled-components';

import image from '../img/labnotes.png';

const Labnotes = () => {
  const Container = styled.div`
    width: 70%;
    padding: 3rem;
  `;

  const Img = styled.img`
    width: 100%;
    opacity: 60%;
    &: hover {
      opacity: 90%;
      transition: 1s;
    }
  `;

  const Description = styled.div`
    width: 93%;
    background-color: transparent;
    border: 1px solid #80ff00;
    padding: 1rem 2rem 1rem 2rem;
    color: white;
    &: hover {
      background: white;
      color: blue;
      transition: 1s;
    }
  `;

  const Links = styled.div`
    display: flex;
    justify-content: space-between;
    width: 10rem;
    height: 2rem;
  `;

  const Link = styled.a`
    font-weight: 600;
    color: #80ff00;
    text-decoration: none;
  `;

  return (
    <Container>
      <Img src={image} alt='movieapp' />
      <Description>
        <h3>Labnotes</h3>
        <p>
          React app that allows the user to sign-in into an account, create,
          store and edit notes dynamically.
        </p>
        <Links>
          <Link
            href='https://github.com/Dionisiaca/GDL004-lab-notes'
            target='_blank'
          >
            REPO
          </Link>
          <Link
            href='https://dionisiaca.github.io/GDL004-lab-notes/'
            target='_blank'
          >
            WEBSITE
          </Link>
        </Links>
      </Description>
    </Container>
  );
};

export default Labnotes;
