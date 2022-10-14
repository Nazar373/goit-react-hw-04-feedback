import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  margin: 20px;
  `

export const Item = styled.li`
  margin 10px;
  `

export const Button = styled.button`
  font-size: 18px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  width: 100px;
  height: 40px;
  :hover {
    background-color: ${p => p.theme.colors.btnHover};
  }`