import css from 'styled-jsx/css'

export function styles() {
  return css`
    .line__container {
      width: 110%;
      margin-left: 50%;
    }

    .bubble {
      margin-top: calc(-0.5rem - 1px);
      margin-left: -0.5rem;
    }

    .bullet {
      transform: translate(2px, 2px);
    }

    button:last-child .line {
      visibility: hidden;
    }

    button:hover h6 {
      color: var(--color-main-primary);
    }

    .grid {
      grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
    }

    @media screen and (min-width: 1024px) {
      .grid {
        grid-template-columns: minmax(12rem, 1fr);
      }

      .line__container {
        width: 0.125rem;
        margin-left: -0.125rem;
        height: 5.5rem;
        margin-top: calc(-5.5rem / 2 + 0.5rem / 2);
        transform: rotate(180deg);
      }

      .bubble {
        margin-left: calc(-0.375rem - 1px);
      }
    }
  `
}
