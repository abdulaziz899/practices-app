
import './App.css';
import { useEffect, useState } from 'react';
import FakeData from './FakeData/FakeData.json';
import UserDetails from './components/UserDetails/UserDetails';
import Cart from './components/UserDetails/Cart/Cart';

function App() {
  const [users,setUsers]=useState([]);
  const [userCart,setUserCart]=useState([]);
  useEffect(() => {
    setUsers(FakeData)
  }, [])
  const handleCartUser=(user)=>{
  console.log("object",user);
  setUserCart([...userCart,user])
}
  return (
    <div className="App">
      <div>
        <div className="userCart">
          <h1>country:{userCart.length}</h1>
            <Cart userCart={userCart} ></Cart>
        </div>
      </div>
        <div>
          <div className="userContainer">
            {
                users.map(user=> <div className="AllUsers"><UserDetails  handleCartUser={handleCartUser} key={user.id} user={user}>
                </UserDetails>
                  </div>)
            }
            
          </div>
        </div>
    </div>
  );
}

export default App;
