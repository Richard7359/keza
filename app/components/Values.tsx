import React from "react";

const Values = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-sky-200 to-red-100 py-20">
        <h1 className="text-4xl font-bold text-center pb-10">
          <span className="text-blue-700">Our</span> Core values
        </h1>
        <div className="max-w-6xl mx-auto flex flex-col gap-10 px-5">
          <div className="flex flex-col md:flex-row bg-white   rounded-xl md:bg-transparent shadow-lg shadow-black/20 md:shadow-none gap-10">
            <div className="flex justify-center md:justify-end">
              <div className="w-[120px] h-[120px] bg-white  shadow-lg rounded-xl p-4 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-14 h-14 text-blue-950"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-md p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
              <h1 className="font-bold text-xl pb-4">1. Integrity. </h1>
              <p>
                At KEFL, integrity means ensuring honest teaching, creating a
                safe learning environment, and continually improving to provide
                your child with the best robotics and programming education.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white  md:bg-transparent  rounded-xl gap-10">
            <div className="w-full md:w-[500px] flex justify-center md:justify-end">
              <div className="w-[120px] h-[120px]  shadow-lg bg-white   md: rounded-xl md:p-4 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-14 h-14 text-blue-950"
                >
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
              </div>
            </div>
            <div className=" bg-white  shadow-lg  rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
              <h1 className="font-bold text-xl">2. Honesty. </h1>
              <p>
                At KEZA, honesty is key. Trusted by organizations like REB,
                Right To Play, UNESCO, Sakura, JICA, and more, we&lsquo;re
                committed to transparent, reliable education for your child.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white md:bg-transparent   rounded-xl  gap-10">
            <div className="w-full md:w-[750px] flex justify-center md:justify-end">
              <div className="w-[120px]   shadow-lg h-[120px] bg-white  md: rounded-xl p-4 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-14 h-14 text-blue-950"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className=" bg-white   shadow-lg rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
              <h1 className="font-bold text-xl">3. Trust. </h1>
              <p>
                Trust is the foundation of our relationship with parents and
                students at KEZA. It&lsquo;s built on transparency, reliability,
                and a proven track record of success in our programs.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white   md:bg-transparent rounded-xl gap-10">
            <div className="w-full md:w-[500px] flex justify-center md:justify-end">
              <div className="shadow-lg w-[120px] h-[120px] bg-white   rounded-xl p-4 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-14 h-14 text-blue-950"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className=" bg-white  shadow-lg  rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
              <h1 className="font-bold text-xl">4. Accountability. </h1>
              <p>
                At KEZA, we uphold accountability by taking responsibility for
                our actions and ensuring promises to parents and students are
                met through transparent communication and continuous
                improvement.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white   md:bg-transparent rounded-xl gap-10">
            <div className="flex justify-center md:justify-end">
              <div className="w-[120px]  h-[120px] bg-white   shadow-lg  rounded-xl p-4 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-14 h-14 text-blue-950"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </div>
            </div>
            <div className=" bg-white  shadow-lg  rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
              <h1 className="font-bold text-xl">
                5. Commitment to customer-centric innovation.{" "}
              </h1>
              <p>
                Commitment to customer-centric innovation at KEZA means
                prioritizing the needs and experiences of our clients while
                continuously pushing the boundaries of innovation to enhance
                their satisfaction and outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
