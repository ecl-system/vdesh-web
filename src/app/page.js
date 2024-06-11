import AboutCompany from "@/client/components/vdesh/AboutCompany/AboutCompany";
import BannerMain from "@/client/components/vdesh/BannerMain/BannerMain";
import News from "@/client/components/vdesh/blogs/News/News";
import ClientSuccess from "@/client/components/vdesh/ClientSuccess/ClientSuccess";
import Feedback from "@/client/components/vdesh/Feedback/Feedback";
import Footer from "@/client/components/vdesh/Footer/Footer";
import HeaderMain from "@/client/components/vdesh/Header/HeaderMain";
import HowVdeshDifferent from "@/client/components/vdesh/HowVdeshDifferent/HowVdeshDifferent";
import HowWeSimplify from "@/client/components/vdesh/HowWeSimplify/HowWeSimplify";
import HorizontalSection from "@/client/components/vdesh/shared/HorizontalSection/HorizontalSection";
import SharedImage from "@/client/components/vdesh/shared/SharedImage";
import StudyAbroad from "@/client/components/vdesh/StudyAbroad.jsx/StudyAbroad";
import TreatmentAbroad from "@/client/components/vdesh/TreatmentAbroad/TreatmentAbroad";
import VisaConsulting from "@/client/components/vdesh/VisaConsulting/VisaConsulting";
import WhyChooseUs from "@/client/components/vdesh/WhyChooseUs/WhyChooseUs";
import WorkAbroad from "@/client/components/vdesh/WorkAbroad/WorkAbroad";
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

      <HowWeSimplify/>

      <HorizontalSection/>

      <ClientSuccess/>

      <AboutCompany/>

      <Feedback/>

      <News/>

      {/* footer */}
      <Footer/>
    </main>
  );
}
