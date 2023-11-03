import { useRef, useState } from "react";

interface DropZoneMidiaProps {}

export default function DropZoneMidia({}: DropZoneMidiaProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const file = e.target.files && e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
        setSelectedFile(file);
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target?.result as string;
          if (result) {
            setPreviewURL(result);
          }
        };
        reader.readAsDataURL(file);
      } else {
        alert("Este arquivo não é uma imagem ou vídeo!");
      }
    }
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];

      if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
        setSelectedFile(file);
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target?.result as string;
          if (result) {
            setPreviewURL(result);
          }
        };
        reader.readAsDataURL(file);
      } else {
        alert("Este arquivo não é uma imagem ou vídeo!");
      }
    }
  }

  function openFileExplorer() {
    inputRef.current?.click();
  }

  return (
    <div onDrop={handleDrop}>
      <form
        className={`${
          dragActive ? "bg-zinc-900" : "bg-zinc-300"
        }  rounded-lg  min-h-[10rem] min-w-[24rem] text-center flex flex-col justify-center`}
        onDragEnter={() => setDragActive(true)}
        onDragLeave={() => setDragActive(false)}
        onDragOver={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*,video/*"
          onChange={handleChange}
          style={{ display: "none" }}
        />

        <p>
          Arraste ou{"  "}
          <span
            className="font-bold text-green-600 cursor-pointer"
            onClick={openFileExplorer}
          >
            <u>Selecione uma Imagem ou Vídeo</u>
          </span>{" "}
          para capa.
        </p>

        {selectedFile && (
          <div className="flex flex-col items-center mt-4">
            {selectedFile.type.startsWith("image/") ? (
              <img
                src={previewURL as string}
                alt="Selected Image"
                className="max-h-48"
              />
            ) : selectedFile.type.startsWith("video/") ? (
              <video
                src={previewURL as string}
                controls
                className="max-h-48"
              ></video>
            ) : null}
          </div>
        )}
      </form>
    </div>
  );
}
