import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  height: 480px;
  width: 100%;
  display: block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.56;
  }

  ${TagContainer} {
    margin-top: 10px;
    margin-right: 8px;
  }

  .container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`
export const Infor = styled.div`
  padding: 16px;
  background-color: ${cores.preta};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
    margin-bottom: 16px;
  }

  p {
    font-size: 18px;
    margin-bottom: 16px;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
