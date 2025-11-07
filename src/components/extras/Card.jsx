import React from 'react';
import styled from 'styled-components';

function Card({ title, body, src, items = [] }) {
  return (
    <Outer>
      <Logo>
        <Inside src={src} alt={`${title} icon`} />
      </Logo>
      <Title>{title}</Title>
      <Body>{body}</Body>
      {items.length > 0 && (
        <List>
          {items.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      )}
    </Outer>
  );
}

export default Card;

const Outer = styled.div`
  background-color: ${({ theme }) => theme.main.card};
  border-radius: 20px;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.main.border};
  box-shadow: ${({ theme }) => theme.main.shadow};
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 320px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.main.fonts.primary};
  font-size: 2rem;
`;

const Body = styled.p`
  color: ${({ theme }) => theme.main.fonts.secondary};
`;

const Logo = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  width: 56px;
  height: 56px;
`;

const Inside = styled.img`
  height: 32px;
  width: 32px;
  filter: invert(0.05) brightness(1.2);
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 0;
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 20px;
  color: ${({ theme }) => theme.main.fonts.secondary};
  font-size: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.main.success};
  }
`;
