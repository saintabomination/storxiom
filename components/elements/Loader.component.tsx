import styled from '@xstyled/styled-components';

const Wrap = styled.divBox`
  width: 14px;
  height: 14px;
  border: 2px solid black;
  animation: loaderNormal;
`;

const Loader = (): JSX.Element =>
  (
    <Wrap />
  );

export default Loader;
