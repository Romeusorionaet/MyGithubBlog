import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 3.5rem;
  margin: -8rem auto;

  background-color: ${(props) => props.theme['darkBlue-100']};
  max-width: 86.4rem;
  max-height: 21.2rem;

  display: flex;
  gap: 3.2rem;

  .wrapper_img {
    min-width: 14.8rem;
    min-height: 14.8rem;

    border-radius: 8px;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    min-height: 54rem;

    .wrapper_img {
      max-width: 14.8rem;
      max-height: 14.8rem;

      margin: 0 auto;
    }
  }
`

export const DescriptionContainer = styled.div`
  h1 {
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;

    margin-bottom: 0.8rem;
  }

  p,
  .wrapper_summary {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme['blue-300']};
  }

  .wrapper_summary {
    margin-top: 2.4rem;

    display: flex;
    gap: 2.4rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
  }

  @media (max-width: 800px) {
    .wrapper_summary {
      flex-direction: column;
    }
  }
`
