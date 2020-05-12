import React from 'react';
import styled from 'styled-components';
import portrait from '../img/portrait.jpg';

const About = () => {
  const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;

  const Content = styled.div`
    width: 40%;
  `;

  const Img = styled.img`
    height: 500px;
    opacity: 70%;

    &:hover {
      opacity: 100%;
      transition: 2s;
    }
  `;

  const Tag = styled.h3`
    font-size: 1.5rem;
    color: #ff0099;
    font-weight: normal;
    margin: 5rem 0rem 4rem 0rem;
  `;

  const Title = styled.h1`
    color: white;
    font-weight: normal;
    font-size: 3rem;
    margin: 1rem 0rem 1rem 0rem;
  `;

  const Subheader = styled.h3`
    color: white;
    font-size: 1.2rem;
    font-weight: normal;
    background-color: #ff0099;
    margin: 0rem 0rem 3rem 0rem;
  `;

  const Text = styled.p`
    color: white;
    font-size: 1.5rem;
    font-weight: normal;
    margin: 0rem 0rem 2rem 0rem;
  `;

  const Link = styled.a`
    color: white;
    font-size: 1.5rem;
  `;

  return (
    <Container id='about'>
      <Content>
        <Tag> &lt; about &gt; </Tag>
        <Title>Claudia Custodio</Title>
        <Subheader>Front-End Developer & Social Scientist</Subheader>
        <Text>
          I was really into social sciences & political activism until I decided
          to make a sudden & interesting change of career. Six months forward,
          now I'm a junior Front-End Developer based in Guadalajara, México;
          looking forward to get work experience and keep learning new stuff.
          <br />
          I really enjoy the dessigning process of a website, and bring a
          detail-oriented and efficient approach to my work. So far I'm
          comfortable working with HTML5, CSS, Javascript and React. <br />
          You may find me at local meet ups talking about women in tech,
          cyberfeminsm and technopolitics.
        </Text>
        <Link
          href='https://drive.google.com/open?id=16_5CJkhlhZeQKjbNrd-wzcsLh4vxF0ym'
          target='_blank'
        >
          Check my resume
        </Link>
        <Tag> &lt; / about &gt; </Tag>
      </Content>
      <Img src={portrait} alt='portrait' />
    </Container>
  );
};

export default About;
