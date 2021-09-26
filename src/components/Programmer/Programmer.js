import React, { useState, useEffect } from 'react';
import './Programmer.css';
import Cart from '../Cart/Cart';
import ProgrammerSummary from '../ProgrammerSummary/ProgrammerSummary';

const Programmer = () => {
    const [programmers, setProgrammers] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./programmers.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data))
    }, [])

    const handleProgrammerAdded = (programmer) => {
        const existId = cart.find(addedId => addedId.id === programmer.id);
        if (existId) {
            alert("This person already added!!");
        }
        else {
            const newCart = [...cart, programmer];
            setCart(newCart)
        }
    }
    return (
        <div className="programmer-container">
            <div className="programmer">
                {
                    programmers.map(programmer => <ProgrammerSummary
                        programmer={programmer}
                        key={programmer.id}
                        handleProgrammerAdded={handleProgrammerAdded}>
                    </ProgrammerSummary>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Programmer;