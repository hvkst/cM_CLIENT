import { PaperwithPadding, Container } from './SimplePaper.style';

function SimplePaper({ children }) {
  return (
    <Container>
      <PaperwithPadding elevation={5}>{children}</PaperwithPadding>
    </Container>
  );
}
export default SimplePaper;
