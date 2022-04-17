import React from 'react';
import { Container } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const Checkout = () => {
    const submitOrder = (e) => {
        e.preventDefault()
        toast.success('successfully placed the order!!')
    }
    return (
        <Container>
            <div>
                <div className='d-flex justify-content-center mt-5'>
                    <div className='from-container'>
                        <h2 className='text-center mb-4 title'>Submit order</h2>
                        <form onSubmit={submitOrder}>
                            <input type="text" name="name" placeholder='Name' required />
                            <input type="text" name="address" placeholder='Address' required />
                            <input type="tel" name="number" placeholder='Phone' required />
                            <input type="email" name="email" placeholder='Email address' required />
                            <div className='d-flex gap-3'>
                                <button type='submit' className='rounded w-100 mt-3 submit-btn fw-bold'>Procced Order</button>
                                <button className='rounded w-100 mt-3 submit-btn fw-bold' type="reset">Reset All</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position='top-center'
            />
        </Container>
    );
};

export default Checkout;