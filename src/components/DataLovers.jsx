import React from 'react';
import styled from 'styled-components';

import image from '../img/chocolatefrogs.png';

const DataLovers = () => {
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
        <h3>Chocolate Frog Cards</h3>
        <p>
          Website that emulates a digital version of Harry Potter's Chocolate
          Frog Cards, a collection of data about the main and secondary
          characters of the Harry Potter movie universe.
        </p>
        <Links>
          <Link
            href='https://github.com/Dionisiaca/Chocolate-Frog-Cards'
            target='_blank'
          >
            REPO
          </Link>
          <Link
            href='https://github.com/Dionisiaca/Chocolate-Frog-Cards'
            target='_blank'
          >
            WEBSITE
          </Link>
        </Links>
      </Description>
    </Container>
  );
};

export default DataLovers;
