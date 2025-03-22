import Image from "next/image";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <main className="w-full h-full">
        <Nav />
        <div className="md:pt-24 pt-28 w-full flex justify-center items-center p-0 h-[100vh]">
          <div className="hero-image"></div>
          {/* <img src={"/bg.jpg"} className='bg-[50%_100%] flex-col flex justify-center items-center' alt="bg" height={800} width={1350} /> */}
        </div>

        <section className="py-20">
          <h1 className="text-4xl text-gray-800 font-bold w-full pb-6 text-center tracking-wider">
            OUR BRANDS
          </h1>
          <div className="flex md:flex-row flex-col gap-8 md:gap-20 pt-10 w-fit mx-auto">
            <Image src={"/tea.png"} alt="tea" height={70} width={150} />
            <Image src={"/TOW Logo.png"} alt="tea" height={100} width={150} />
            <Image src={"/puchka.png"} alt="tea" height={100} width={140} />
          </div>
        </section>

        <section className="pt-20 md:h-screen h-[120%]">
          <div className="flex md:flex-row flex-col justify-between gap-6 md:gap-20 w-full px-6 md:px-20 coffee-bg">
            <div className="md:hidden block">
              <Image
                src={
                  "https://res.cloudinary.com/dm44jhmkp/image/upload/v1742320334/xo5rnh3tpvkraaeheabh.jpg"
                }
                alt="about"
                height={2000}
                width={3500}
                className="rounded-md hover:scale-105 transition-all"
              />
            </div>
            <div className="">
              <h1 className="py-4 md:w-[80%] font-bold tracking-wide text-lg">
                ABOUT US
              </h1>
              <p className="md:w-[80%] text-sm md:text-md tracking-wider">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                similique, accusantium obcaecati quod accusamus molestiae
                commodi consequuntur maiores aliquid ducimus ullam minima labore
                aspernatur adipisci. Esse ex doloremque accusamus magni! Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
                incidunt illo numquam, dignissimos assumenda repellendus
                doloribus quae. Sequi laborum tenetur dolore similique?Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
                facilis quaerat nam!
              </p>
            </div>
            <div className="md:block hidden">
              <Image
                src={
                  "https://res.cloudinary.com/dm44jhmkp/image/upload/v1742320334/xo5rnh3tpvkraaeheabh.jpg"
                }
                alt="about"
                height={2000}
                width={3500}
                className="rounded-md hover:scale-105 transition-all"
              />
            </div>
          </div>
        </section>

        <section className="h-screen w-full">
          <div className="md:py-20 py-6 h-full relative flex flex-col gap-4 justify-center items-center">
            <Image
              src={"https://res.cloudinary.com/dpmfaivww/image/upload/v1742637556/qtae56e7cwkkv195tzjt.png"}
              alt=""
              height={1200}
              width={1400}
              className="absolute md:block hidden"
            />
            <div className="phone-fruit md:hidden flex flex-col gap-4">
              <h1 className="md:text-[44px] text-3xl tracking-wide text-yellow-500 font-black">
                OUR GOAL
              </h1>
              <p className="md:w-[40%] w-[90%] font-extrabold text-sm md:text-md text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit quos eaque amet. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Accusamus, porro!
              </p>
            </div>
            <h1 className="md:text-[44px] md:block hidden text-2xl -mt-10 tracking-wide text-yellow-500 font-black">OUR GOAL</h1>
            <p className="md:w-[40%] md:block hidden font-semibold text-xs md:text-md text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quos eaque amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, porro!</p>
          </div>
        </section>

        <section className="h-screen">
          <div className="bottom-wrap"></div>
        </section>
      </main>
    </>
  );
}
