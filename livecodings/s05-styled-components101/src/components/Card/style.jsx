import styled from 'styled-components';

export default styled.li`
  background-color: white;

  width: 15em;
  aspect-ratio: 3 / 4;
  margin: 1em;

  & > * {
    height: 50%;
  }

  div {
    background: url(${(props) => props.bg}), url('/img/2.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
