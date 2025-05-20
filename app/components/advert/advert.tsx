"use client"

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import CarouselImage from "./AdvertItem";
import {Button, Form, Row} from "react-bootstrap";

export default function Advert() {
  return (<Row style={{position:'relative'}}>
      <div 
        style={{
          position:'absolute', 
          zIndex:'1',
          alignSelf:'center',
          display:'flex',
          justifyContent:'flex-end',
          alignItems:'center',
          }}>
        <Form style={{background:'white',
          marginRight:'200px'}} className='p-2 pt-3 pb-3'>      
            <Form.Group className='mb-3'>
              <Form.Label>From:</Form.Label>
              <Form.Select aria-label='Default select from'>
                <option>Select a terminal</option>
                <option value="iddo">Iddo Terminal</option>
                <option value="agege">Agege Terminal</option>
                <option value="ijora">Ijora Terminal</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>To:</Form.Label>
              <Form.Select aria-label='Default select from'>
                <option>Select a terminal</option>
                <option value="iddo">Iddo Terminal</option>
                <option value="agege">Agege Terminal</option>
                <option value="ijora">Ijora Terminal</option>
              </Form.Select>
            </Form.Group>

            <Button type="submit">Submit</Button>
        </Form>
      </div>
    <Carousel style={{background:'blue'}} controls={false}>
      <Carousel.Item >
        <CarouselImage />
        {/* <Carousel.Caption style={{color:'black', position:'absolute'}}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage />
        {/* <Carousel.Caption style={{color:'black'}}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      {/* <Carousel.Item>
        <CarouselImage />
        <Carousel.Caption  style={{color:'black'}}>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>  */}
    </Carousel>
  </Row>);
}