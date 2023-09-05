import Template from '../components/main/Template'
import Container from '../components/main/Layout'
import ItemList from '../components/productList/itemList';
import { useSelector } from 'react-redux';

const Favorires = () => {
    const {toShow} = useSelector(state=>state.data)
    const filterData = (array)=>{
        return array.filter(el => el.like)
    }
  return (
    <Template>
      <Container>
        <h1></h1>
        <ItemList data={filterData(toShow)} />
      </Container>
    </Template>
  );
};

export default Favorires;
