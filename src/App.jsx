import Header from "./features/navigation/Header"
import HeroSection from "./features/home/HeroSection"
import AboutSection from "./features/home/AboutSection"
import ProjectSection from "./features/project/ProjectSection"
import CertificatesSection from "./features/certificates/CertificatesSection"
import ContactSection from "./features/contact/ContactSection"

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <CertificatesSection />
      <ContactSection />

    </>
  )
}