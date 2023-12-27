import { Navbar } from "@/components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
 import { Toaster } from "sonner";
const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <Navbar/>
      <Toaster position="bottom-right" richColors/>
      <main>
        {children}
      </main>  
    </ClerkProvider>
  );
};

export default PlatformLayout;
