import { Col, Row } from "react-bootstrap";
import TerminalsStyle from './terminals.module.css';
import CustomBtn from "../UI/CustomBtn";
import { BsBusFront } from "react-icons/bs";
import { FaAddressBook, FaBus, FaUser } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";


export default function Terminals(){
    return (<>
        <h4 style={{margin:'20px auto'}}>Our Terminals and Offices</h4>
        <Row className={TerminalsStyle.container}>
            <Col md={3} lg={3}>
                <div className={TerminalsStyle.terminal}>
                    <FaBus /> 
                    <p style={{marginBottom:'0px'}}>Iddo Terminal</p>
                </div>
                <div className={TerminalsStyle.terminal}>
                    <FaAddressBook />
                    <p style={{marginBottom:'0px'}}>22 Obafemi Way, Iddo. Lagos</p>
                </div>
                <div className={TerminalsStyle.terminal}>
                    <FaUser /> 
                    <p style={{marginBottom:'0px'}}>Manager: Mr Solomon </p>
                </div>
                <CustomBtn>View on Google Map</CustomBtn>
            </Col>
            <Col md={3} lg={3}>
                <div className={TerminalsStyle.terminal}>
                    <FaBus /> 
                    <p style={{marginBottom:'0px'}}>Iddo Terminal</p>
                </div>
                <div className={TerminalsStyle.terminal}>
                    <FaAddressBook />
                    <p style={{marginBottom:'0px'}}>22 Obafemi Way, Iddo. Lagos</p>
                </div>
                <div className={TerminalsStyle.terminal}>
                    <FaUser /> 
                    <p style={{marginBottom:'0px'}}>Manager: Mr Solomon </p>
                </div>
                <CustomBtn>View on Google Map</CustomBtn>
            </Col>
            <Col md={3} lg={3}>
                <div className={TerminalsStyle.terminal}>
                    <FaBus /> 
                    <p style={{marginBottom:'0px'}}>Iddo Terminal</p>
                </div>
                <div className={TerminalsStyle.terminal}>
                    <FaAddressBook />
                    <p style={{marginBottom:'0px'}}>22 Obafemi Way, Iddo. Lagos</p>
                </div>
                <div className={TerminalsStyle.terminal}>
                    <FaUser /> 
                    <p style={{marginBottom:'0px'}}>Manager: Mr Solomon </p>
                </div>
                <CustomBtn>View on Google Map</CustomBtn>
            </Col>
            <Col md={3} lg={3}>
                <div className={TerminalsStyle.terminal}>
                    <FaBus /> 
                    <p style={{marginBottom:'0px'}}>Iddo Terminal</p>
                </div>
                <div className={TerminalsStyle.terminal}>
                    <FaAddressBook />
                    <p style={{marginBottom:'0px'}}>22 Obafemi Way, Iddo. Lagos</p>
                </div>
                <div className={TerminalsStyle.terminal}>
                    <FaUser /> 
                    <p style={{marginBottom:'0px'}}>Manager: Mr Solomon </p>
                </div>
                <CustomBtn>View on Google Map</CustomBtn>
            </Col>
        </Row>
        </>
    )
}