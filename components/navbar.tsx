import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import {BadgeInfo} from "lucide-react";
import { Hint } from "@/components/hint";



export const Navbar = () => {
  const { userId } = auth();


  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
      <div className="flex items-center gap-x-4">
        <div className="transition md:flex">
          <Logo />
        </div>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        {!userId ? (
          <>
            <Button size="sm" variant="outline">
              <Link href="sign-in">Login</Link>
            </Button>
            <Button size="sm" variant="default">
              <Link href="sign-up">Get Started</Link>
            </Button>
          </>
        ) : (
          <>
            <Button size="sm" variant="ghost">
              <Link href="/">Home</Link>
            </Button>
            <Button size="sm" variant="ghost">
              <Link href="chat">Chat</Link>
            </Button>
            <Button size="sm" variant="ghost">
              <Link href="gallery">Gallery</Link>
            </Button>



            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: {
                    height: 30,
                    width: 30,
                  },
                },
              }}
            />
          </>
        )}
      </div>
    </nav>
  );
};
