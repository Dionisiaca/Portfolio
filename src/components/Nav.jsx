import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll } from 'react-scroll';

const Nav = () => {
  const Container = styled.div`
    position: fixed;
    top: 0;
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    color: white;
    padding: 0rem 1rem 0rem 1rem;
    z-index: 1;
  `;
  const Menu = styled.ul`
    width: 30%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-right: 5rem;
    padding: 0;
  `;
  const H3 = styled.h3`
    font-size: 1.5rem;
    margin-left: 4rem;
  `;
  const Li = styled.li`
    background-color: black;
    padding: 0.5rem;
  `;

  return (
    <Container>
      <H3 onClick={() => animateScroll.scrollToTop()}>C C</H3>
      <Menu>
        <Link to='about' smooth={true} duration={1000}>
          <Li> About </Li>
        </Link>
        <Link to='projects' smooth={true} duration={1000}>
          <Li> Projects </Li>
        </Link>
        <Link to='skills' smooth={true} duration={1000}>
          <Li>How I work</Li>
        </Link>
        <Link to='contact' smooth={true} duration={1000}>
          <Li> Contact </Li>
        </Link>
      </Menu>
    </Container>
  );
};

export default Nav;
