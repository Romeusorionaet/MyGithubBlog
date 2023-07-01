import styled from 'styled-components'

export const MainContainer = styled.main`
  margin: 20rem auto;
  max-width: 864px;
`

export const InputContainer = styled.div`
  .wrapper_repo {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.2rem;

    p {
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
      color: ${(props) => props.theme['blue-200']};
    }

    span {
      font-size: 1.4rem;
      font-style: normal;
      line-height: 160%;
      color: ${(props) => props.theme['blue-400']};
    }
  }

  input {
    background: none;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['blue-600']};
    background-color: ${(props) => props.theme['darkBlue-300']};
    color: ${(props) => props.theme['blue-500']};

    font-size: 1.6rem;
    font-style: normal;
    line-height: 160%;

    padding: 1.6rem;
    width: 100%;
  }

  @media (max-width: 1000px) {
    padding: 0 2rem;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.2rem;
  flex-wrap: wrap;

  margin-top: 4.8rem;

  .card {
    width: 41.6rem;
    height: 26rem;

    border-radius: 10px;
    padding: 3.2rem;
    background-color: ${(props) => props.theme['blue-700']};

    .title {
      display: flex;
      justify-content: space-between;
      align-items: start;
      gap: 2rem;

      margin-bottom: 2rem;

      h2 {
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      span {
        white-space: nowrap;
        font-size: 1.4rem;
        font-style: normal;
        line-height: 160%;
        color: ${(props) => props.theme['blue-400']};
      }
    }

    p {
      color: ${(props) => props.theme['blue-300']};
      overflow: hidden;

      font-size: 1.6rem;
      font-style: normal;
      line-height: 160%;

      display: -webkit-box; /* Exibe o conteúdo em uma caixa flexível */
      -webkit-line-clamp: 4; /* Define o número máximo de linhas exibidas */
      -webkit-box-orient: vertical; /* Define a orientação vertical das linhas */
      overflow: hidden; /* Esconde qualquer conteúdo que ultrapasse o número de linhas especificado */
      text-overflow: ellipsis; /* Adiciona reticências (...) ao final do texto cortado */
    }
  }

  @media (max-width: 800px) {
    padding: 0 0.5rem;
  }
`
