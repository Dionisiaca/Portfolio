import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    background-color: black;
    color: white;
  `;

  const Tag = styled.h3`
    font-size: 1.5rem;
    color: #ff0099;
    font-weight: normal;
    margin: 5rem 7rem 4rem 7rem;
  `;

  const Div = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin: 0rem 7rem 0rem 7rem;
  `;

  const Review = styled.div`
    width: 40%;
  `;

  return (
    <Container id='skills'>
      <Tag> &lt; how i work &gt; </Tag>
      <Div>
        <Review>
          <h1>Samanta Penilla / Laboratoria Bootcamp Manager</h1>
          <p>
            "Claudia is excellent at project management, as well as speaking and
            engaging with an audience. She can excel at speaking with clients or
            working with teams. She is an insightful person who will undoubtedly
            be aware of the details and the improvements that any project can
            have. "
          </p>
        </Review>
        <Review>
          <h1>Juan Francisco Contreras / Full-stack developer & JS coach </h1>
          <p>
            "Claudia is a disciplined person and demonstrates leadership. She
            cares about improving and she demonstrates it every day; she cares
            about understanding things in depth to carry out her tasks to the
            best of her ability. She is mindful of achieving her goals."
          </p>
        </Review>
      </Div>
      <Tag> &lt; / how i work &gt; </Tag>
    </Container>
  );
};

export default Skills;
