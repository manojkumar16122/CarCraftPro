"use client"
import Image from "next/image";
import React from "react";
import { Copy } from "lucide-react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ImageProps {
  id: number;
  src: string;
  text: string;
}

const GalleryPage = () => {
  const images: ImageProps[] = [
    { id: 1, src: "/1.jpg", text: "front and side view of white color SUV with steel alloy wheels" },
    { id: 2, src: "/2.jpg", text: "front view of sport looking car in grey clor" },
    { id: 3, src: "/3.jpg", text: "front and side view of yelow color ev car with alloy wheels and sunroof" },
    { id: 4, src: "/4.jpg", text: "front and side view of white color hatchback with alloy wheels" },
    { id: 5, src: "/5.jpg", text: "full view of red color sedan with alloy wheels" },
    { id: 6, src: "/6.jpg", text: "front and side view of white color SUV" },
  ];

  const handleDownload = async (id: number, src: string) => {
    try {
      const response = await fetch(src);

      if (!response.ok) {
        console.error(
          `Failed to fetch image: ${response.status} - ${response.statusText}`
        );
        return;
      }

      const imageBlob = await response.blob();

      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(imageBlob);
      downloadLink.download = `image_${id}.png`;

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      toast.success("Download started...");
    } catch (error) {
      console.error("Error during download:", error);
    }
  };

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.info(`Prompt  ${text} copied!`);
  };

  return (
    <div className="flex items-center mt-72 md:mt-16 lg:mt-0 justify-center h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-10 p-4 sm:p-10 ">
        {images.map((image) => (
          <div key={image.id} className="relative group">
            <Image
              src={image.src}
              alt={`Image ${image.id}`}
              className="object-cover w-full h-48 lg:w-[400px] md:w-[350px] md:h-[300px]"
              width={512}
              height={512}
            />
            <div className="absolute top-0 left-0 w-full h-48 lg:w-[400px] md:w-[350px] md:h-[300px] flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="object-cover absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-white text-center p-4 rounded">
                  <Button
                    onClick={() => handleDownload(image.id, image.src)}
                    className="absolute w-8 h-8 top-2 right-2 bg-transparent hover:bg-black hover:text-white px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    variant="outline"
                  >
                    <Download />
                  </Button>
                  <button onClick={() => handleCopyText(image.text)}>
                    <Copy className="w-16 h-16" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
