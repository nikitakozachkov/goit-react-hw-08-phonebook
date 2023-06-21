import styled from "@emotion/styled";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const Text = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-size: 14px;
`

export const Input = styled.input`
  width: 400px;
  padding: 4px;
  outline: 0;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
  color: #2a2a2a;
`

export const Button = styled.button`
margin-top: 4px;
width: 100px;
height: 28px;
border: 0;
border-radius: 4px;
font: inherit;
font-size: 14px;
color: #868784;
background-color: #023047;

&:hover, &:focus {
  color: #ffffff;
}
`