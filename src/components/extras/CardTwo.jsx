import React from 'react';
import styled from 'styled-components';

function CardTwo({ title, sub, ainfo, src, srcTwo, website }) {
  return (
    <Outer>
      <ImageLink href={website} target='_blank' rel='noreferrer'>
        <Image
          src={src}
          alt={`${title} exterior`}
          onMouseOver={(e) => (e.currentTarget.src = srcTwo)}
          onFocus={(e) => (e.currentTarget.src = srcTwo)}
          onMouseOut={(e) => (e.currentTarget.src = src)}
          onBlur={(e) => (e.currentTarget.src = src)}
        />
      </ImageLink>
      <Details>
        <Subtitle>{sub}</Subtitle>
        <Title>{title}</Title>
        <Address>{ainfo}</Address>
        <Website href={website} target='_blank' rel='noreferrer'>
          Visit Community Site →
        </Website>
      </Details>
    </Outer>
  );
}

export default CardTwo;

const Outer = styled.article`
  background: ${({ theme }) => theme.main.card};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.main.border};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const ImageLink = styled.a`
  display: block;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Details = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Subtitle = styled.span`
  color: ${({ theme }) => theme.main.fonts.muted};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 1.1rem;
`;

const Title = styled.h4`
  font-size: 2rem;
  color: ${({ theme }) => theme.main.fonts.primary};
`;

const Address = styled.p`
  color: ${({ theme }) => theme.main.fonts.secondary};
  font-size: 1.4rem;
`;

const Website = styled.a`
  margin-top: 12px;
  color: ${({ theme }) => theme.main.highlight};
  font-weight: 600;
  font-size: 1.3rem;

  &:hover {
    color: ${({ theme }) => theme.main.highlightSoft};
  }
`;
