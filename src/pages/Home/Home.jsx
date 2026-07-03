import Toast from "../../components/Alert/Toast/Toast"
import ContentBelow from "../../components/ContentBelow/ContentBelow"
import Footer from "../../components/Footer/Footer"
import HeroSection from "../../components/HeroSection/HeroSection"

function Home() {
  return (
    <>
      <HeroSection />
      <ContentBelow />

      <Footer />
      <Toast />
    </>
  )
}

export default Home