import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-0.5 border-t bg-white">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">

        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full ml-auto">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};

// max-w-screen-2xl => it ensures that in desktop devices there is a limit to how far we can expand , it helps stops expanding at a certain point
