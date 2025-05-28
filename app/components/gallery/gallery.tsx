"use client"

import { primary } from '@/colors/colors'
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
        source:"https://www.youtube.com/embed/Ktyjqu470wo"
    },
    {
        id:1,
        type:'video',
        source:"https://www.youtube.com/embed/Ktyjqu470wo"

    },
    {
        id:2,
        type:'video',
        source:"https://www.youtube.com/embed/Ktyjqu470wo"

    },    
    {
        id:3,
        type:'video',
        source:"https://www.youtube.com/embed/Ktyjqu470wo"

    },
    {
        id:4,
        type:'video',
        source:"https://www.youtube.com/embed/Ktyjqu470wo"

    },
    {
        id:5,
        type:'video',
        source:"https://www.youtube.com/embed/Ktyjqu470wo"

    },
    {
        id:6,
        type:'image',
        source:"https://www.youtube.com/embed/Ktyjqu470wo"

    },
    {
        id:7,
        type:'image',
        source:"https://www.youtube.com/embed/Ktyjqu470wo"

    },
]

export default function Gallery() {
  return (<Row className={GalleryStyles.container}>
        <h5 className={GalleryStyles.H5} style={{color:primary}}>Gallery</h5>
        <TabGroup className="TabCont">
        <TabList className="TabContList">

            <Tab as={Fragment}>
            {({ hover, selected }) => (
                <button className={`${hover && GalleryStyles.tabActiveHover} ${selected  && GalleryStyles.tabActiveHover}`}>Tab 1</button>
            )}
            </Tab>
            <Tab as={Fragment}>
            {({ hover, selected }) => (
                <button className={`${hover && GalleryStyles.tabActiveHover} ${selected  && GalleryStyles.tabActiveHover}`}>Tab 2</button>
            )}
            </Tab>
            <Tab as={Fragment}>
            {({ hover, selected }) => (
                <button className={`${hover && GalleryStyles.tabActiveHover} ${selected  && GalleryStyles.tabActiveHover}`}>Tab 3</button>
            )}
            </Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <Row>
                    {categories.map(category => <Col key={category.id} md={3} lg={3} xl={3} xxl={3}>
                        <GalleryMedia type={category.type} source={category.source} />
                    </Col>)}
                </Row>
            </TabPanel>
            <TabPanel>Content 2</TabPanel>
            <TabPanel>Content 3</TabPanel>
        </TabPanels>
        </TabGroup>
    </Row>
  )
}