import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import "keen-slider/keen-slider.min.css"
import { Carousel, Row, Col } from 'react-bootstrap';
import { Button } from './style/globalStyles';


const Text = styled.h3`
    font-weight: 500;
    font-size: 10px;
    color: #78A962;
    font-family: 'Poppins';
    line-height: 210%;
`

const SystemRelateCard = styled.div`
    ${({ width }) => `width: ${width}`};
    ${({ height }) => `height: ${height}`};
    left: -0.08px;
    top: 0px;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
   
    padding: 0px 22px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;
    transition: transform .2s;

    &:hover {
   transform: scale(1.1);   
  }
    
`
// background: ${props => `url(${props.src || '/svg/logo.svg'}), url('/svg/logo.svg')`} ;

function SlideStock() {
  const history = useHistory();

  const [listFolder, setListFolder] = useState([])

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


  const renderStock = (data) => {
    if (data.length > 0) {
      return data.map((item, index) => (
        <Col lg={2} md={2} sm={2} xs={2} className="d-flex justify-content-center " key={index}
          onClick={() => history.push(`/product-detailsut/${item.id}`)}
        >
          <SystemRelateCard className="cursor-p py-2 " width={item.hover ?"234.73px" :"234.16px"} height={item.hover ?"355px" :"301px"}
            onMouseEnter={() => {
              item.hover = true
              setListStock([...listStock])

            }}
            onMouseLeave={() => {
              item.hover = false
              setListStock([...listStock])
            }}
          >
            <div className={item.hover ? `${index === 0 ? "ml-3" : ""} text-stock d-flex align-items-center mt-3` : `${index === 0 ? "ml-3" : ""} text-stock d-flex align-items-center`}>
              <img className="mr-2" src={"/svg/icon-check.svg"} />
              <span >{item.stock_have}</span>
            </div>
            <div className="d-flex justify-content-center  mt-2">
              <img className="text-center" src={item.logo} />
              {item.hover ?
                <Col lg={2} md={2} sm={2} xs={2} >
                  <img className="" src={"/svg/icon-stock-hart.svg"} />
                  <img className="" src={"/svg/icon-stock2.svg"} />
                </Col>
                :
                ""

              }

            </div>
            {item.hover ?
              <Button bg="#FFFFFF" color="#0156FF" border_radius="50px" border=" 2px solid #0156FF" width="160px" height="40px"
              >
                <img className="mr-2" src={"/svg/icon-stock.svg"} />
                <span className="font14">Add To Cart</span>
              </Button>
              :
              ""

            }

            <div className={`${index === 0 ? "ml-3" : ""} text-review d-flex align-items-center mt-2`}>
              <img className="" src={"/svg/star-color.svg"} />
              <img className="" src={"/svg/star-color.svg"} />
              <img className="" src={"/svg/star-color.svg"} />
              <img className="" src={"/svg/star-color.svg"} />
              <img className="mr-2" src={"/svg/star-no.svg"} />
              <span >Reviews ({item.review})</span>
            </div>
            <span className={`${index === 0 ? "ml-3" : ""} text-namebook mt-2`}>{item.nameBook}</span>
            <span className={`${index === 0 ? "ml-3" : ""} text-discount font12 mt-3`} >{item.price_discount}</span>
            <span className={`${index === 0 ? "ml-3" : ""} text-normal-price font14 mb-0`}>{item.normal_price}</span>
          </SystemRelateCard>
        </Col>

      ))
    }
  };

  return (
    <>
      <div id="main-slider" className="no-margin">
        <Carousel controls={true} indicators={false}>
          <Carousel.Item>
            <Row className="d-flex justify-content-between">
              {renderStock(listStock)}
            </Row>
          </Carousel.Item>
        </Carousel>

      </div>

    </>
  )
}

export default SlideStock

