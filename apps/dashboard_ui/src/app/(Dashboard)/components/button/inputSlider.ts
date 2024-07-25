import styled from "styled-components";


interface SlideProps {
    value: number;
}

export const SliderInput = styled.input.attrs({ type: 'range' })<SlideProps>`
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 6px;
  width: 100%;
  border-radius: 40px;
  background: ${(props) =>
    `linear-gradient(to right, #ff5500 0%, #ff5500 ${props.value * 25}%, #fff ${props.value * 25}%, #fff 100%);`};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    filter:brightness(0.9);
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff5500 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }

  &::-webkit-slider-thumb:hover {
    box-shadow: 0 0 0 10px rgba(255,85,0, .2)
  }

  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }
`;