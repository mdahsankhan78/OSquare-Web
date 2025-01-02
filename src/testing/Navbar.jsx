import { useRef } from 'react'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const sectionSolutionRef = useRef(null)
  const sectionFeaturedNewsRef = useRef(null)
  const sectionAppShowcaseRef = useRef(null)
  const sectionInnovationRef = useRef(null)
  const sectionPricingRef = useRef(null)
  const sectionCustomerStoriesRef = useRef(null)
  const sectionBlogsRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-background z-10 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex space-x-4">
              <Button variant="ghost" onClick={() => scrollToSection(sectionSolutionRef)}>Solutions</Button>
              <Button variant="ghost" onClick={() => scrollToSection(sectionFeaturedNewsRef)}>Featured News</Button>
              <Button variant="ghost" onClick={() => scrollToSection(sectionAppShowcaseRef)}>App Showcase</Button>
              <Button variant="ghost" onClick={() => scrollToSection(sectionInnovationRef)}>Innovations</Button>
              <Button variant="ghost" onClick={() => scrollToSection(sectionPricingRef)}>Pricing</Button>
              <Button variant="ghost" onClick={() => scrollToSection(sectionCustomerStoriesRef)}>Customer Stories</Button>
              <Button variant="ghost" onClick={() => scrollToSection(sectionBlogsRef)}>Blogs</Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20 container mx-auto px-4">
        <section ref={sectionSolutionRef} className="min-h-screen flex items-center justify-center text-white bg-primary/100">
          <h2 className="text-4xl font-bold">Solutions</h2>
        </section>
        <section ref={sectionFeaturedNewsRef} className="min-h-screen flex items-center justify-center bg-secondary/100">
          <h2 className="text-4xl font-bold">Featured News</h2>
        </section>
        <section ref={sectionAppShowcaseRef} className="min-h-screen flex items-center justify-center text-white bg-primary/100">
          <h2 className="text-4xl font-bold">App Showcase</h2>
        </section>
        <section ref={sectionInnovationRef} className="min-h-screen flex items-center justify-center text-white bg-primary/100">
          <h2 className="text-4xl font-bold">Innovation</h2>
        </section>
        <section ref={sectionPricingRef} className="min-h-screen flex items-center justify-center bg-secondary/100">
          <h2 className="text-4xl font-bold">Pricing</h2>
        </section>
        <section ref={sectionCustomerStoriesRef} className="min-h-screen flex items-center justify-center text-white bg-primary/100">
          <h2 className="text-4xl font-bold">Customer's Stories</h2>
        </section>
        <section ref={sectionBlogsRef} className="min-h-screen flex items-center justify-center text-white bg-primary/100">
          <h2 className="text-4xl font-bold">Blogs</h2>
        </section>
      </main>
    </div>
  )
}