// react icon imports
import { IoLocationOutline } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";

// svg-icon

// header
import StudyIcon from "@/../../public/assets/images/topHeader/studyIcon.svg";
import WorkIcon from "@/../../public/assets/images/topHeader/workIcon.svg";
import TreatmentIcon from "@/../../public/assets/images/topHeader/treatmentIcon.svg";
import VisaIcon from "@/../../public/assets/images/topHeader/visaIcon.svg";
import TestimonialIcon from "@/../../public/assets/images/topHeader/testimonialIcon.svg";

import VdeshCircleLogo from "@/../../public/assets/images/icons/vdeshCircleLogo.svg";


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
    passportIcon: <PassportIcon className="passportIcon"/>,
    vdeshCircleLogo: <VdeshCircleLogo className="vdeshCircleIcon"/>,
    star: <FaStar className="star"/>,
    arrowLeft: <IoIosArrowRoundBack className="arrowLeft"/>,
    arrowRight: <IoIosArrowRoundForward className="arrowRight"/>,
    roundArrowLeft: <IoIosArrowDropleft className="roundArrowLeft"/>,
    roundArrowRight: <IoIosArrowDropright className="roundArrowRight"/>,
    studyIcon: <StudyIcon/>,
    workIcon: <WorkIcon/>,
    treatmentIcon: <TreatmentIcon/>,
    visaIcon: <VisaIcon/>,
    aboutIcon: <IoIosInformationCircleOutline/>,
    testimonialIcon: <TestimonialIcon/>,


    
}


export const topHeaderMenuItems = {
    studyIcon: <StudyIcon/>,
    workIcon: <WorkIcon/>,
    treatmentIcon: <TreatmentIcon/>,
    visaIcon: <VisaIcon/>,
    aboutIcon: <IoIosInformationCircleOutline/>,
    testimonialIcon: <TestimonialIcon/>,
}