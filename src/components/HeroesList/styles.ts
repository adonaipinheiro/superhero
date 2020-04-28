import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

export const Container = styled.div`
  margin-top: 60px;
  max-width: 700px;
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const HeroCard = styled(Link)`
  background: #fff;
  display: block;
  max-width: 150px;
  border-radius: 4px;
  margin-bottom: 15px;
  text-decoration: none;
  transition: transform 0.2s;

  img {
    border-radius: 4px 4px 0 0;
    width: 150px;
    height: 200px;
    max-width: 150px;
    max-height: 200px;
    min-width: 150px;
    min-height: 200px;
  }

  div {
    margin-top: 5px;
    padding: 10px;

    strong {
      display: block;
      font-size: 20px;
      width: 120px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #000;
    }

    p {
      font-size: 12px;
      color: ${shade(0.1, '#ff0000')};
    }
  }

  &:hover {
    transform: translateX(5px) translateY(-5px) rotateY(10deg) rotateX(10deg);
  }
`;
