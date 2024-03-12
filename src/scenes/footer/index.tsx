import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="logo" />
                <p className="my-5 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, veniam qui! Sequi laboriosam iusto veniam, consectetur eos consequuntur deserunt eum.</p>
                <p className="text-base">© Evogym All right Reserverd</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5 text-base">Mass orcri senectus</p>
                <p className="my-5 text-base">Mass orcri senectus</p>
                <p className="my-5 text-base">tg gravida id et etiam</p>
                <p className="text-base">Ullamcorper vivmus</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5 text-base">Tempus metus mattis risus volupat egaes</p>
                <p className="text-base">(333)444-5555</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer