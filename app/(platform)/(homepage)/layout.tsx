import { ClerkProvider } from "@clerk/nextjs";
import { Footer } from "@/components/footer";
const HomepageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>{children}</main>
   
    </>
  );
};

export default HomepageLayout;
