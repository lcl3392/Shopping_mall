import './Home.css'
import { products } from '../assets/api/data'
import Product from '../components/Product';

const Home = ({item}) => {
    return (
      <>
        <div className="inner">
        <h2> BEST </h2>
        <div className='cart-box'>
          {
            products.map(item => <Product key={item} item={item}/>)
          }
        </div>
        
        </div>
      </>
    );
};

export default Home;