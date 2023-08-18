import Header from './Header';
import Footer from './Footer';

const MainContainer = ({children}) => {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
}

export default MainContainer;