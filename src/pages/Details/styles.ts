import styled from 'styled-components'

export const DetailsContainer = styled.div`
  margin: 0 auto 5rem;
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

  @media (max-width: 800px) {
    .summary {
      margin-top: 2rem;
      flex-direction: column;
      gap: 2.2rem;
    }

    h2 {
      font-size: 2rem;
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
  a,
  li,
  code {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;

    color: ${(props) => props.theme['blue-300']};
  }

  .markdown a {
    color: ${(props) => props.theme['blue-200']};
  }

  .markdown p strong {
    color: ${(props) => props.theme['blue-100']};
  }

  .markdown h2,
  h1 {
    margin-top: 2rem;
    color: ${(props) => props.theme['blue-800']};

    font-size: 2rem;
  }

  .markdown li {
    margin-left: 1.6rem;
    margin-top: 1rem;
  }

  .markdown code {
    background-color: ${(props) => props.theme['blue-700']};
    padding: 1.6rem;

    display: flex;
    align-items: center;

    white-space: pre-wrap;
  }

  @media (max-width: 800px) {
    .markdown {
      padding: 2rem;
    }
  }
`
