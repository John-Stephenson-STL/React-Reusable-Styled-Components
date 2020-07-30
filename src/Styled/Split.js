import styled from 'styled-components';

export const Split = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 20px;

  @media (max-width: 786px) {
    grid-template-columns: 1fr;
  }
`;

export const SplitTitle = styled.h1`
  font-size: 42px;
`;

export const SplitImg = styled.img`
  height: 100%;
  width: 100%;
`;