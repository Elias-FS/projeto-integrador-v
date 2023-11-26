import React, { useEffect, useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import { SideSlideShow } from "@/components/oficinaComponents/SideSlideShow/sideSlideShow";
import { SlideCreation } from "@/components/oficinaComponents/SlideCreation/slideCreation";
import { Slide } from "@/models/slide";
import { useStore } from "@/zustand-store";
import { Check } from "phosphor-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/AlertDialog/alert-dialog";
import { Button } from "@/components/ui/Button/button";
import { Trash } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";

const primeiroSlide: Slide = {
  id: uuidv4(),
  slideType: `em branco`,
  index: 0,
};

const CriacaoCurso: React.FC = () => {
  const [slideOpened, setSlideOpened] = useState(0);
  const [slideList, setSlideList] = useState<Slide[]>([primeiroSlide]);
  const { curso, saveInformations } = useStore((state) => ({
    curso: state.curso,
    saveInformations: state.saveInformations,
  }));

  useEffect(() => {
    console.log("Curso após re-renderização:", curso);
  }, [curso]); // Executa o efeito sempre que `curso` é alterado

  function salvarSlides() {
    console.log("criação de cursos: ", curso);
    saveInformations({ ...curso, listaDeSlides: slideList });
  }

  function deletarSlide() {
    const novaLista = slideList.filter(
      (slide) => slide.id !== slideList[slideOpened].id
    );
    setSlideList(novaLista);
    setSlideOpened(0);
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-1 ">
          <SideSlideShow
            slideList={slideList}
            setSlideList={setSlideList}
            setSlideOpened={setSlideOpened}
            slideOpened={slideOpened}
          />
          <SlideCreation
            slideList={slideList}
            slideOpened={slideOpened}
            setSlideList={setSlideList}
          />
          {slideList.length != 1 ? (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="bg-red-400 text-white">
                  Excluir Slide
                  <Trash size={30} />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Deseja deletar este Slide?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Não será possível desfazer esta ação. O Slide atual será
                    excluído do seu curso.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction onClick={deletarSlide}>
                    Deletar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : (
            ""
          )}
          <Button className="bg-green-700 w-40 h-20" onClick={salvarSlides}>
            Finalziar Curso <Check size={30} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CriacaoCurso;
