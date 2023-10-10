import styled from "@emotion/styled"

export const Container = styled.div`
  & a {
    display: inline-block;
    padding: 16px 0;
    font-size: 16px;
    color: #023047;
    text-decoration: none;
    transition: color 250ms;
  }

  & a:hover, & a:focus {
    color: #ffffff;
  }

  & a:first-of-type {
    margin-right: 24px;
  }
`