export default function Landing() {
  return (
    <section className="w-[100%]">
      {/* <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover z-0"
        >
          <source src="/assets/kefl-video.mkv" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0"></div>
        <div className="absolute top-1/2 left-1/2 tarnsform -translate-x-1/2 -translate-y-1/2 text-white text-center md:text-left px-3 md:px-0 z-10">
          <h1 className="text-7xl font-bold">
            Welcome to Keza Education Future Lab
          </h1>
          <p className="mt-4 text-lg">
            <strong>Keza Education Future Lab [ KEFL ]</strong> is a learning
            platform that powers young kids of 3 to 14 years of age to become
            future innovators using technology such as robotics, programming and
            STEAM learning.
          </p>
        </div> */}
      <div className="flex justify-center mt-2">
        <div className="w-[95%] h-[70vh] bg-lime-300 rounded-2xl">
          <video
            autoPlay
            muted
            loop
            className="absolute w-full h-full object-cover z-0"
          >
            <source src="/images/keza_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
