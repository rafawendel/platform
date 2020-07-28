import css from 'styled-jsx/css';

export const makeStyles = ({
  overlayColor,
  imageSrc,
  perspective = 300,
  translate = -300
}) => css`
  .parallax__wrapper {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: ${perspective}px;
    transform-style: preserve-3d;
  }

  .parallax__section {
    position: relative;
    height: 90vh;
    max-height: 1000px;
    transform-style: inherit;
    z-index: -5;
    display: flex;
    align-items: center;
  }

  .parallax::before {
    content: '';
    height: 100vh;
    position: absolute;
    z-index: -2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0;
    border: 0;
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(${overlayColor}, ${overlayColor}), url(${imageSrc});
    transform-style: inherit;
    transform: translate3d(-10px, 0, ${translate}px)
      scale(${1 - translate / perspective});
  }

  @media (max-width: 700px) {
    .parallax::after {
      background-size: auto 100%;
    }
  }
`;
