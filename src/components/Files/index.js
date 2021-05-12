import React, { useEffect, useState } from "react";

import File from "../File";

import { WRAPPER, FILE_ITEM, BG_1, BG_2 } from "./files.module.css";

const Files = ({files}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const onFileClick = (id) => {
    const foundIdx = selectedFiles.findIndex((item) => item === id);

    if (foundIdx !== -1) {
      setSelectedFiles((prevFiles) => {
        const updatedFiles = [...prevFiles];
        updatedFiles.splice(foundIdx, 1);
        return updatedFiles;
      });
    } else {
      setSelectedFiles((prevFiles) => [...prevFiles, id]);
    }
  };
  
  return (
    <div className={WRAPPER}>
      {files.map((file, idx) => (
        <div
          className={` ${FILE_ITEM}  ${idx % 2 === 0 ? BG_1 : null}`}
          key={idx}
        >
          <File
            file={file}
            handleDirClick={onFileClick}
            selected={selectedFiles}
          />
        </div>
      ))}
    </div>
  );
};

export default Files;
