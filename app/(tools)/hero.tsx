import Image from 'next/image'
import heroImageLight from '@/public/hero-image-light.svg'
import heroImageDark from '@/public/hero-image.svg'
import { Search, SearchIcon } from 'lucide-react'

export type HeroProps = {
  heading: string
  subheading?: string
}
const Hero = ({ heading, subheading }: HeroProps) => (
  <div className="relative h-72 rounded-xl border border-neutral-7 bg-neutral-2 dark:border-neutralDark-7 dark:bg-neutralDark-2">
    <div className="h-full p-6 lg:flex lg:items-end lg:justify-between">
      <div className="max-w-xl">
        <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight">{heading}</h2>
        {subheading && <p className="mt-5 text-lg text-neutral-11 dark:text-neutralDark-11">{subheading}</p>}
      </div>
    </div>
    <div className="absolute inset-0 xl:left-1/2">
      <div className="relative h-full w-full">
        <Image
          src={heroImageDark}
          alt="Illustration of robot"
          className="absolute inset-0 hidden aspect-[3/2] h-full w-full object-cover dark:block"
        />
        <Image
          src={heroImageLight}
          alt="Illustration of robot"
          className="absolute inset-0 aspect-[3/2] h-full w-full object-cover dark:hidden"
        />
      </div>
    </div>
  </div>
)
export default Hero
