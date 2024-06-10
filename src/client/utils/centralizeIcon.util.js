// react icon imports
import { IoLocationOutline } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaRegCircleCheck } from "react-icons/fa6";

// svg-icon

// header
import StudyIcon from "@/../../public/assets/images/topHeader/studyIcon.svg";
import WorkIcon from "@/../../public/assets/images/topHeader/workIcon.svg";
import TreatmentIcon from "@/../../public/assets/images/topHeader/treatmentIcon.svg";
import VisaIcon from "@/../../public/assets/images/topHeader/visaIcon.svg";
import AboutIcon from "@/../../public/assets/images/topHeader/aboutIcon.svg";
import TestimonialIcon from "@/../../public/assets/images/topHeader/testimonialIcon.svg";


//about-company
import PassportIcon from "@/../../public/assets/images/icons/passportIcon.svg";




export const icons = {
    locationPin: <IoLocationOutline  className="locationPinIcon"/>,
    whatsApp: <RiWhatsappFill className="whatsAppIcon"/>,
    rightArrow: <MdArrowForwardIos className="rightArrow"/>,
    upRightArrow: <FiArrowUpRight className="upRightArrow"/>,
    arrowRight: <BsArrowRight className="arrowRight"/>,
    circleCheck: <FaRegCircleCheck className="circleCheck"/>,
    like: <BiLike className="likeIcon"/>,
    dislike: <BiDislike className="dislikeIcon"/>,
    passportIcon: <PassportIcon className="passportIcon"/>


    
}


export const topHeaderMenuItems = {
    studyIcon: <studyIcon/>,
    workIcon: <WorkIcon/>,
    treatmentIcon: <TreatmentIcon/>,
    visaIcon: <VisaIcon/>,
    aboutIcon: <AboutIcon/>,
    testimonialIcon: <TestimonialIcon/>,
}