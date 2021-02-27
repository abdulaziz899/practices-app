import React from 'react';

const Cart = (props) => {
    const userCart=props.userCart;
//     let totalSalary= 0;
// for (let i = 0; i < userCart.length; i++) {
//     const user = userCart[i];
//     totalSalary= totalSalary + user.salary;
// }
const totalSalary=userCart.reduce((sum,totalSalary)=>sum+totalSalary.salary,0)
const tax =Math.round(totalSalary/10);
    return (
        <div>
            <h1>User detail </h1>
            <p>add user :{userCart.length}</p>
            <p>total salary :${totalSalary}</p>
            <p>TAX AND VAT :${tax}</p>
        </div>
    );
};

export default Cart;