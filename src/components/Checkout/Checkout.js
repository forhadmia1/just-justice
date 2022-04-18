import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import handshake from '../../Assets/Image/handshaje.jpg'

const Checkout = () => {

    const submitOrder = (e) => {
        e.preventDefault()
        toast.success('successfully placed the order!!')
    }

    return (
        <Container className='d-md-flex justify-content-between mt-5 align-items-center'>
            <div className=' mb-4 mb-md-0'>
                <Card style={{ maxWidth: '500px' }}>
                    <Card.Img className='img-fluid' variant="top" src={handshake} />
                </Card>
            </div>
            <div>
                <div className='d-flex justify-content-center'>
                    <div className='from-container'>
                        <h2 className='text-center mb-4 title'>Booking the service</h2>
                        <form onSubmit={submitOrder}>
                            <input type="text" name="name" placeholder='Name' required />
                            <input type="text" name="address" placeholder='Address' required />
                            <input type="tel" name="number" placeholder='Phone' required />
                            <input type="email" name="email" placeholder='Email address' required />
                            <div className='d-flex gap-3'>
                                <button type='submit' className='rounded w-100 mt-3 submit-btn fw-bold'>Procced Checkout</button>
                                <button className='rounded w-100 mt-3 submit-btn fw-bold' type="reset">Reset All</button>
                            </div>
                        </form>
                        <ToastContainer
                            position='top-center'
                        />
                    </div>
                </div>
            </div>
        </Container >
    );
};

export default Checkout;