import { Loader, Nav } from '../components/shared';
import { Container } from '../public/styles';

interface ILoaderProps {
  children: JSX.Element;
  isLoading: boolean;
}

export const WithLoaderContainer = ({ children, isLoading }: ILoaderProps): JSX.Element => (
  <>
    <Nav></Nav>
    <Container>{isLoading ? <Loader /> : children}</Container>
  </>
);
