"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavStyle from "./navigation.module.css";
import { charcoalGray2, offWhite1, offWhite2, primary } from '@/colors/colors';
import { CiFacebook,  CiInstagram, CiTwitter, CiYoutube } from 'react-icons/ci';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Logo from '../UI/Logo';

function NavScrollExample() {
  const [navbarscrollStyle, setNavberscroll] = useState(charcoalGray2);

  useEffect(()=>{
    const scrollHandler = () => {
      if(window.scrollY > 100){
        setNavberscroll("rgba(0,0,0,0.4)")
      }else{
        setNavberscroll(charcoalGray2)
      }
    }
    window.addEventListener('scroll', scrollHandler)

    return () => window.removeEventListener('scroll', scrollHandler);
  }, [])

  return (<>
      <Navbar 
      className={NavStyle.topNav}
      style={{
        background:offWhite2
      }}
      >
          <Nav className={NavStyle.headerText}>
            <p>Get Your First Free Online Lesson Today</p>
          </Nav>
          <Nav className={`mx-auto ${NavStyle.topNavMid}`}>
            <div style={{
              display:'flex', 
              flexDirection:'row', 
              alignItems:'center',
              textAlign:'center', 
              columnGap:'10px',
              justifyContent:'center'}}>
              <p 
                style={{
                  borderRadius:'50%', 
                  background:primary, 
                   padding:'8px', 
                  color:offWhite1}}>
                <FaPhoneAlt size={15} />
              </p>
              <p>+234906547345</p>
            </div>
            <div style={{
              display:'flex', 
              flexDirection:'row', 
              alignItems:'center',
              textAlign:'center', 
              columnGap:'10px',
              justifyContent:'center'}}>
              <p 
                style={{
                  borderRadius:'50%', 
                  background:primary, 
                   padding:'8px', 
                  color:offWhite1}}>
                  <FaEnvelope size={15} />
              </p>
              <p>info@hardesteedrivingschool.com</p>
            </div>
          </Nav>
          <Nav className={NavStyle.topNavIcon}>
            <CiFacebook size={23}/>
            <CiTwitter size={23} />
            <CiInstagram size={23} />
            <CiYoutube size={23} />
          </Nav>
      </Navbar>

    <Navbar expand="lg" sticky='top' 
      style={{background:navbarscrollStyle}}>
      <Container fluid>
        <Navbar.Brand className='ml-5' href="#">
          <Logo id="nav" height={70} width={70} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" color='white' />
        <Navbar.Collapse id="navbarScroll" color='white' > 
          <Nav className='mx-auto'>
          </Nav>
          <Nav
            className=" my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="/" className={NavStyle.links} >Home</Nav.Link>
            <Nav.Link href="/allcourses" className={NavStyle.links}>Courses</Nav.Link>
            <Nav.Link href="#Services" className={NavStyle.links}>Services</Nav.Link>
            <Nav.Link href="#Contact" className={NavStyle.links}>Contact Us</Nav.Link>
            <Nav.Link href="#About" className={NavStyle.links}>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavScrollExample;