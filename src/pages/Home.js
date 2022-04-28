import React, { useState, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SlideRelate from '../components/SlideRelate'
import SlideStock from '../components/SlideStock'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, Dropdown, Row, Col, Carousel } from 'react-bootstrap';
// const SlideStock = React.lazy(() => import('../components/slideStock'));

function Home() {
    const dispatch = useDispatch();
    const [data, setDdata] = useState(false);

    return (
        <div className="">
            <section className=" py-5 fixed-footer">
                <section>
                    <Container >
                        <SlideRelate />
                    </Container>
                </section>
                <section className='py-5'>
                    <Container >
                        <div className='d-flex justify-content-between'>
                            <span className='text-normal-price font22'>
                                สินค้าขายดี
                            </span>
                            <span className='text-line font13'>
                                ดูสินค้าขายดีทั้งหมด
                            </span>
                        </div>
                        <div className='mt-2'>
                            <SlideStock />
                        </div>
                    </Container>

                </section>

                <section className=''>
                    <Container >
                        <div className='d-flex justify-content-between'>
                            <span className='text-normal-price font22'>
                            สินค้าแนะนำ
                            </span>
                            <span className='text-line font13'>
                            ดูสินค้าขายดีทั้งหมด
                            </span>
                        </div>
                        <div className='mt-2'>
                            <SlideStock  />
                        </div>
                    </Container>

                </section>

            </section>
        </div>
    );

}

export default Home;
