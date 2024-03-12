import { SelectedPage, ClassType } from "@/shared/types"
import {motion, useDragControls} from "framer-motion"
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import HText from "@/shared/HText"
import Class from "./Class";
import { useEffect, useRef, useState } from "react"

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quibusdam.",
        image: image1
    },
    {
        name: "Training Classes",
        image: image2
    },
    {
        name: "Fitness Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quibusdam.",
        image: image3
    },
    {
        name: "Adventure Classes",
        image: image4
    },
    {
        name: "Ab Core Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quibusdam.",
        image: image5
    },
    {
        name: "Yoga Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quibusdam.",
        image: image6
    }
]


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurCLasses = ({setSelectedPage}: Props) => {
const controls = useDragControls();
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (carousel.current) {
        console.log(carousel.current.scrollWidth);
        // console.log(carousel.current.offsetWidth);
        setWidth(carousel.current.scrollWidth - 1000);
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);
  return (
    <section className="w-full bg-primary-100 py-40" id="ourclasses">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            transition={{duration: 0.5}}
            viewport={{once: true, amount: 0.5}}
            variants={{
                hidden: {opacity:0, x:-50},
                visible: {opacity:1, x:0}
            }}>
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className="text-lg py-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum molestiae, itaque adipisci, rem inventore nam praesentium eius laudantium quibusdam dolorem aliquid?</p>
                </div>
            </motion.div>
            <motion.div
            dragConstraints={{right: 0, left: -width}}
            dragControls={controls}
  animate={{ x: 50 }} // Adjust x animation as needed
  drag="x"
  className="mt-10 h-[353px] w-full overflow:hidden" // Set overflow to hidden for both axes
>
  <ul className="w-[2800px] whitespace-nowrap">
    {classes.map((item: ClassType, index) => (
      <Class
        key={`${item.name}-${index}`}
        {...item}
        style={{
          position: "absolute", // Make each Class item absolute-positioned
          left: `${index * 200}px`, // Adjust spacing between items if needed
          width: "200px", // Set width for each Class item (adjust as needed)
          opacity: 0, // Initially hide all Class items
          transition: "opacity 0.2s ease-in-out", // Transition for opacity change
        }}
        onDragEnter={(event) => (event.currentTarget.style.opacity = 1)} // Make dragged item fully visible
        onDragLeave={(event) => (event.currentTarget.style.opacity = 0)} // Hide other items on drag leave
      />
    ))}
  </ul>
</motion.div>
        </motion.div>
    </section>
  )
}

export default OurCLasses