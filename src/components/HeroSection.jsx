import React from "react";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/tvlk/image/imageResource/2024/06/12/1718188327775-eea839531a5ec5b6b7a784c4e61d1ceb.png?tr=q-75')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 max-w-screen-xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
          Ditemenin.
        </h1>
        <p className="text-base md:text-lg max-w-xl mb-6 drop-shadow-sm">
          Kemanapun dan kapanpun, mau jalan-jalan dan butuh pendamping? Yuk,
          klik tombol di bawah ini dan mulai petualanganmu sekarang!
        </p>
        <Button variant="primary">Lanjutkan</Button>
      </div>
    </div>
  );
};

export default HeroSection;
