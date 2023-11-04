import { Slide } from "@/models/slide";
import { useRef, useState } from "react";

interface DropZoneMidiaProps {
  slideOpened: number;
  setSlideList: React.Dispatch<React.SetStateAction<Slide[]>>;
  slideList: Slide[];
}

export default function DropZoneMidia({
  slideOpened,
  setSlideList,
  slideList,
}: DropZoneMidiaProps) {
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

            // Atualize o setSlideList com o slide modificado
            setSlideList((prevSlideList) => {
              return prevSlideList.map((slide) => {
                if (slide.index === slideOpened) {
                  return { ...slide, midia: result };
                }
                return slide;
              });
            });
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

            // Atualize o setSlideList com o slide modificado
            setSlideList((prevSlideList) => {
              return prevSlideList.map((slide) => {
                if (slide.index === slideOpened) {
                  return { ...slide, midia: result };
                }
                return slide;
              });
            });
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

        {slideList[slideOpened] !== undefined &&
        slideList[slideOpened].midia !== undefined ? (
          slideList[slideOpened].midia?.startsWith("data:image") ? (
            <img
              src={slideList[slideOpened].midia}
              alt="Selected Image"
              className="max-h-48"
            />
          ) : slideList[slideOpened].midia?.startsWith("data:video") ? (
            <video
              src={slideList[slideOpened].midia}
              controls
              className="max-h-48"
            ></video>
          ) : null
        ) : (
          <p>Sem mídia</p>
        )}
      </form>
    </div>
  );
}
