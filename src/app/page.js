import AboutCompany from "@/client/components/AboutCompany/AboutCompany";
import BannerMain from "@/client/components/BannerMain/BannerMain";
import ClientSuccess from "@/client/components/ClientSuccess/ClientSuccess";
import Feedback from "@/client/components/Feedback/Feedback";
import Footer from "@/client/components/Footer/Footer";
import HeaderMain from "@/client/components/Header/HeaderMain";
import HowVdeshDifferent from "@/client/components/HowVdeshDifferent/HowVdeshDifferent";
import HowWeSimplify from "@/client/components/HowWeSimplify/HowWeSimplify";
import HorizontalSection from "@/client/components/shared/HorizontalSection/HorizontalSection";
import SharedImage from "@/client/components/shared/SharedImage";
import StudyAbroad from "@/client/components/StudyAbroad.jsx/StudyAbroad";
import TreatmentAbroad from "@/client/components/TreatmentAbroad/TreatmentAbroad";
import VisaConsulting from "@/client/components/VisaConsulting/VisaConsulting";
import WhyChooseUs from "@/client/components/WhyChooseUs/WhyChooseUs";
import WorkAbroad from "@/client/components/WorkAbroad/WorkAbroad";
import { centralizeImages } from "@/client/utils/centralizeImages";


export default function Home() {
  return (
    <main className="app_main">
      {/* header */}
      <HeaderMain/>

      {/* other components */}
      <BannerMain/>

      <StudyAbroad/>

      <WorkAbroad/>

      <HorizontalSection/>

      <TreatmentAbroad/>

      <VisaConsulting/>

      <HorizontalSection/>

      <WhyChooseUs/>

      <HowVdeshDifferent/>

      {/* <HowWeSimplify/> */}

      <HorizontalSection/>

      <ClientSuccess/>

      <AboutCompany/>

      <Feedback/>

      {/* footer */}
      <Footer/>
    </main>
  );
}
