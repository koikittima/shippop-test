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

    const dataStock = [
        {
            id: 1,
            stock_have: "มีสินค้า",
            logo: '/svg/logo.svg',
            nameBook: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
            price_discount: "THB599.00",
            normal_price: "THB499.00",
            hover: false,
            review: 4
        },
        {
            id: 2,
            stock_have: "มีสินค้า",
            logo: '/svg/logo.svg',
            nameBook: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
            price_discount: "THB599.00",
            normal_price: "THB499.00",
            hover: false,
            review: 4
        },
        {
            id: 3,
            stock_have: "มีสินค้า",
            logo: '/svg/logo.svg',
            nameBook: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
            price_discount: "THB599.00",
            normal_price: "THB499.00",
            hover: false,
            review: 4
        },
        {
            id: 4,
            stock_have: "มีสินค้า",
            logo: '/svg/logo.svg',
            nameBook: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
            price_discount: "THB599.00",
            normal_price: "THB499.00",
            hover: false,
            review: 4
        },
        {
            id: 5,
            stock_have: "มีสินค้า",
            logo: '/svg/logo.svg',
            nameBook: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
            price_discount: "THB599.00",
            normal_price: "THB499.00",
            hover: false,
            review: 4
        },

    ]
    const [listStock, setListStock] = useState(dataStock)

    return (
        <div className="bg-gray-light">
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
                            <SlideStock listStock={listStock} />
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
                            <SlideStock listStock={listStock} />
                        </div>
                    </Container>

                </section>

            </section>
        </div>
    );

}

export default Home;
