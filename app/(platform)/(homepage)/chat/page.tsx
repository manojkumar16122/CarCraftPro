"use client";
import React, { useEffect, useState } from "react";

const ChatPage = () => {
  const [iframeWidth, setIframeWidth] = useState(1550);
  const [iframeHeight, setIframeHeight] = useState(700);

  useEffect(() => {
    const handleResize = () => {
      const isMobile =
        window.innerWidth <= 768 ||
        window.innerWidth <= 850 ||
        window.innerWidth <= 950;
      setIframeWidth(isMobile ? window.innerWidth : 1550);
      setIframeHeight(isMobile ? window.innerHeight : 700);
    };

    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed mt-10 w-full mb-1 p-4 bg-white border-t flex flex-col items-center justify-center">
      <iframe
        seamless
        src="https://e65f58803e0bf4de62.gradio.live/"
        // Manojkumar
        width={iframeWidth}
        height={iframeHeight}
        title="Embedded Website"
      />
    </div>
  );
};

export default ChatPage;
