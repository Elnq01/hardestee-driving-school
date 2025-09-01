import Image from "next/image";
import TestImage1 from '../../../public/t1.jpg';
import TestImage2 from '../../../public/t2.jpg';
import TestImage3 from '../../../public/t3.jpg';
import TestImage4 from '../../../public/tes 1.jpg';
import TestImage5 from '../../../public/tes 2.jpg';
import { primary } from "@/colors/colors";


export default function TestImg({title}:{title:String}){
    switch(title){
        case "Solomon kane":
            // return <Image src={CourseImage1} alt="automatic" />
            // return <Card.Img variant='top' style={{height:'200px'}} src={CourseImage1.src} />
            return <Image width={0} height={0}
                        style={{
                            width:'150px',
                            height:'150px',
                            borderRadius:'50%',
                            padding:'6px', 
                            border:`2px solid ${primary}`
                        }}
                        src={TestImage1} 
                        alt='avatar testimony' />

        case "Reymond Uche":
            // return <Image src={CourseImage2} alt="High" />
            // return <Card.Img variant='top' style={{height:'200px'}} src={TestImage2.src} />
            return <Image width={0} height={0}
                        style={{
                            width:'150px',
                            height:'150px',
                            borderRadius:'50%',
                            padding:'6px', 
                            border:`2px solid ${primary}`
                        }}
                        src={TestImage2} 
                        alt='avatar testimony' />
        
        case 'Taiwo Oludipo':
            // return <Image src={CourseImage2} alt="High" />
            // return <Card.Img variant='top' style={{height:'200px'}} src={TestImage3.src} />
            return <Image width={0} height={0}
                        style={{
                            width:'150px',
                            height:'150px',
                            borderRadius:'50%',
                            padding:'6px', 
                            border:`2px solid ${primary}`
                        }}
                        src={TestImage3} 
                        alt='avatar testimony' />
                       
        case "Ken Master":
            // return <Image src={CourseImage2} alt="High" />
            // return <Card.Img variant='top' style={{height:'200px'}} src={TestImage4.src} />
            return <Image width={0} height={0}
                        style={{
                            width:'150px',
                            height:'150px',
                            borderRadius:'50%',
                            padding:'6px', 
                            border:`2px solid ${primary}`
                        }}
                        src={TestImage4} 
                        alt='avatar testimony' />
           
        default:
            // return <Image src={CourseImage3} alt="International" />
            // return <Card.Img variant='top' style={{height:'200px'}} src={TestImage5.src} />
            return <Image width={0} height={0}
                        style={{
                            width:'150px',
                            height:'150px',
                            borderRadius:'50%',
                            padding:'6px', 
                            border:`2px solid ${primary}`
                        }}
                        src={TestImage5} 
                        alt='avatar testimony' />

    }
}