import { ChangeEvent, useState } from "react";

import { GrCloudUpload } from "react-icons/gr";
import { TbTrashX } from "react-icons/tb";

const UploadImage = ({ file, setFile }: { file: any; setFile: any }) => {
  const [uploading, setUploading] = useState(false);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="mt-2 ">
      {!file ? (
        <label className="opacity-1  text-xs font-bold hover:cursor-pointer">
          Attach file
          <input
            type="file"
            accept="image/jpeg,image/png,application/pdf,image/jpg"
            hidden={true}
            onChange={handleFileChange}
          />
          <div className="mt-2 flex h-52 flex-col items-center justify-center rounded-xl border border-dashed py-8 input_bg">
            <span className="opacity-1 hover:shadow:sm flex h-20 w-20 items-center justify-center rounded-full bg-white">
              <GrCloudUpload
                size={34}
                className="text-primary-500 text-deepSkyBlue"
                strokeLinejoin="miter"
              />
            </span>
            <p className="mt-2 text-xs">
              Drop your files here or
              <span className="cursor-pointer text-deepSkyBlue underline">
                {" "}
                browse
              </span>
            </p>
            <p className="mt-2 text-xsm text_gray-400">
              Max file size 10MB, PDF, JPG,PNG or JPEG file supported.
            </p>
          </div>
        </label>
      ) : (
        <div className="mt-1 flex flex-col gap-2 ">
          <label className="opacity-1 text-xs font-bold capitalize">
            Selected file
          </label>
          <div className="flex items-center gap-7">
            <span className="flex cursor-pointer text-sky-600 font-bold text-sm">
              {file?.name}
            </span>
            <button
              onClick={() => setFile(null)}
              className="flex items-center justify-center gap-2 rounded-lg px-[5px] py-1 text-xs font-semibold"
              type="button"
            >
              <TbTrashX
                size={20}
                className="text-primary text-red"
                strokeLinejoin="miter"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
