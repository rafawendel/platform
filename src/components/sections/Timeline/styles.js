/* styles.js */
import css from 'styled-jsx/css';

export default css`
  .timeline {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .timeline-title {
    box-sizing: border-box;
    padding: 4rem;
    text-align: center;
  }

  .timeline-wrapper {
    margin: 0 2rem;
    position: relative;
    padding: 2rem 0;
  }

  .timeline-wrapper::before {
    /* vertical line */
    content: '';
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    height: calc(100% - 6rem);
    width: 0.25rem;
    background-color: var(--gedaam-secondary, teal); /* need to further setup */
    filter: opacity(20%) grayscale(20%);
  }
`;
