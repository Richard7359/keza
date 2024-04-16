"use client";

export default function Landing() {
  return (
    <section className="w-[100%]">
      <div className="flex justify-center">
        <div className="relative w-[100%] h-[90vh]">
          <video
            src="/keza_video_original.mp4"
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div> */}

          <div className="absolute flex justify-center items-end h-full w-full">
            <div className="bg-[#cfddf0] md:bg-white px-4 py-2 rounded-[10px]  md:opacity-[0.85] mb-4 text-center">
              <h1 className="font-bold text-black">
                Keza Education Future Lab [KEFL]
              </h1>
              <p className="font-normal text-black">
              a learning
          platform that powers young kids of 3 to 14 years of age to become <br />
          future innovators using technology .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
