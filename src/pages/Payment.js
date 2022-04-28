import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Container, Row, Col } from 'react-bootstrap';
import { Button, Box, BoxPayMent } from '../components/style/globalStyles'
import InputSelect from "../components/InputSelect";
import InputText from "../components/InputText";
import InputMask from "../components/InputMask";

function Payment(props) {
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

    const initialForm = {
        firstName: "",
        lastName: "",
        country_id: "",
        country_name: "",
        address: "",
        province: "",
        district: "",
        subDistrict: "",
        zip_code: "",
        phone_number: "",
        transport: 1,
        payment_method: 1,
        count: ""
    };
    const [form, setForm] = useState(initialForm);

    const [data, setData] = useState({})

    const [countryList, setCountryLis] = useState([
        { value: "1", label: "Thailand" },
        { value: "2", label: "English" },
    ]);
    const [countrySelectValue, setCountrySelectValue] = useState(countryList[0]);


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
                    <p className="text-normal-price font32 ">ชำระเงิน</p>
                    <Row className="mt-2">
                        <Col lg={9} md={12} sm={12} xs={12} >
                            <p className="text-normal-price font14 mt-4">ที่อยู่ในการจัดส่ง</p>
                            <div className='border mt-2'></div>
                            <Row className="mt-4">
                                <Col lg={6} md={6} sm={6}>
                                    <InputText title="ชื่อ" type="text" idName="firstName"
                                        placeholder="" classLabel="normal" value={form.firstName}
                                        handleChange={(value) => {
                                            setForm({ ...form, firstName: value })
                                        }}
                                    />
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <InputText title="นามสกุล" type="text" idName="lastName"
                                        placeholder="" classLabel="normal" value={form.lastName}
                                        handleChange={(value) => {
                                            setForm({ ...form, lastName: value })
                                        }}
                                    />
                                </Col>
                                <Col lg={12} md={12} sm={12}>
                                    <InputSelect title='ประเทศ'
                                        placeholder=''
                                        classLabel="normal"
                                        selectValue={countrySelectValue} optionsList={countryList}
                                        handleChange={(value) => {
                                            setCountrySelectValue(value)
                                            setForm({ ...form, country_id: value.value, country_name: value.label })
                                        }}
                                    />
                                </Col>
                                <Col lg={12} md={12} sm={12}>
                                    <span className="mr-2">ที่อยู่</span>
                                    <span className="text-red">(บ้านเลขที่/หมู่บ้าน/หมู่ที่/ซอย/ถนน)</span>
                                    <InputText title="" type="text" idName="address" classFormGroup="mt-1"
                                        placeholder="" classLabel="normal" value={form.address}
                                        handleChange={(value) => {
                                            setForm({ ...form, address: value })
                                        }}
                                    />
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <InputText title="แขวง/ตำบล" type="text" idName="subDistrict"
                                        placeholder="" classLabel="normal" value={form.subDistrict}
                                        handleChange={(value) => {
                                            setForm({ ...form, subDistrict: value })
                                        }}
                                    />
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <InputText title="เขต/อำเภอ" type="text" idName="district"
                                        placeholder="" classLabel="normal" value={form.district}
                                        handleChange={(value) => {
                                            setForm({ ...form, district: value })
                                        }}
                                    />
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <InputText title="จังหวัด" type="text" idName="province"
                                        placeholder="" classLabel="normal" value={form.province}
                                        handleChange={(value) => {
                                            setForm({ ...form, province: value })
                                        }}
                                    />
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <InputText title="รหัสไปรษณีย์" type="text" idName="zip_code"
                                        placeholder="" classLabel="normal" value={form.zip_code}
                                        handleChange={(value) => {
                                            setForm({ ...form, zip_code: value })
                                        }}
                                    />
                                </Col>
                                <Col lg={12} md={12} sm={12}>
                                    <InputMask mask="99-9999-9999" title="เบอร์ติดต่อ (ระบุหมายเลขโทรศัพท์ เฉพราะตัวเลขเท่านั้น)" idName="phone_number"
                                        value={form.phone_number} placeholder="" classLabel="normal"
                                        handleChange={(value) =>
                                            setForm({ ...form, phone_number: value.replace(/-/g, "") })
                                        }
                                    />
                                </Col>
                            </Row>
                            <div className=' pt-4'></div>
                            <p className="text-normal-price font14 mt-4">เลือกขนส่ง</p>
                            <div className='border mt-2'></div>
                            <Row className='mt-4'>
                                <Col lg={12} md={12} sm={12} >
                                    <BoxPayMent className="p-5" border={`${form.transport == 1 ? "1px solid #0156FF" : "1px solid #CCCCCC"}`}>
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center ">
                                                <Form.Check
                                                    inline type="radio"
                                                    name="transport"
                                                    id="shippping"
                                                    value={1}
                                                    checked={form.transport == 1}
                                                    label=""
                                                    onChange={e => {
                                                        setForm({ ...form, transport: e.target.value });
                                                    }}
                                                />
                                                <span className="text-detail ml-3 font18">Free Shippping</span>
                                            </div>
                                            <span className="text-normal-price ">THB0.00</span>
                                        </div>
                                    </BoxPayMent>
                                </Col>
                                <Col lg={12} md={12} sm={12} className="mt-3" >
                                    <BoxPayMent className="p-5" border={`${form.transport == 2 ? "1px solid #0156FF" : "1px solid #CCCCCC"}`}>
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <Form.Check
                                                    inline type="radio"
                                                    name="transport"
                                                    id="kerry"
                                                    value={2}
                                                    checked={form.transport == 2}
                                                    label=""
                                                    onChange={e => {
                                                        setForm({ ...form, transport: e.target.value });
                                                    }}
                                                />
                                                <img className="ml-3" src={"/svg/icon-kerry.svg"} />
                                            </div>
                                            <span className="text-normal-price ">THB40.00</span>
                                        </div>
                                    </BoxPayMent>
                                </Col>
                            </Row>

                            <div className=' pt-4'></div>
                            <p className="text-normal-price font14 mt-4">วิธีชำระเงิน</p>
                            <div className='border mt-2'></div>
                            <Row className='mt-4'>
                                <Col lg={12} md={12} sm={12} >
                                    <BoxPayMent className="p-5" border={`${form.payment_method == 1 ? "1px solid #0156FF" : "1px solid #CCCCCC"}`}>
                                        <div className="">
                                            <div className="d-flex align-items-center">
                                                <Form.Check
                                                    inline type="radio"
                                                    name="payment_method"
                                                    id="cash"
                                                    value={1}
                                                    checked={form.payment_method == 1}
                                                    label=""
                                                    onChange={e => {
                                                        setForm({ ...form, payment_method: e.target.value });
                                                    }}
                                                />
                                                <img className="ml-3" src={"/svg/icon-cash.svg"} />
                                                <span className="text-detail ml-3 font18">Cash</span>
                                            </div>
                                        </div>
                                    </BoxPayMent>
                                </Col>
                                <Col lg={12} md={12} sm={12} className="mt-3" >
                                    <BoxPayMent className="p-5" border={`${form.payment_method == 2 ? "1px solid #0156FF" : "1px solid #CCCCCC"}`}>
                                        <div className="">
                                            <div className="d-flex align-items-center">
                                                <Form.Check
                                                    inline type="radio"
                                                    name="payment_method"
                                                    id="debit"
                                                    value={2}
                                                    checked={form.payment_method == 2}
                                                    label=""
                                                    onChange={e => {
                                                        setForm({ ...form, payment_method: e.target.value });
                                                    }}
                                                />
                                                <img className="ml-3" src={"/svg/icon-debit.svg"} />
                                                <span className="text-detail ml-3 font18">Credit/Debit</span>
                                            </div>
                                        </div>
                                    </BoxPayMent>
                                </Col>
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
                                    >
                                        <div className="d-flex justify-content-center align-items-center">
                                            <img className="mr-3" src={"/svg/icon-pay.svg"} /><span className="font14">ชำระเงิน</span>
                                        </div>

                                    </Button>

                                </div>
                            </Box>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>


    )
}

export default Payment