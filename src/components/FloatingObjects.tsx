import React from "react";

const FloatingElements: React.FC = () => {
  return (
    <>
      <div className="fixed top-1/4 left-4 w-16 h-16 bg-[#e0ff66] rounded-full opacity-20 animate-pulse"></div>
      <div className="fixed top-1/3 right-8 w-12 h-12 bg-[#ffd166] rounded-full opacity-30 animate-bounce"></div>
      <div className="fixed bottom-1/4 left-8 w-8 h-8 bg-[#9e8cf0] rounded-full opacity-25 animate-pulse"></div>
    </>
  );
};

export default FloatingElements;
