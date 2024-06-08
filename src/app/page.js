import BannerMain from "@/client/components/BannerMain/BannerMain";
import Footer from "@/client/components/Footer/Footer";
import HeaderMain from "@/client/components/Header/HeaderMain";
import HowVdeshDifferent from "@/client/components/HowVdeshDifferent/HowVdeshDifferent";
import HorizontalSection from "@/client/components/shared/HorizontalSection/HorizontalSection";
import StudyAbroad from "@/client/components/StudyAbroad.jsx/StudyAbroad";
import TreatmentAbroad from "@/client/components/TreatmentAbroad/TreatmentAbroad";
import VisaConsulting from "@/client/components/VisaConsulting/VisaConsulting";
import WhyChooseUs from "@/client/components/WhyChooseUs/WhyChooseUs";
import WorkAbroad from "@/client/components/WorkAbroad/WorkAbroad";


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
      
      {/* footer */}
      <Footer/>
    </main>
  );
}
