import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  position: relative;
  top: 20%;
  width: 100%;
`;


export const Form = styled.form`

  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid  #4573c4;
  border-radius: 8px;
  padding: 5px;
  padding-bottom: 10px;

  legend {
    font-size: 1.5rem;
    color: #FFFFFF;
    background-color:  #4573c4;
    text-align: center;
    margin-bottom: 10px;
    padding: 0px;
  }
`;

export const Input = styled.input`
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #4573c4;
  width: 100%; 
`;

export const Select = styled.select`
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #4573c4;
  width: 100%; 
  margin-right: 0; 
  
`;

export const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2px;
  color: #000;
  font-size: 1rem;
  margin-left: 5px;
`;


export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 1rem;
`;

export const Button = styled.button`
  margin: 0 10px;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.color === 'green' ? '#70ac39' : props.color === 'yellow' ? '#fec000' : '#0077cc'};
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  font-size: 0.8rem;
`;