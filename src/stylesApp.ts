import styled from 'styled-components'
import bgHeader from './assets/bgHeader.svg'

export const LogoContainer = styled.div`
  background-image: url(${bgHeader});
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
`
