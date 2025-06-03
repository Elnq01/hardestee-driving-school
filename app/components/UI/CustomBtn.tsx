import { Button } from "react-bootstrap";
import {offWhite2} from "../../../colors/colors";
import { FaArrowRight } from "react-icons/fa6";


type MyComponentProps = {
onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function CustomBtn({onClick, children, style}:MyComponentProps){


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