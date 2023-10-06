import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const AccordionItem = ({ faq }) => {
  const { title, question, answer } = faq;
  const [active, setActive] = useState(false);
  const contentEl = useRef();

  const onToggle = () => {
    setActive(!active);
  };

  const Container = styled.li`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    &.active .button {
      background-color: #42c6f0;
    }
  `;

  const Title = styled.div`
    list-style: none;
    font-weight: 700;
  `;

  const ContentContainer = styled.div`
    grid-column: span 2;
    margin-bottom: 20px;
  `;

  const AccordionButton = styled.button`
    font-size: 17px;
    background-color: #42c6f0;
    color: #fff;
    text-align: left;
    font-weight: 700;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 18px 8px;
    cursor: pointer;
    border: none;
  `;

  const AnswerWrapper = styled.div`
    padding: 0 20px;
    overflow: hidden;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    height: 0;
    overflow: hidden;

    &.open {
      height: auto;
    }
  `;

  return (
    <Container>
      <Title>{title}</Title>
      <ContentContainer>
        <AccordionButton className="button" onClick={onToggle}>
          {question}
          <span className="control">{active ? '—' : '+'}</span>
        </AccordionButton>
        <AnswerWrapper ref={contentEl} className={active ? 'open' : ''}>
          <div>{answer}</div>
        </AnswerWrapper>
      </ContentContainer>
    </Container>
  );
};

export default AccordionItem;
