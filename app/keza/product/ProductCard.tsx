import React from "react";
import Image from "next/image";
import Link from "next/link";
// import image from "../../images/products/keza_development_kit_1.jpg";
import "../../css/product_css.css";

const ProductCard = ({image, name , price , category, id}: {image: any, name: string , price : number , category : string, id:number}) => {
  return (
    <Link href={`/keza/product/${id}`} >
      <div className="w-[350px]">
        <div className="group relative border bg-white rounded-xl overflow-hidden">
          {" "}
          <div className="aspect-h-3 aspect-w-4 overflow-hidden bg-gray-100 border-b">
            <Image
              alt="GOOGLE PIXEL 6 PRO"
              src={image}
              // src="https://images.unsplash.com/photo-1706412703794-d944cd3625b3?q=80&amp;w=2940&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover object-center"
            />
            <div
              className="flex items-end p-4 opacity-0 bg-white/10 backdrop-blur group-hover:opacity-100 duration-200"
              aria-hidden="true"
            >
              {" "}
              <div className="items-center text-sm group active:bg-gray-100 active:text-gray-900/60 active:transition-none border font-medium gap-2 inline-flex justify-center outline-offset-2 px-6 py-2 transition w-full bg-white hover:bg-gray-501 text-black1 rounded-lg">
                Learn more
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="p-4">
            {" "}
            <div className="flex items-center justify-between space-x-8 text-base font-medium text-black1">
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
                  {name}{" "}
                </a>{" "}
              </h3>{" "}
              <p>{price}{" "}rwf</p>{" "}
            </div>{" "}
            <p className="mt-1 text-sm text-gray-600">{category}</p>{" "}
          </div>{" "}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
