import { useRef, useState } from "react";

interface DropZoneProps {
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
}

export default function DropZone({ setSelectedImage }: DropZoneProps) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    console.log("File has been added");

    if (e.target && e.target.files) {
      const file = e.target.files[0];

      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target?.result as string;
          if (result) {
            setSelectedImage(result);
          }
        };
        reader.readAsDataURL(file);
      } else {
        alert("Este arquivo não é uma imagem!");
      }
    }
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];

      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target?.result as string;
          if (result) {
            setSelectedImage(result);
          }
        };
        reader.readAsDataURL(file);
      } else {
        alert("Este arquivo não é uma imagem!");
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
          accept="image/*"
          onChange={handleChange}
          style={{ display: "none" }}
        />

        <p>
          Arraste ou{"  "}
          <span
            className="font-bold text-green-600 cursor-pointer"
            onClick={openFileExplorer}
          >
            <u>Selecione uma Imagem</u>
          </span>{" "}
          para capa.
        </p>

        {/* {selectedImage && (
          <div className="flex flex-col items-center">
            <img src={selectedImage} alt="Selected Image" className="mt-2 max-h-48" />
          </div>
        )} */}
      </form>
    </div>
  );
}
