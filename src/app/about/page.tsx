import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | Iglesia Adventista del séptimo día Envigado",
  description: "Descripción de que es y que hace la Iglesia Adventista del séptimo día Envigado",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="¿Quienes somos?"
        description="Los adventistas del séptimo día tenemos la esperanza del regreso de Jesús y confiamos en la Biblia como guía y Palabra de Dios."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
