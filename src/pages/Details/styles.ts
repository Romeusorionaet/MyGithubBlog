import styled from 'styled-components'

export const DetailsContainer = styled.div`
  margin: 0 auto;
  max-width: 864px;
`

export const HeaderContainer = styled.header`
  margin-top: -8rem;
  background-color: ${(props) => props.theme['darkBlue-100']};

  border-radius: 10px;
  padding: 3.2rem;

  nav {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      gap: 0.8rem;

      text-decoration: none;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
      text-transform: uppercase;

      color: ${(props) => props.theme['blue-800']};
    }
  }

  h2 {
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;

    margin-top: 2rem;
    margin-bottom: 0.8rem;
  }

  .summary {
    display: flex;
    gap: 3.2rem;

    > div {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      span {
        font-size: 1.6rem;
        font-style: normal;
        line-height: 160%;

        color: ${(props) => props.theme['blue-400']};
      }
    }
  }
`

export const BodyContainer = styled.div`
  margin-top: 4rem;

  .markdown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .markdown p,
  code {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;

    color: ${(props) => props.theme['blue-300']};
  }

  .markdown p strong {
    color: ${(props) => props.theme['blue-100']};
  }

  .markdown h2 {
    margin-top: 2rem;
    color: ${(props) => props.theme['blue-800']};

    font-size: 2rem;
  }

  .markdown code {
    background-color: ${(props) => props.theme['blue-700']};
    background: blue;
    padding: 1.6rem;

    display: flex;
    align-items: center;
  }
`
