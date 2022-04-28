import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Transition } from '@headlessui/react'
import { Navbar, Nav, Container, Row, Col, InputGroup, Form } from 'react-bootstrap';
import { Button} from '../components/style/globalStyles';
import { useHistory, useLocation } from "react-router-dom";


const Header = (props) => {
    const location = useLocation();
    const store = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();
    const [showBasket, setShowBasket] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const dataAmount = [
        {
            id: 1,
            nameBook: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
            product_logo: '/svg/logo-test.svg',
            price: '499.00',
            num: '1',
            total: "499.00",
            shipping_cost: "1"

        },
    ]

    const initialForm = {

        zip_code: "",
    };
    const [form, setForm] = useState(initialForm);

    const renderBasketSub = (data) => {
        if (data.length > 0) {
            return data.map((item, index) => (
                <div key={index} className="m-4">
                    <div>
                        <p className='text-center text-normal-price font18'>ตระกร้าของฉัน</p>
                        <p className='text-center text-review font12 mt-2'>{item.num} สินค้าในตระกร้า</p>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <Button bg="#ffffff" color="#0156FF" border="2px solid #0156FF" border_radius="50px" width="250px" height="40px"
                            onClick={() => {
                                history.push(`/detail-pay/${item.id}`)
                                setShowBasket(false)
                            }}
                        >
                            <span className=" font14">ดูหรือแก้ไขตระกร้าของฉัน</span>
                        </Button>
                    </div>
                    <div className="mt-4 border"></div>
                    <div className="d-flex justify-content-between mt-4 ">
                        <div className='d-flex align-items-center'>
                            <span className="text-normal-price font18">{item.num}x</span>
                        </div>
                        <div className='d-flex align-items-start'>
                            <img className="" src={item.product_logo} />
                            <span className="text-normal-price font10 mt-2">{item.nameBook}</span>
                        </div>
                        <Col lg={2} md={2} sm={2} xs={2} >
                            <img className="" src={"/svg/icon-del.svg"} />
                            <img className="mt-2" src={"/svg/icon-edit.svg"} />
                        </Col>
                    </div>
                    <div className="mt-4 border"></div>
                    <div className='text-center mt-4'>
                        <span className='text-gray-100 font14'>ยอดรวม: </span>
                        <span className='text-normal-price font18'>THB{item.total}</span>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <Button bg="#0156FF" color="#ffffff" border="2px solid #0156FF" border_radius="50px" width="250px" height="40px"
                            onClick={() => {
                                history.push(`/payment/${item.id}`)
                                setShowBasket(false)
                            }}
                        >
                            <span className="font14">ไปชำระเงิน</span>
                        </Button>
                    </div>
                </div>
            ))
        }

    }

    const renderBasket = () => {
        return (
            <>
                <div className="relative w-full">
                    <div className="bg-transition d-flex align-items-center focus:outline-none"
                        onClick={() => {
                            setShowBasket(!showBasket)
                            setShowSearch(false)
                        }}>
                        <div className="d-flex justify-content-center cursor-p">
                            <img className={`${showSearch ? "mt-3" : ""}`} src={"/svg/icon-basket.svg"} />
                        </div>
                    </div>
                </div>
                <Transition
                    show={showBasket}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <div className='position-absolute px-1  mt-2 w-80 rounded-lg shadow-lg py-1 bg-white left-basket'>
                        {renderBasketSub(dataAmount)}
                    </div>

                </Transition>

            </>
        )
    }

    return (
        <React.Fragment>
            <Navbar expand="lg" sticky="top" className="pb-0 flex-column px-md-0 pb-md-0 bg-white border-bottom">
                <Container className="" >
                    <Row className="w-100">
                        <Col lg={7} md={12} sm={12} className="d-flex align-items-center justify-content-between">
                            {!showSearch &&

                                <Navbar.Collapse id="basic-navbar-nav" className="">
                                    <div className="mb-0 mt-2 d-flex justify-content-lg-end justify-content-md-center justify-content-sm-center">
                                        <div className="ml-2">
                                            <Nav.Link onClick={() => {
                                                history.push("/home")
                                                setShowBasket(false)
                                            }}>
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
                            }
                        </Col>

                        <Col lg={5} md={12} sm={12} className="text-back text-lg-right text-md-center text-sm-center pr-0">
                            <div className="font16 mb-0 mt-2 d-flex justify-content-lg-end justify-content-md-center justify-content-sm-center w-100">
                                <div className="mt-3 ml-4 d-flex align-items-center">
                                    {showSearch ?
                                        <>
                                            <input type="text" className="icon font18 px-4 mb-2" placeholder="ค้นหาสินค้า" />
                                            <img className="ml-3 cursor-p" src={"/svg/icon-dle-h.svg"}
                                                onClick={() => {
                                                    setShowSearch(!showSearch)
                                                    setShowBasket(false)
                                                }}
                                            />
                                        </>
                                        :
                                        " "
                                    }
                                </div>
                                {!showSearch &&
                                    <div className="mt-3 ml-4  d-flex align-items-center cursor-p"
                                        onClick={() => {
                                            setShowSearch(!showSearch)
                                            setShowBasket(false)
                                        }}
                                    >
                                        <img className="" src={"/svg/icon-seart.svg"}/>
                                    </div>
                                }
                                <div className="mt-3 ml-4">
                                    {renderBasket()}
                                </div>
                                <div className=" mt-3 ml-4">
                                    <img className={`${showSearch ? "mt-3" : ""}`} src={"/svg/user-test.svg"} />
                                </div>
                                <div>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <style jsx="true" global="true">{`
            .icon {
                background: url("/svg/icon-search.svg") no-repeat right, #EBEBEB ;
                background-size: 20px;
                border-radius: 31px ;
                border : 1px solid transparent;
                width: 917px;
                height: 60px;
              }
           
            `}</style>
        </React.Fragment>
    );
}

export default Header;