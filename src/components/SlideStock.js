// import React, { useEffect } from "react"
// import { useKeenSlider } from "keen-slider/react"
// import styled from 'styled-components'
// import ArrowLeft from './arrowLeft'
// import ArrowRight from './arrowRight'

// import "keen-slider/keen-slider.min.css"

// const Text = styled.h3`
//     font-weight: 500;
//     font-size: 3vmin;
//     color: #FFFFFF;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
// `

// const SystemRelateCard = styled.div`
//     background: ${props => `url(${props.src || '/svg/logo.svg'}), url('/svg/logo.svg')`} ;
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
// `

// export default () => {

//   const [currentSlide, setCurrentSlide] = React.useState(0)

//   const [sliderRef, slider] = useKeenSlider({
//     slidesPerView: 4,
//     loop: true,
//     spacing: 30,
//     initial: 0,
//     slideChanged(s) {
//       setCurrentSlide(s.details().relativeSlide)
//     },
//   })

//   const gotoSystemRelate = (url) => {
//     // let urlSystem = url
//     // if (url.search("www.") >= 0) {
//     //   let updatedURL = url.replace('www.', '');
//     //   urlSystem = updatedURL
//     // }
//     // console.log('urlSystem :>> ', urlSystem);
//     window.open(url, '_blank').focus();
//   }

//   return (
//     <>
//       <div className="navigation-wrapper">
//         <div ref={sliderRef} className="keen-slider">
//           {/* {listSystemRelate.length ? listSystemRelate.map((item, index) => {
//             return <SystemRelateCard src={item.url} className={`keen-slider__slide number-slide cursor-p`} key={item.id} onClick={() => gotoSystemRelate(item.link)}>
//               <Text> {item.name}</Text>
//             </SystemRelateCard>
//           }) : ''} */}

//            <SystemRelateCard  src={"/svg/imgtest.svg"}  className={`keen-slider__slide number-slide cursor-p`} >
//               <Text> aaaaaaaaa</Text>
//             </SystemRelateCard>
//         </div>
//         {slider && (
//           <>
//             <ArrowLeft
//               onClick={(e) => e.stopPropagation() || slider.prev()}
//               disabled={currentSlide === 0}
//             />
//             <ArrowRight
//               onClick={(e) => e.stopPropagation() || slider.next()}
//               disabled={currentSlide === slider.details().size - 1}
//             />
//           </>
//         )}
//       </div>
//       {slider && (
//         <div className="dots">
//           {[...Array(slider.details().size).keys()].map((idx) => {
//             return (
//               <button
//                 key={idx}
//                 onClick={() => {
//                   slider.moveToSlideRelative(idx)
//                 }}
//                 className={"dot" + (currentSlide === idx ? " active" : "")}
//               />
//             )
//           })}
//         </div>
//       )}
//     </>
//   )
// }

// function ArrowLeft(props) {
//   const disabeld = props.disabled ? " arrow--disabled" : ""
//   return (
//     <svg
//       onClick={props.onClick}
//       className={"arrow arrow--left" + disabeld}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//     >
//       <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//     </svg>
//   )
// }

// function ArrowRight(props) {
//   const disabeld = props.disabled ? " arrow--disabled" : ""
//   return (
//     <svg
//       onClick={props.onClick}
//       className={"arrow arrow--right" + disabeld}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//     >
//       <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//     </svg>
//   )
// }


import React, { useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import "keen-slider/keen-slider.min.css"
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';


const Text = styled.h3`
    font-weight: 500;
    font-size: 10px;
    color: #78A962;
    font-family: 'Poppins';
    line-height: 210%;
`

const SystemRelateCard = styled.div`
    width: 234.16px;
    height: 301px;
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

const SystemRelateCard2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 25px;

    position: absolute;
    width: 234.73px;
    height: 355px;
    left: -0.5px;
    top: 0px;

    background: #FFFFFF;
    
`
// background: ${props => `url(${props.src || '/svg/logo.svg'}), url('/svg/logo.svg')`} ;

function SlideStock({ listStock }) {
  const history = useHistory();


  const renderListImgMoodTone = () => {
    if (listStock && listStock.length > 0) {
      return listStock.map((item, i) => {
        return (
          <div key={i}>
            <div
              onMouseEnter={() => {
                item.hover = true

              }}
              onMouseLeave={() => {
                item.hover = false
              }}
            >

              {item.hover &&
                <div className="imgPreviewBrief-img">
                  <div className="img-cameraBrief">
                    <div className="file">
                      <img className="" src={"/svg/star-color.svg"} />
                    </div>
                  </div>
                  <div className="img-cameraBrief">
                    <div className="file">
                      <img className="mr-2" src={"/svg/star-no.svg"} />
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>

        )
      })
    }
  }

  const renderStock = (data) => {
    if (data.length > 0) {
      console.log("data", data.hover);
      return data.map((item, index) => (
        <Col lg={2} md={2} sm={2} xs={2} className="d-flex justify-content-center " key={index}
        onClick={() => history.push(`/product-detailsut/${item.id}`)}
        >
          <SystemRelateCard className="cursor-p py-2 " >
            <div className={`${index === 0 ? "ml-3" : ""} text-stock d-flex align-items-center`}>
              <img className="mr-2" src={"/svg/icon-check.svg"} />
              <span >{item.stock_have}</span>
            </div>
            <div className="d-flex justify-content-center w-100 my-2">
              <img className="text-center" src={item.logo} />
            </div>
            <div className={`${index === 0 ? "ml-3" : ""} text-review d-flex align-items-center`}>
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
        <Carousel controls={true} indicators={true}>
          <Carousel.Item>
            <Row className="d-flex justify-content-between">
              {renderStock(listStock)}
            </Row>
          </Carousel.Item>
        </Carousel>

        {/* <div className="parent" onclick="">
        <a className="" href="#">San Francisco</a>
          <div className="child bg-six">
            <a className="texta" href="#">San Francisco</a>
          </div>
        </div> */}

        {/* <Col lg={2} md={2} sm={2} xs={2} className={`${index === 0 ? "ml-4" : ""} d-flex justify-content-center`} key={index}
               
>
    <SystemRelateCard className="cursor-p py-2 " >
      <div className="text-stock d-flex align-items-center ">
        <img className="mr-2" src={"/svg/icon-check.svg"} />
        <span >{item.stock_have}</span>
      </div>
      <div className="d-flex justify-content-center w-100 my-2">
        <img className="text-center" src={item.logo} />
      </div>
      <div className="text-review d-flex align-items-center">
        <img className="" src={"/svg/star-color.svg"} />
        <img className="" src={"/svg/star-color.svg"} />
        <img className="" src={"/svg/star-color.svg"} />
        <img className="" src={"/svg/star-color.svg"} />
        <img className="mr-2" src={"/svg/star-no.svg"} />
        <span >Reviews ({item.review})</span>
      </div>
      <span className="text-namebook mt-2">{item.nameBook}</span>
      <span className="text-discount font12 mt-3">{item.price_discount}</span>
      <span className="text-normal-price font14 mb-0">{item.normal_price}</span>
    </SystemRelateCard>

</Col>  */}

      </div>

    </>
  )
}

export default SlideStock

