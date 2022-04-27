import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Dropdown, Row, Col, Carousel } from 'react-bootstrap';
import { Button } from '../components/style/globalStyles'
import SlideStock from '../components/SlideStock'

function ProductDetails(props) {
  console.log("aaaaaaaaa", props.match.params.id);

  const dataStockDetail = [
    {
      id: 1,
      stock_have: "มีสินค้า",
      logo_page: '/svg/logo-page.svg',
      logo_back: '/svg/logo-back.svg',
      book: '/svg/icon-book.svg',
      nameBook: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
      price_discount: "THB599.00",
      normal_price: "THB499.00",
      hover: false,
      review: 4,
      author: "โชนัมจู",
      publisher: "Piccolo",
      category: "วรรณกรรม เรื่องสั้น",
      product_type: "Books",
      barcode: "9786161840488",
      detail1: "ก่อนที่ชีวิตของเด็กสาววัยย่างสิบหกปีทั้งสี่คนจะได้สัมผัสกับความหวานหอมจากผลไม้รสชาติที่สุดในชีวิต พวกเธอจะต้องต่อสู้กับความจริงปวดที่ค่อยๆ กัดเซาะจิตใจและผ่านพ้นช่วงชีวิตซึ่งเต็มไปด้วยความยากลำบากนานา",
      detail2: `ทั้งความคิดที่ว่าตัวเองโดดเดี่ยว แม้อยู่ในกลุ่มเพื่อนที่เหมือนจะรักกันดี หรือแม้จะมีครอบครัวที่พร้อมหน้า ความรู้สึกที่ว่าไม่มีใครจริงใจสักคนนั้นกัดกินจิตใจทีละน้อยจนก่อเกิดความหวาดระแวงขึ้น ตอนนี้พวกเธอจึงทำได้เพียงพยายามในแบบของตนเอง เพื่อผ่านพ้นความไม่คุ้นเคยที่ยากเข็ญไปให้ได้ ไม่ว่าวิธีเหล่านั้นจะถูกหรือผิด... แล้ววันหนึ่งเมื่อถึงเวลาอาจจะไม่ทั้งหมด แต่อย่างน้อยก็จะมีหนึ่งคนที่พูดออกมาได้อย่างเต็มปากเต็มคำว่า นี่เป็นผลไม้อร่อยที่สุดเท่าที่ฉันเคยกินมาตั้งแต่เกิดเลย`

    },
    {
      id: 2,
      stock_have: "มีสินค้า",
      logo_page: '/svg/logo-page.svg',
      logo_back: '/svg/logo-back.svg',
      book: '/svg/icon-book.svg',
      nameBook: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
      price_discount: "THB599.00",
      normal_price: "THB499.00",
      hover: false,
      review: 4,
      author: "โชนัมจู",
      publisher: "Piccolo",
      category: "วรรณกรรม เรื่องสั้น",
      product_type: "Books",
      barcode: "9786161840488",
      detail1: "ก่อนที่ชีวิตของเด็กสาววัยย่างสิบหกปีทั้งสี่คนจะได้สัมผัสกับความหวานหอมจากผลไม้รสชาติที่สุดในชีวิต พวกเธอจะต้องต่อสู้กับความจริงปวดที่ค่อยๆ กัดเซาะจิตใจและผ่านพ้นช่วงชีวิตซึ่งเต็มไปด้วยความยากลำบากนานา",
      detail2: `ทั้งความคิดที่ว่าตัวเองโดดเดี่ยว แม้อยู่ในกลุ่มเพื่อนที่เหมือนจะรักกันดี หรือแม้จะมีครอบครัวที่พร้อมหน้า ความรู้สึกที่ว่าไม่มีใครจริงใจสักคนนั้นกัดกินจิตใจทีละน้อยจนก่อเกิดความหวาดระแวงขึ้น ตอนนี้พวกเธอจึงทำได้เพียงพยายามในแบบของตนเอง เพื่อผ่านพ้นความไม่คุ้นเคยที่ยากเข็ญไปให้ได้ ไม่ว่าวิธีเหล่านั้นจะถูกหรือผิด... แล้ววันหนึ่งเมื่อถึงเวลาอาจจะไม่ทั้งหมด แต่อย่างน้อยก็จะมีหนึ่งคนที่พูดออกมาได้อย่างเต็มปากเต็มคำว่า นี่เป็นผลไม้อร่อยที่สุดเท่าที่ฉันเคยกินมาตั้งแต่เกิดเลย`
    },
    {
      id: 3,
      stock_have: "มีสินค้า",
      logo_page: '/svg/logo-page.svg',
      logo_back: '/svg/logo-back.svg',
      book: '/svg/icon-book.svg',
      nameBook: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
      price_discount: "THB599.00",
      normal_price: "THB499.00",
      hover: false,
      review: 4,
      author: "โชนัมจู",
      publisher: "Piccolo",
      category: "วรรณกรรม เรื่องสั้น",
      product_type: "Books",
      barcode: "9786161840488",
      detail1: "ก่อนที่ชีวิตของเด็กสาววัยย่างสิบหกปีทั้งสี่คนจะได้สัมผัสกับความหวานหอมจากผลไม้รสชาติที่สุดในชีวิต พวกเธอจะต้องต่อสู้กับความจริงปวดที่ค่อยๆ กัดเซาะจิตใจและผ่านพ้นช่วงชีวิตซึ่งเต็มไปด้วยความยากลำบากนานา",
      detail2: `ทั้งความคิดที่ว่าตัวเองโดดเดี่ยว แม้อยู่ในกลุ่มเพื่อนที่เหมือนจะรักกันดี หรือแม้จะมีครอบครัวที่พร้อมหน้า ความรู้สึกที่ว่าไม่มีใครจริงใจสักคนนั้นกัดกินจิตใจทีละน้อยจนก่อเกิดความหวาดระแวงขึ้น ตอนนี้พวกเธอจึงทำได้เพียงพยายามในแบบของตนเอง เพื่อผ่านพ้นความไม่คุ้นเคยที่ยากเข็ญไปให้ได้ ไม่ว่าวิธีเหล่านั้นจะถูกหรือผิด... แล้ววันหนึ่งเมื่อถึงเวลาอาจจะไม่ทั้งหมด แต่อย่างน้อยก็จะมีหนึ่งคนที่พูดออกมาได้อย่างเต็มปากเต็มคำว่า นี่เป็นผลไม้อร่อยที่สุดเท่าที่ฉันเคยกินมาตั้งแต่เกิดเลย`
    },
    {
      id: 4,
      stock_have: "มีสินค้า",
      logo_page: '/svg/logo-page.svg',
      logo_back: '/svg/logo-back.svg',
      book: '/svg/icon-book.svg',
      nameBook: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
      price_discount: "THB599.00",
      normal_price: "THB499.00",
      hover: false,
      review: 4,
      author: "โชนัมจู",
      publisher: "Piccolo",
      category: "วรรณกรรม เรื่องสั้น",
      product_type: "Books",
      barcode: "9786161840488",
      detail1: "ก่อนที่ชีวิตของเด็กสาววัยย่างสิบหกปีทั้งสี่คนจะได้สัมผัสกับความหวานหอมจากผลไม้รสชาติที่สุดในชีวิต พวกเธอจะต้องต่อสู้กับความจริงปวดที่ค่อยๆ กัดเซาะจิตใจและผ่านพ้นช่วงชีวิตซึ่งเต็มไปด้วยความยากลำบากนานา",
      detail2: `ทั้งความคิดที่ว่าตัวเองโดดเดี่ยว แม้อยู่ในกลุ่มเพื่อนที่เหมือนจะรักกันดี หรือแม้จะมีครอบครัวที่พร้อมหน้า ความรู้สึกที่ว่าไม่มีใครจริงใจสักคนนั้นกัดกินจิตใจทีละน้อยจนก่อเกิดความหวาดระแวงขึ้น ตอนนี้พวกเธอจึงทำได้เพียงพยายามในแบบของตนเอง เพื่อผ่านพ้นความไม่คุ้นเคยที่ยากเข็ญไปให้ได้ ไม่ว่าวิธีเหล่านั้นจะถูกหรือผิด... แล้ววันหนึ่งเมื่อถึงเวลาอาจจะไม่ทั้งหมด แต่อย่างน้อยก็จะมีหนึ่งคนที่พูดออกมาได้อย่างเต็มปากเต็มคำว่า นี่เป็นผลไม้อร่อยที่สุดเท่าที่ฉันเคยกินมาตั้งแต่เกิดเลย`
    },
    {
      id: 5,
      stock_have: "มีสินค้า",
      logo_page: '/svg/logo-page.svg',
      logo_back: '/svg/logo-back.svg',
      book: '/svg/icon-book.svg',
      nameBook: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
      price_discount: "THB599.00",
      normal_price: "THB499.00",
      hover: false,
      review: 4,
      author: "โชนัมจู",
      publisher: "Piccolo",
      category: "วรรณกรรม เรื่องสั้น",
      product_type: "Books",
      barcode: "9786161840488",
      detail1: "ก่อนที่ชีวิตของเด็กสาววัยย่างสิบหกปีทั้งสี่คนจะได้สัมผัสกับความหวานหอมจากผลไม้รสชาติที่สุดในชีวิต พวกเธอจะต้องต่อสู้กับความจริงปวดที่ค่อยๆ กัดเซาะจิตใจและผ่านพ้นช่วงชีวิตซึ่งเต็มไปด้วยความยากลำบากนานา",
      detail2: `ทั้งความคิดที่ว่าตัวเองโดดเดี่ยว แม้อยู่ในกลุ่มเพื่อนที่เหมือนจะรักกันดี หรือแม้จะมีครอบครัวที่พร้อมหน้า ความรู้สึกที่ว่าไม่มีใครจริงใจสักคนนั้นกัดกินจิตใจทีละน้อยจนก่อเกิดความหวาดระแวงขึ้น ตอนนี้พวกเธอจึงทำได้เพียงพยายามในแบบของตนเอง เพื่อผ่านพ้นความไม่คุ้นเคยที่ยากเข็ญไปให้ได้ ไม่ว่าวิธีเหล่านั้นจะถูกหรือผิด... แล้ววันหนึ่งเมื่อถึงเวลาอาจจะไม่ทั้งหมด แต่อย่างน้อยก็จะมีหนึ่งคนที่พูดออกมาได้อย่างเต็มปากเต็มคำว่า นี่เป็นผลไม้อร่อยที่สุดเท่าที่ฉันเคยกินมาตั้งแต่เกิดเลย`
    },

  ]

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

  const [data, setData] = useState({})

  useEffect(() => {
    getStockDetailById(props.match.params.id);
  }, []);


  const getStockDetailById = async (id) => {
    let dataDetail = {}
    dataStockDetail.filter((item, index) => {
      if (item.id == id) {
        dataDetail = item
        setData(dataDetail)
      }
    })
  };

  console.log("data", data);

  return (
    <div className="bg-gray-light ">
      <section className="py-5 fixed-footer border-bottom">
        <Container >
          <Row>
            <Col lg={5} md={12} sm={12} xs={12} >
              <div className="">
                <img className="" src={data.book} />
              </div>
              <div className="mt-4">
                <img className="mr-4" src={data.logo_page} />
                <img className="" src={data.logo_back} />
              </div>
            </Col>

            <Col lg={7} md={12} sm={12} xs={12}  >
              <div className="d-flex ">
                <span className="text-normal-price font24">{data.nameBook}</span>
              </div>
              <div className="py-4 text-detail font18 ">
                <p className="mb-0">ผู้เขียน : {data.author}</p>
                <p className="mb-0">สำนักพิมพ์ :{data.publisher}</p>
                <p className="mb-0">หมวดหมู่ : {data.category}</p>
                <p className="mb-0">ประเภทของสินค้า :{data.product_type}</p>
                <p className="mb-0">บาร์โค้ด :{data.barcode}</p>
              </div>

              <div className="py-4 d-flex ">
                <span className="text-normal-price font26 mr-2">{data.normal_price}</span>
                <span className="text-discount font18 ">{data.price_discount}</span>
              </div>
              <div className="mt-4 ">
                <Button bg="#0156FF" color="#FFFFFF" border_radius="50px" className="mr-2" width="209px" height="50px">
                  <span className="font14">Add</span>
                </Button>
                <Button bg="#F2994A" color="#FFFFFF" border_radius="50px" className="" width="209px" height="50px">
                  <span className="font14"> <img className="mr-4" src={"/svg/icon-hart.svg"} />Wishlist</span>
                </Button>
              </div>
              <div className="py-4 text-detail font18 ">
                <span className="mb-0">แชร์ : </span>
                <img className="mr-4" src={"/svg/channal.svg"} />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="pt-5">
          <span className="text-normal-price font14 btn-active mr-4">เกี่ยวกับสินค้า</span>
          <span className="text-gray-100 font14">รายละเอียด</span>
        </Container>
      </section>
      <section className='my-5'>
        <Container className="mt-4">
          <div className="font16">
            <span className="text-normal-price  mr-2"> รายละเอียด :</span>
            <span className="text-detail ">{data.nameBook}</span>
          </div>
          <div className="mt-4 font16">
            <span className="text-gray-70">{data.detail1}</span>
          </div>
          <div className="mt-4 font16">
            <span className="text-gray-70">{data.detail2}</span>
          </div>
        </Container>
      </section>

      <section className='py-5'>
        <Container >
          <div className='d-flex justify-content-between'>
            <span className='text-normal-price font22'>
              สินค้าที่เกี่ยวข้อง
            </span>
            <span className='text-line font13'>
              ดูสินค้าทั้งหมด
            </span>
          </div>
          <div className='mt-2'>
            <SlideStock listStock={listStock} />
          </div>
        </Container>
      </section>

    </div>


  )
}

export default ProductDetails