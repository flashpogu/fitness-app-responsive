import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import ActionButton from "@/shared/ActionButton";
import {motion} from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphics from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quas reiciendis, ab tempora iste neque."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, necessitatibus."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quas odit odio!"
    }
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>

            {/* Header */}
        <motion.div className="md:my-5 md:w-3/5">
            <HText>MORE THAN JUST GYM</HText>
            <p className="text-base my-5">We provide world class fitness equipment, trainers and classes to get you to you ultimate fitness goals with ease. We provide true care into each and every member.</p>
        </motion.div>

        {/* Benefits */}
        <motion.div className="mt-5 items-center justify-between gap-8 md:flex"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        variants={container}>
            {benefits.map((benefit: BenefitType) => (
                <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage}/>
            ))}
        </motion.div>

        {/* Graphics and Description */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* Graphic */}
                    <img className="mx-auto" src={BenefitsPageGraphics} alt="benefits-page-graphics" />

                    {/* Descriptiom */}
                    <div>
                    {/* Title */}
                    <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                        <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, x:50},
                            visible: {opacity: 1, x: 0}
                        }}>
                            <HText>
                                MILLIONS OF HAPPY MEMBER GETTING{" "}
                                <span className="text-primary-500">FIT</span>
                            </HText>
                        </motion.div>
                    </div>
                    </div>
                    {/* Description */}

                    <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:50},
                        visible: {opacity: 1, x:0}
                    }}>
                        <p className="text-lg my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odio tenetur aliquam, ea suscipit, porro eum explicabo eos in deserunt eius odit inventore obcaecati ullam eligendi harum quia expedita. Accusamus!</p>
                        <p className="text-lg mb-5">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel provident suscipit eos necessitatibus laboriosam quo itaque voluptatibus natus iste ullam! Error asperiores nostrum quos?
                        </p>
                    </motion.div>
                        {/* Button */}
                        <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                        </div>
                    </div>
                </div>
        </motion.div>
    </section>
  )
}

export default Benefits