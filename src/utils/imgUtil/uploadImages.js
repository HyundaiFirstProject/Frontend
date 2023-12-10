const uploadImages = (files, currentFiles, setFiles) => {
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.readAsDataURL(files[i]);
    reader.onloadend = () => {
      setFiles((prevFiles) => {
        if (prevFiles.length < 5) {
          return [...prevFiles, reader.result];
        } else {
          return prevFiles;
        }
      });
    };
  }
};
export default uploadImages;
