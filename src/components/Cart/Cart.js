import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    const totalSalary = cart.reduce((previous, current) => previous + current.salary, 0)
    return (
        <div className="cart">
            <h5 style={{ color: '#3578E5' }}><span><FontAwesomeIcon icon={faUser} /></span> People Added: {cart.length}</h5>
            <h5>Total Salary: {totalSalary} <span>USD</span></h5>

            {
                cart.map(info => <div className="addUser" key={info.id}>
                    <div className="cart-info ms-4 me-4">
                        <div className="cart-img">
                            <img className="w-100 rounded-circle" src={info.img} alt="" />
                        </div>
                        <div>
                            <h6><strong></strong>{info.name}</h6>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Cart;