import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import HomePageText from "@/assets/HomePageText.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import { motion } from "framer-motion"
motion

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 pb-10 pt-10 md:h-full md:pb-0">
        {/* Image and main header */}
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)} className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
            {/* main header */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* headings */}
                <motion.div className="md:-mt-20" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x: 0}
                }}>
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                            <img src={HomePageText} alt="home-page-text" />
                        </div>
                    </div>

                    <p className="text-base mt-8">
                        
Welcome to our gym! Discover top-notch facilities, expert trainers, and a vibrant community dedicated to your fitness journey. With diverse classes and cutting-edge equipment, we're here to help you achieve your goals. Join us and unleash your potential today!
                    </p>
                </motion.div >
                {/* actions */}
                <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration: 0.5}} variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x: 0}
                }} className="mt-8 flex items-center gap-8 md:justify-start">
                    <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                    
                    <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500" onClick={() => {setSelectedPage(SelectedPage.ContactUs)}} href={`#${SelectedPage.ContactUs}`}>
                        <p>Learn More</p>

                    </AnchorLink>
                </motion.div>
            </div>

            {/* image  */}
            <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                <img src={HomePageGraphic} alt="home-page-graphics" />
            </div>
        </motion.div>
        {/* Sponsors */}
        {isAboveMediumScreen && (
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div className="mx-auto w-5/6">
                        <div className="flex w-3/5 items-center gap-8 justify-between">
                            <img src={SponsorRedBull} alt="redbull-sponser" />
                            <img src={SponsorForbes} alt="redbull-forbes" />
                            <img src={SponsorFortune} alt="redbull-fortune" />
                        </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home