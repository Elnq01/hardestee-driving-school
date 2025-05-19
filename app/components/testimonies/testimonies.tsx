import Carousel from 'better-react-carousel'
import ImagePng from '../../../public/testimonies 1.jpg';
import { Row } from 'react-bootstrap';
import TestimoniesStyle from './testimonies.module.css'

export default function Testimonies(){
  return (
    <Row className={TestimoniesStyle.container}>
        <h3>Testimonies</h3>
        <Carousel cols={2} rows={1} gap={10} loop>
        <Carousel.Item>
            <div  style={{display:'flex', flexDirection:'row', background:'red'}}>
                <div>
                    <img width={200} src={ImagePng.src} height={200} />
                </div>
                <div>
                    <h4>Suleiman Fatimah</h4>
                    <p>"MY ride was sweet like butter</p>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div  style={{display:'flex', flexDirection:'row', background:'red'}}>
                <div>
                    <img width={200} src={ImagePng.src} height={200} />
                </div>
                <div>
                    <h4>Suleiman Fatimah</h4>
                    <p>"MY ride was sweet like butter</p>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div  style={{display:'flex', flexDirection:'row', background:'red'}}>
                <div>
                    <img width={200} src={ImagePng.src} height={200} />
                </div>
                <div>
                    <h4>Suleiman Fatimah</h4>
                    <p>"MY ride was sweet like butter</p>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div  style={{display:'flex', flexDirection:'row', background:'red'}}>
                <div>
                    <img width={200} src={ImagePng.src} height={200} />
                </div>
                <div>
                    <h4>Suleiman Fatimah</h4>
                    <p>"MY ride was sweet like butter</p>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div  style={{display:'flex', flexDirection:'row', background:'red'}}>
                <div>
                    <img width={200} src={ImagePng.src} height={200} />
                </div>
                <div>
                    <h4>Suleiman Fatimah</h4>
                    <p>"MY ride was sweet like butter</p>
                </div>
            </div>
        </Carousel.Item>
        </Carousel>
    </Row>
  )
}