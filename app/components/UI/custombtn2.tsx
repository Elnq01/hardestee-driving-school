import { Button } from "react-bootstrap";
import BtnStyle2 from './custombtn2.module.css';
import { FaArrowRight } from "react-icons/fa6";

type MyComponentProps = {
onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function CustomBtn2({ onClick, children, style }: MyComponentProps) {
  return (
    <Button className={`${BtnStyle2.container}`} style={{ ...style }} onClick={onClick}>
      {children}
      <FaArrowRight />
    </Button>
  );
}
