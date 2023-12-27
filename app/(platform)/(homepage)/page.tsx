import Link from "next/link";
import localFont from "next/font/local";
import bg from "./bg2.png";
import mbg from "./mbg.jpg";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { toast } from "sonner";


const headingFont = localFont({
  src: "../../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const HomePage = () => {
  const { userId } = auth();
  let path = "/sign-in";

  if (userId) {
    path = "/chat";
  }

  return (
    <>
      <div className="overflow-hidden md:mt-36 md:pt-0 pt-14 mt-48 mb-24 items-center flex flex-col md:flex-row">       
        <div className="md:hidden absolute inset-0 z-0">
        {!userId ? (
          <Image
          src="/mbg1.jpg"
          alt="Mobile Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        ) : (
          <Image
            src="/mbg2.jpg"
            alt="Mobile Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div
          className={cn(
            "md:px-32  px-8 md:flex-1 items-center justify-center flex-col relative",
            headingFont.className
          )}
        >
          <h1 className="md:text-6xl  text-neutral-50 md:text-start text-center text-3xl md:text-neutral-800 mb-2">
            Revolutionize in designing
          </h1>
          <h1 className="md:text-3xl   text-neutral-200 md:text-start text-center text-xl md:text-neutral-700 mb-2">
            Instant AI Bliss
          </h1>
          <div
            className={cn(
              "text-sm md:text-lg  text-neutral-400 hidden md:flex md:text-neutral-600 mt-4 max-w-md md:max-w-2xl text-justify",
              textFont.className
            )}
          >
            Welcome to our world of automotive inspiration, where innovation meets design excellence. Unleash your creativity and design the car of your dreams with us
          </div>
          <div className="pt-6 text-center md:text-left">
  <Link href={path}>
    <Button className="px-5 py-5 items-center md:flex hidden rounded-full" size="sm">
      Get Started
      <ChevronsRight className="w-5 h-5" />
    </Button>
  </Link>
  <Link href={path}>
    <Button className="px-5 py-5 items-center md:hidden rounded-full" variant="secondary" size="sm">
      Get Started
      <ChevronsRight className="w-5 h-5" />
    </Button>
  </Link>
</div>

        </div>
        {!userId ? (
          <>
        <div className=" md:flex-1 px-32 hidden md:flex items-center justify-center">
          <Image src={mbg} alt="Description" width={1000} height={1000} />
        </div>
          </>
        ) : (
          <>
        <div className=" md:flex-1 px-32 hidden md:flex items-center justify-center">
          <Image src={bg} alt="Description" width={1000} height={1000} />
        </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
