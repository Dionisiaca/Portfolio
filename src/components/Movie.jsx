import React from 'react';
import styled from 'styled-components';

import image from '../img/movie.PNG';

const Movie = () => {
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
        <h3>Movie App</h3>
        <p>
          Movie app is an interactive web page that generates random movies to
          watch and also has a search-by-keyword area. It provides movie plots,
          title, duration, year and genre for each content.
        </p>
        <Links>
          <Link
            href='https://github.com/Dionisiaca/GDL004-movie-challenge'
            target='_blank'
          >
            REPO
          </Link>
          <Link
            href='https://dionisiaca.github.io/GDL004-movie-challenge/src/'
            target='_blank'
          >
            WEBSITE
          </Link>
        </Links>
      </Description>
    </Container>
  );
};

export default Movie;
