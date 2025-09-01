import Image from "next/image";
import ImgSrc from '../../../public/tutor 1.jpg';
import ImgSrc2 from '../../../public/tutor 2.jpg';
import ImgSrc3 from '../../../public/tutor 3.jpg';
import ImgSrc4 from '../../../public/tutor 4.jpg';
import ImgSrc5 from '../../../public/tutor 5.jpg';

export default function TutorImg({id}:{id:String}){
    switch(id){
        case 'Adewale Joshua':
            return <Image src={ImgSrc} alt="Img Bkg" 
                    width={0}
                    height={0}
                    style={{width:'100%', height:'200px', borderRadius:'10px'}} />

        case 'Olawale Gbenga':
            return <Image src={ImgSrc2} alt="Img Bkg" 
                    width={0}
                    height={0}
                    style={{width:'100%', height:'200px', borderRadius:'10px'}} />

        case 'Bello Micheal':
            return <Image src={ImgSrc3} alt="Img Bkg" 
                    width={0}
                    height={0}
                    style={{width:'100%', height:'200px', borderRadius:'10px'}} />

        case 'Oyebola Oyebisi':
            return <Image src={ImgSrc4} alt="Img Bkg" 
                    width={0}
                    height={0}
                    style={{width:'100%', height:'200px', borderRadius:'10px'}} />

        default:
            return <Image src={ImgSrc5} alt="Img Bkg" 
                    width={0}
                    height={0}
                    style={{width:'100%', height:'200px', borderRadius:'10px'}} />
    }
}
