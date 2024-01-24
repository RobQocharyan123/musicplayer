import React, { useState } from "react";
import "./MusicUploadForm.css";

const MusicUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  //  backend  եթե լինի կոդը կաշխատի։

  //   const handleUpload = async () => {
  //     const formData = new FormData();
  //     formData.append('music', selectedFile);

  //     try {
  //       const response = await fetch('սերվերը', {
  //         method: 'POST',
  //         body: formData,
  //       });

  //       // Handle the response from the server (e.g., show a success message)
  //       console.log(response);
  //     } catch (error) {
  //       console.error('Error uploading music:', error);
  //     }
  //   };

  return (
    <div className="three">
      <input type="file" onChange={handleFileChange} />
      <button>Upload Music</button>
    </div>
  );
};

export default MusicUpload;
