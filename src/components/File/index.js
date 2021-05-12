import React from "react";
import { FileIcon, FolderIcon } from "../../assets";

import {
  WRAPPER,
  ICON,
  LABEL,
  DROP_ICON,
  BG_GREEN,
  CONTAINER,
  SUB_FILES
} from "./file.module.css";

const File = ({ file, selected, handleDirClick }) => {
  return (
    <div className={WRAPPER}>
      <div className={CONTAINER} onClick={() => handleDirClick(file.id)}>
        <div
          className={`${DROP_ICON} ${file.type === "dir" ? BG_GREEN : null}`}
        >
          {file.type === "dir" && selected.includes(file.id)
            ? "-"
            : file.type === "dir" && !selected.includes(file.id)
            ? "+"
            : null}
        </div>
        <div className={ICON}>
          {file.type === "fil" ? <FileIcon color="#01a962" /> : <FolderIcon />}
        </div>
        <div className={LABEL}>{file.name}</div>
      </div>
      {selected.includes(file.id) && file.subContent ? (
        <div className={SUB_FILES}>
          <File
            file={file.subContent}
            selected={selected}
            handleDirClick={handleDirClick}
          />
        </div>
      ) : null}
    </div>
  );
};

export default File;
