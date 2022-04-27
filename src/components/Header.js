import React, { useState, useEffect,Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Button, Box,BoxRight} from '../components/style/globalStyles';
import { useHistory, useLocation } from "react-router-dom";


const Header = (props) => {
    const location = useLocation();
    const store = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();
    const [showFilter, setShowFilter] = useState(false)
    const [showSort, setShowSort] = useState(false)

    const dataAmount = [
        {
            id: 1,
            nameBook: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
            product_logo: '/svg/logo_product.svg',
            price: '499.00',
            num: '1',
            total: "499.00",
            shipping_cost: "1"

        },
    ]

    const renderTest = () => {
        return (
            <>
                <div>
                    <div>
                        <p className='text-center'>ตระกร้าของฉัน</p>
                        <p className='text-center mt-2'>2 สินค้าในตระกร้า</p>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <Button bg="#ffffff" color="#0156FF"  border="2px solid #0156FF" border_radius="50px">
                            <span className="flex items-center text-sm p-1">ดูหรือแก้ไขตระกร้าของฉัน</span>
                        </Button>
                    </div>
                    <div className="mt-4"></div>
                    <div className='text-center'>
                        <span className=''>ยอดรวม: </span>
                        <span className=''>THB499.00</span>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <Button bg="#0156FF" color="#ffffff" border="2px solid #0156FF" border_radius="50px">
                            <span className="flex items-center text-sm p-1">ไปชำระเงิน</span>
                        </Button>
                    </div>
                </div>
            </>
        )
    }

    return (
        // <React.Fragment>
        //     <ul className="nav">
        //         <li className="nav-item">
        //             <div className="nav-link" onClick={() => toLogout()}>Logout</div>
        //         </li>
        //         <li className="nav-item">
        //             <Link to="/dashboard" className="nav-link" >Dashboard</Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link to="/about" className="nav-link" >About</Link>
        //         </li>
        //         <li className="nav-item">
        //             <button className="btn" onClick={() => changeLanguage("en")}>en</button>
        //         </li>
        //         <li className="nav-item">
        //             <button className="btn" onClick={() => changeLanguage("th")}>th</button>
        //         </li>
        //     </ul>
        // </React.Fragment>
        <React.Fragment>
            <Navbar expand="lg" sticky="top" className="pb-0 flex-column px-md-0 pb-md-0 bg-white border-bottom">
                <Container className="" >
                    <Row className="w-100">
                        <Col lg={7} md={12} sm={12} className="d-flex align-items-center justify-content-between">
                            <Navbar.Collapse id="basic-navbar-nav" className="">
                                <div className="mb-0 mt-2 d-flex justify-content-lg-end justify-content-md-center justify-content-sm-center">
                                    <div className="ml-2">
                                        <Nav.Link onClick={() => history.push("/home")}>
                                            <span className="text-book"> Book</span>
                                        </Nav.Link>
                                    </div>
                                    <div className="ml-2 mt-3">
                                        <Nav.Link >
                                            <span className="text-back "> สินค้าใหม่</span>
                                        </Nav.Link>
                                    </div>
                                    <div className="ml-2 mt-3">
                                        <Nav.Link >
                                            <span className="text-back font16"> สินค้าขายดี</span>
                                        </Nav.Link>
                                    </div>
                                    <div className="ml-2 mt-3">
                                        <Nav.Link >
                                            <span className="text-back font16"> สินค้าลดราคา</span>
                                        </Nav.Link>
                                    </div>
                                    <div className="ml-2 mt-3">
                                        <Nav.Link >
                                            <span className="text-back font16"> สินค้าแนะนำ</span>
                                        </Nav.Link>
                                    </div>
                                </div>
                            </Navbar.Collapse >
                        </Col>

                        <Col lg={5} md={12} sm={12} className="text-back text-lg-right text-md-center text-sm-center pr-0">
                            <Navbar.Collapse id="basic-navbar-nav" className="">
                                <div className="font16 mb-0 mt-2 d-flex align-items-center w-100">
                                    <div className="mt-3 ml-2">
                                        <Menu as="div" className="">
                                            <Menu.Button className="bg-transition flex items-center text-sm text-gray-80 focus:outline-none">
                                                <div className="bg-transition flex items-center text-sm focus:outline-none"
                                                    onClick={() => {
                                                        setShowFilter(!showFilter)
                                                        setShowSort(false)
                                                    }}>
                                                    <BoxRight className="d-flex justify-content-center" hover_bg="#F1F1F5" focus_bg="#E2E2EA">
                                                        aaaa
                                                    </BoxRight>
                                                </div>
                                            </Menu.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="origin-top-right absolute px-1 -right-9 z-10 mt-2 w-80 rounded-lg shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item className="">
                                                        {renderTest()}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                    <div className=" mt-3 ml-2">
                                        <Nav.Link href="/ourwork" className={location.pathname === ("ourwork") ? "text-red blod" : "text-gray"}>
                                            Our Work
                                        </Nav.Link>
                                    </div>
                                    <div>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    </div>
                                </div>
                            </Navbar.Collapse >
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;