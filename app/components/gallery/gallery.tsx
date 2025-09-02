"use client"

import { charcoalGray2, primary } from '@/colors/colors'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import "./gallery.css";
import GalleryStyles from "./gallery.module.css";
import { Col, Row } from 'react-bootstrap';
import { Fragment } from 'react';
import GalleryMedia from './galleryMedia';

const categories = [
    {
        id:0,
        type:'video',
        source:"https://www.youtube.com/embed/uvaYu_Hu_Cs"
    },
    {
        id:1,
        type:'video',
        source:"https://www.youtube.com/embed/yLucPfk2HDs"

    },
    {
        id:2,
        type:'video',
        source:"https://www.youtube.com/embed/XUTBKxO1nQA"

    },    
    {
        id:3,
        type:'video',
        source:"https://www.youtube.com/embed/hcJYjBShWAtc"

    },
    {
        id:4,
        type:'video',
        source:"https://www.youtube.com/embed/HAABS53zgoA"

    },
    {
        id:5,
        type:'video',
        source:"https://www.youtube.com/embed/ZUrLjlVLUOE"

    }
]


// second tab data
const categories2 = [
    
    {
        id:6,
        type:'image',
        source:"https://www.youtube.com/embed/Ktyjqu470wo"

    },
    {
        id:7,
        type:'image',
        source:"https://www.youtube.com/embed/Ktyjqu470wo"

    }
]

export default function Gallery() {
  return (<Row className={GalleryStyles.container} style={{background:charcoalGray2}}>
            <div className={GalleryStyles.overlay}></div>
        <h2 className={GalleryStyles.H5} style={{color:primary}}>Gallery</h2>
        <TabGroup className="TabCont" style={{minHeight:'600px'}}>
        <TabList className="TabContList">

            <Tab as={Fragment}>
            {({ hover, selected }) => (
                <button className={`${hover && GalleryStyles.tabActiveHover} ${selected  && GalleryStyles.tabActiveHover}`}>Videoes</button>
            )}
            </Tab>
            <Tab as={Fragment}>
            {({ hover, selected }) => (
                <button className={`${hover && GalleryStyles.tabActiveHover} ${selected  && GalleryStyles.tabActiveHover}`}>Pictures</button>
            )}
            </Tab>
        </TabList>
        <TabPanels >
            <TabPanel className="Tab-panel">
                <Row>
                    {categories.map(category => <Col key={category.id} xs={12} sm={6} md={6} lg={4} xl={3} xxl={3}>
                        <GalleryMedia type={category.type} source={category.source} />
                    </Col>)}
                </Row>
            </TabPanel>
            <TabPanel>
                <Row>
                    {categories2.map(category => <Col key={category.id} xs={12} sm={6} md={6} lg={4} xl={3} xxl={3}>
                        <GalleryMedia type={category.type} source={category.source} />
                    </Col>)}
                </Row>
            </TabPanel>
        </TabPanels>
        </TabGroup>
    </Row>
  )
}