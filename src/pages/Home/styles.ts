import styled from 'styled-components'
import img from '../../assets/bgHeader.svg'

export const HomeContainer = styled.div`
  height: 100vh;

  .wrapper_logo {
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;

    max-width: 100%;
    height: 30rem;

    display: flex;
    justify-content: center;

    img {
      width: 14.8rem;
    }
  }

  main {
    background: gray;
    margin-top: 20rem;
  }
`
