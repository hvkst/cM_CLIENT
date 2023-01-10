import { PaperwithPadding, Container } from './SimplePaper.style';

export default function SimplePaper({ children }) {
  return (
    <Container>
      <PaperwithPadding elevation={5}>{children}</PaperwithPadding>
    </Container>
  );
}
