import { useRef } from "react";

export default function Upload() {
  const attachedFilesRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", attachedFilesRef.current.files[0]);
    update(data);
  };

  return (
    <div>
      <h1>Upload</h1>
      <form>
        <input
          className="border-solid border-2 border-black"
          type="file"
          id="attachedFiles"
          accept="image/png, image/jpeg, image/gif"
        ></input>
        <button>onClick</button>
      </form>
    </div>
  );
}
