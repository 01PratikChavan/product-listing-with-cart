import './App.css';
import Header from './components/Header';
import ProducetList from './components/ProduceList';
import CartContextProvider from './store/cart-context';


function App() {
  return (
   <CartContextProvider>
   <Header />
    <ProducetList />
  </CartContextProvider>
  );
}

export default App;
