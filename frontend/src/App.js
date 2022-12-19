import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from "./components/Footer";
// import Footer1 from './components/Footer1';
import Header from "./components/Header";
// import Header1 from './components/Header1';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
// import HomeScreen1 from './screens/HomeScreen1';
// import Main from './components/Main';

// constant -> reducer -> action -> store -> screen

function App() {
  return (
    <BrowserRouter>
          <Header />

            <main className="py-3">
              <Container>
                <Routes>
                  <Route path="/" exact element={ <HomeScreen/> } />

                  <Route path="/login" element={ <LoginScreen/> } />
                  <Route path="/register" element={ <RegisterScreen /> } />
                  <Route path="/profile" element={ <ProfileScreen /> } />
                  <Route path="/shipping" element={ <ShippingScreen /> } />
                  <Route path="/payment" element={ <PaymentScreen /> } />
                  <Route path="/placeorder" element={ <PlaceOrderScreen /> } />
                  <Route path="/order/:id" element={ <OrderScreen /> } />

                  <Route path="/product/:id" element={ <ProductScreen/> } />

                  <Route path="/cart">
                    <Route path=":id" element={<CartScreen />} />
                    <Route path="" element={<CartScreen />} />
                  </Route>
                  {/* <Route path="/cart/:id/" element={ <CartScreen /> } /> */}

                </Routes>
              </Container>
            </main> 
            
          <Footer />
        
    </BrowserRouter>
  );
}

export default App;



