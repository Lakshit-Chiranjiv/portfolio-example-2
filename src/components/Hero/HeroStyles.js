import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;


export const Button = styled.button`
  padding: 12px 16px;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(42,205,82,1) 0%, rgba(0,212,255,1) 100%);
  color: white;
  font-size: 22px;
  font-weight: bold;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
`;