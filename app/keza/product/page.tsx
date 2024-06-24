import React from "react";
import Image from "next/image";

const page1 = () => {
  return (
    <div>
      <div className="group relative border bg-white rounded-xl overflow-hidden">
        {" "}
        <div className="aspect-h-3 aspect-w-4 overflow-hidden bg-gray-100">
          <Image
            width={2940}
            height={1960}
            alt="GOOGLE PIXEL 6 PRO"
            src="https://images.unsplash.com/photo-1706412703794-d944cd3625b3?q=80&amp;w=2940&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="object-cover object-center"
          />
          <div
            className="flex items-end p-4 opacity-0 bg-white/10 backdrop-blur group-hover:opacity-100 duration-200"
            aria-hidden="true"
          >
            {" "}
            <div className="items-center text-sm group active:bg-gray-100 active:text-gray-900/60 active:transition-none border font-medium gap-2 inline-flex justify-center outline-offset-2 px-6 py-2 transition w-full bg-white hover:bg-gray-50 text-black rounded-lg">
              Learn more
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="p-4">
          {" "}
          <div className="flex items-center justify-between space-x-8 text-base font-medium text-black">
            {" "}
            <h3>
              {" "}
              <a
                href="/store/3"
                title="GOOGLE PIXEL 6 PRO"
                aria-label="GOOGLE PIXEL 6 PRO"
                className="font-display text-xl"
              >
                {" "}
                <span
                  aria-hidden="true"
                  className="absolute inset-0"
                ></span>{" "}
                GOOGLE PIXEL 6 PRO{" "}
              </a>{" "}
            </h3>{" "}
            <p>$19.99</p>{" "}
          </div>{" "}
          <p className="mt-1 text-sm text-gray-600">Phone cases</p>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default page1;
