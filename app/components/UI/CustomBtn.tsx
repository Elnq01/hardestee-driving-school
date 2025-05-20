import { Button } from "react-bootstrap";

export default function CustomBtn({onClick, children}){
    return (
        <Button onClick={onClick}>{children}</Button>
    )
}