import { IoLocationOutline } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";

//header svg-icon
import StudyIcon from "@/../../public/assets/images/topHeader/studyIcon.svg";
import WorkIcon from "@/../../public/assets/images/topHeader/workIcon.svg";
import TreatmentIcon from "@/../../public/assets/images/topHeader/treatmentIcon.svg";
import VisaIcon from "@/../../public/assets/images/topHeader/visaIcon.svg";
import AboutIcon from "@/../../public/assets/images/topHeader/aboutIcon.svg";
import TestimonialIcon from "@/../../public/assets/images/topHeader/testimonialIcon.svg";


export const icons = {
    locationPin: <IoLocationOutline  className="locationPinIcon"/>,
    whatsApp: <RiWhatsappFill className="whatsAppIcon"/>
    
}


export const topHeaderMenuItems = {
    studyIcon: <studyIcon/>,
    workIcon: <WorkIcon/>,
    treatmentIcon: <TreatmentIcon/>,
    visaIcon: <VisaIcon/>,
    aboutIcon: <AboutIcon/>,
    testimonialIcon: <TestimonialIcon/>
}