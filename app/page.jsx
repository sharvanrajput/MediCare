import Clint from "@/components/Clint"
import NewsletterCTA from "@/components/Cta"
import Footer from "@/components/Footer"
import Herosection from "@/components/Herosection"
import Review from "@/components/Review"
import Services from "@/components/Services"
import Team from "@/components/Team"

const page = () => {
  return (
    <>
      <Herosection />
      <Services />
      <Clint />
      <Team />
      <Review />
      <NewsletterCTA />
      <Footer />
    </>
  )
}

export default page