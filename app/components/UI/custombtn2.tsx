import { Button } from "react-bootstrap";
import BtnStyle2 from './custombtn2.module.css';
import { FaArrowRight } from "react-icons/fa6";


export default function CustomBtn2({onClick, children, style}){


    return (
        <Button className={` ${BtnStyle2.container}`} style={{...style}} onClick={onClick}>
            {children}
            <FaArrowRight />
        </Button>
    )
}