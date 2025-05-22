"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavStyle from "./navigation.module.css";
import Image from 'next/image';
import Logo from "../../../public/hardestee_driving_school-removebg-preview.png";
import { charcoalGray1, charcoalGray2, offWhite1, offWhite2, primary } from '@/colors/colors';
import { CiFacebook, CiInboxOut, CiInstagram, CiTwitter, CiYoutube } from 'react-icons/ci';
import { FaLetterboxd } from 'react-icons/fa6';
import { FaEnvelope, FaPhone, FaPhoneAlt } from 'react-icons/fa';

function NavScrollExample() {
  return (<>
      <Navbar style={{background:offWhite2}}>
        <Container>
          <Nav>
            <p>Get Your First Free Online Lesson Today</p>
          </Nav>
          <Nav className='mx-auto ' 
          style={{
            columnGap:'20px', 
            justifyContent:'center', 
            alignItems:'center'}}>
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
          <Nav style={{columnGap:'10px'}}>
            <CiFacebook size={23}/>
            <CiTwitter size={23} />
            <CiInstagram size={23} />
            <CiYoutube size={23} />
          </Nav>
        </Container>
      </Navbar>
    <Navbar expand="lg" sticky='top' 
      style={{background:charcoalGray2}}>
      <Container fluid>
        <Navbar.Brand className='ml-5' href="#">
          <Image src={Logo} alt='Logo' height={40} width={40}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"> 
          <Nav className='mx-auto'>
          </Nav>
          <Nav
            className=" my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#" className={NavStyle.links} >Home</Nav.Link>
            <Nav.Link href="#" className={NavStyle.links}>Bookings</Nav.Link>
            <Nav.Link href="#" className={NavStyle.links}>Services</Nav.Link>
            <Nav.Link href="#" className={NavStyle.links}>Contact Us</Nav.Link>
            <Nav.Link href="#" className={NavStyle.links}>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavScrollExample;