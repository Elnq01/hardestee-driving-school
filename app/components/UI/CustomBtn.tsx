import { Button } from "react-bootstrap";
import {offWhite2} from "../../../colors/colors";
import { FaArrowRight } from "react-icons/fa6";

export default function CustomBtn({onClick, children, style}){


    return (
        <Button 
            style={{...style,
                background:"transparent",
                border:`2px solid ${offWhite2}`,
                fontWeight:'bolder',
                display:'flex',
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                columnGap:'10px',
                padding:'10px 20px'
            }} 
            onClick={onClick}>
                {children}
                <FaArrowRight />
        </Button>
    )
}