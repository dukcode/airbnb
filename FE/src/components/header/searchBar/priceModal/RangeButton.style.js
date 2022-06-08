import styled from 'styled-components';

const ButtonWrapper = styled.div`
  width: 380px;
  position: absolute;
  height: 1px;
  left: -9px;
`;

const Input = styled.input`
  width: ${(props) => props.width};
  position: absolute;
  bottom: 0px;
  ${(props) => props.position}: 0px;
  -webkit-appearance: none;
  pointer-events: none;
  ::-webkit-slider-thumb {
    pointer-events: auto;
    cursor: pointer;
  }
`;

export { ButtonWrapper, Input };
