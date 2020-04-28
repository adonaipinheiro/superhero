import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Author = styled.span`
  font-size: 12px;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin: 60px 0 20px;
  line-height: 56px;
  color: ${shade(0.2, '#ff0000')};
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 700px;

  input {
    flex: 1;
    border: 0;
    padding: 10px;
    border-radius: 4px 0 0 4px;
    height: 40px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 160px;
    padding: 10px;
    transition: background-color 0.2s;
    height: 40px;
    border: 0;
    background: ${shade(0.2, '#ff0000')};
    border-radius: 0 4px 4px 0;
    font-size: 14px;
    color: #fff;

    &:hover {
      background: ${shade(0.4, '#ff0000')};
    }
  }
`;
