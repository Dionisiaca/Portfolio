import React from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import Labnotes from './Labnotes';
import DataLovers from './DataLovers';

const Projects = () => {
  const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column;
    background-color: black;
    color: white;
  `;
  const Tag = styled.h3`
    font-size: 1.5rem;
    color: #80ff00;
    font-weight: normal;
    margin: 5rem 7rem 4rem 7rem;
  `;

  const Div = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items; center;
    margin: 1rem 7rem 1rem 7rem;
  `;

  return (
    <Container id='projects'>
      <Tag> &lt; projects &gt; </Tag>
      <Div>
        <Movie />
        <Labnotes />
        <DataLovers />
      </Div>
      <Tag> &lt; projects &gt; </Tag>
    </Container>
  );
};

export default Projects;
