import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {Container, Row, Col, Carousel } from 'react-bootstrap';
import { Button, Box } from '../components/style/globalStyles'



function DetailPay(props) {
    const history = useHistory();

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

    const [data, setData] = useState({})

    useEffect(() => {
        getAmountById(props.match.params.id);
    }, []);


    const getAmountById = async (id) => {
        let dataAmountDetail = {}
        dataAmount.filter((item, index) => {
            if (item.id == id) {
                dataAmountDetail = item
                setData(dataAmountDetail)
            }
        })
    };

    console.log("data", data);

    return (
        <div className="">
            <section className="py-5 fixed-footer border-bottom">
                <Container >
                    <span className="text-normal-price font32 ">ตระกร้าสินค้า</span>
                    <Row className="mt-4">
                        <Col lg={9} md={12} sm={12} xs={12} >
                            <Row>
                                <Col lg={5} md={12} sm={12} xs={12} >
                                    <span className="text-normal-price font14">สินค้า</span>
                                </Col>
                                <Col lg={2} md={12} sm={12} xs={12} >
                                    <span className="text-normal-price font14">ราคา</span>
                                </Col>
                                <Col lg={2} md={12} sm={12} xs={12} >
                                    <span className="text-normal-price font14">จำนวน</span>
                                </Col>
                                <Col lg={2} md={12} sm={12} xs={12} >
                                    <span className="text-normal-price font14">ยอดรวม</span>
                                </Col>
                                <Col lg={1} md={12} sm={12} xs={12} >
                                </Col>
                            </Row>
                            <div className='border mt-2'></div>
                            <Row className='mt-2'>
                                <Col lg={5} md={12} sm={12} xs={12} >
                                    <div className="d-flex align-items-start">
                                        <img className="" src={data.product_logo} />
                                        <span className="text-normal-price font13">{data.nameBook}</span>
                                    </div>

                                </Col>
                                <Col lg={2} md={12} sm={12} xs={12} >
                                    <span className="text-normal-price font16">THB{data.price}</span>
                                </Col>
                                <Col lg={2} md={12} sm={12} xs={12} >
                                <input type="number" id="quantity" name="quantity" min="0" className="mr-2"  />
                                   
                                </Col>
                                <Col lg={2} md={12} sm={12} xs={12} >
                                    <span className="text-normal-price font16">THB{data.total}</span>
                                </Col>
                                <Col lg={1} md={12} sm={12} xs={12} >
                                    <img className="" src={"/svg/icon-del.svg"} />
                                    <img className="mt-2" src={"/svg/icon-edit.svg"} />
                                </Col>
                            </Row>
                            <div className='border mt-4'></div>
                            <Row className='mt-4'>
                                <Button bg="#FFFFFF" color="#666666" border_radius="50px" className="mr-2" border="2px solid #666666" width="200px" height="40px"
                                onClick={() => history.push(`/home`)}
                                >
                                    <span className="font14">ซื้อสินค้าต่อไป</span>
                                </Button>
                                <Button bg="#000000" color="#FFFFFF" border_radius="50px" className="mr-2" width="200px" height="40px">
                                    <span className="font14">ล้างตระกร้าสินค้า</span>
                                </Button>
                            </Row>

                        </Col>
                        <Col lg={3} md={12} sm={12} xs={12} >
                            <Box className='p-4'>
                                <span className="text-normal-price font24 ">สรุปคำสั่งซื้อ</span>
                                <div className='d-flex justify-content-between mt-4'>
                                    <span className="text-normal-price font13 ">ยอดรวม</span>
                                    <span className="text-normal-price font13 ">THB{data.total}</span>
                                </div>
                                <div className='d-flex justify-content-between mt-2'>
                                    <span className="text-normal-price font13 ">ค่าส่ง</span>
                                    <span className="text-normal-price font13">THB{data.shipping_cost}</span>
                                </div>
                                <div className='border mt-4'></div>
                                <div className='d-flex justify-content-between mt-4'>
                                    <span className="text-normal-price font13 ">ยอดสุทธิ</span>
                                    <span className="text-normal-price font18">THB{Number(data.total) + Number(data.shipping_cost)}</span>
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <Button bg="#0156FF" color="#FFFFFF" border_radius="50px" className="mr-2" width="313px" height="50px"
                                    onClick={() => history.push(`/payment/${data.id}`)}
                                    >
                                        <span className="font14">ไปชำระเงิน</span>
                                    </Button>

                                </div>
                            </Box>
                        </Col>
                    </Row>
                </Container>
            </section>
            <style jsx="true" global="true">{`
                button, input, optgroup, select, textarea {
                width: 70px;
                height: 50px;
                background: #EBEBEB;
                border-radius: 6px;
                display: flex;
                align-items: center;
                text-align: center;
                color: #000000;
                border : 1px solid transparent;
          }  
                input[type=number]::-webkit-inner-spin-button,
                input[type=number]::-webkit-outer-spin-button {
                    opacity: 1;
                }   

            `}</style>
        </div>


    )
}

export default DetailPay