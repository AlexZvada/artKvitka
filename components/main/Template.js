import Header from './Header';
import Footer from './Footer';
import Container from './Layout';

const MainContainer = ({children}) => {
    return (
      <>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </>
    );
}

export default MainContainer;