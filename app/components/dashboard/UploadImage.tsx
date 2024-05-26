import { ChangeEvent, useState } from "react";

import { GrCloudUpload } from "react-icons/gr";

const UploadImage = ({ file, setFile }: { file: any; setFile: any }) => {
  const [uploading, setUploading] = useState(false);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  return (
    <div className="mt-2 ">
      <label className="opacity-1  text-xs font-bold text-hc-gray-800 hover:cursor-pointer dark:text-gray-300">
        Attach file
        <input
          type="file"
          accept="image/jpeg,image/png,application/pdf,image/jpg"
          hidden={true}
          onChange={handleFileChange}
        />
        <div className="mt-2 flex h-52 flex-col items-center justify-center rounded-xl border border-dashed border-hc-blue-300 bg-hc-blue-50 py-8 input_bg dark:border-gray-500 dark:bg-hc-darkgray-100">
          <span className="opacity-1 hover:shadow:sm flex h-20 w-20 items-center justify-center rounded-full bg-white dark:bg-hc-darkgray-200">
            <GrCloudUpload
              size={34}
              className="text-primary-500"
              //   stroke={1.5}
              strokeLinejoin="miter"
            />
          </span>
          <p className="mt-2 text-xs text-hc-gray-800 dark:text-gray-400">
            Drop your files here or
            <span className="cursor-pointer text-primary text-deepSkyBlue underline dark:text-gray-300">
              {" "}
              browse
            </span>
          </p>
          <p className="mt-2 text-xsm text_gray-400 dark:text-gray-300">
            Max file size 10MB, PDF, JPG,PNG or JPEG file supported.
          </p>
        </div>
      </label>
    </div>
  );
};

export default UploadImage;
