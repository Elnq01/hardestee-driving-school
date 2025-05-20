import { Col, Row } from "react-bootstrap";
import TerminalsStyle from './terminals.module.css';
import CustomBtn from "../UI/CustomBtn";
import { BsBusFront } from "react-icons/bs";
import { FaAddressBook, FaBus, FaUser } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { useState } from "react";
import TerminalModal from "./terminalsModal";


const TerminalsInfo = [
    {
        id:'0',
        name:"Iddo Terminal",
        address:"22 Obafemi Way, Iddo. Lagos",
        Manager:"Mr Solomon",
        Phone:"09123465237"
    },
    {
        id:'1',
        name:"Ijora Terminal",
        address:"22 Obafemi Way, Iddo. Lagos",
        Manager:"Mr Solomon",
        Phone:"09123465237"
    },
    {
        id:'2',
        name:"Agege Terminal",
        address:"22 Obafemi Way, Iddo. Lagos",
        Manager:"Mr Solomon",
        Phone:"09123465237"
    },    
    {
        id:'3',
        name:"Iddo Terminal",
        address:"22 Obafemi Way, Iddo. Lagos",
        Manager:"Mr Solomon",
        Phone:"09123465237"
    }
]


export default function Terminals(){
    const [modalShow, setModalShow] = useState(false);
    const [terminal, setTerminal] = useState('')
    return (<>
        <TerminalModal show={modalShow} terminal={terminal} onHide={()=> setModalShow(false)} />
        <h4 style={{margin:'20px auto'}}>Our Terminals and Offices</h4>
        <Row className={TerminalsStyle.container}>
            {TerminalsInfo.map(terminal => <Col key={terminal.id} md={3} lg={3}>
                <div className={TerminalsStyle.terminal}>
                    <FaBus /> 
                    <p style={{marginBottom:'0px'}}>{terminal.name}</p>
                </div>
                <div className={TerminalsStyle.terminal}>
                    <FaAddressBook />
                    <p style={{marginBottom:'0px'}}>{terminal.address}</p>
                </div>
                <div className={TerminalsStyle.terminal}>
                    <FaUser /> 
                    <p style={{marginBottom:'0px'}}>{terminal.Manager}</p>
                </div>
                <CustomBtn 
                    onClick={()=> {
                        setModalShow(true)
                        setTerminal(terminal.name)
                    }}
                    >View on Google Map</CustomBtn>
            </Col>)}
        </Row>
        </>
    )
}