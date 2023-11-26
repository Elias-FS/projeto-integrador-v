import { Checkbox } from "@/components/ui/CheckBox/checkbox";
import { Input } from "@/components/ui/Input/input";
import { Label } from "@/components/ui/Label/label";
import { Slide } from "@/models/slide";
import { Plus, Trash } from "phosphor-react";

interface EstruturaDeAlternativasProps {
  slideOpened: number;
  setSlideList: React.Dispatch<React.SetStateAction<Slide[]>>;
  slideList: Slide[];
}

export function EstruturaDeAlternativas({
  slideOpened,
  setSlideList,
  slideList,
}: EstruturaDeAlternativasProps) {
  console.log(slideList[slideOpened]);
  return (
    <>
      <div className="text-left w-3/4">
        <Label htmlFor="Enunciado">Enunciado: </Label>
        {slideList[slideOpened]?.question ? (
          <Input
            type="text"
            id="Enunciado"
            placeholder="Enunciado"
            value={slideList[slideOpened]?.question}
            onChange={(e) => {
              const updatedValue = e.target.value;
              setSlideList((prevSlideList) =>
                prevSlideList.map((slide) => {
                  if (slide.index === slideOpened) {
                    return { ...slide, question: updatedValue };
                  }
                  return slide;
                })
              );
            }}
          />
        ) : (
          <Input
            id="Enunciado"
            placeholder="Enunciado"
            onChange={(e) => {
              const updatedValue = e.target.value;
              setSlideList((prevSlideList) =>
                prevSlideList.map((slide) => {
                  if (slide.index === slideOpened) {
                    return { ...slide, question: updatedValue };
                  }
                  return slide;
                })
              );
            }}
          />
        )}
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="text-left w-2/3">
          <Label htmlFor="Alternativas">Alternativas: </Label>
          Marque apenas as alternativas corretas ou que forem verdadeiras:
        </div>
        {slideList[slideOpened]?.options ? (
          slideList[slideOpened].options?.map((questao, index) => (
            <>
              <div className="w-2/3 mb-4 flex items-center space-x-2">
                <Checkbox
                  onCheckedChange={(isChecked) => {
                    if (isChecked) {
                      const updatedValue =
                        slideList[slideOpened].correctOption || [];
                      updatedValue[index] = index;
                      setSlideList((prevSlideList) =>
                        prevSlideList.map((slide) => {
                          if (slide.index === slideOpened) {
                            return { ...slide, correctOption: updatedValue };
                          }
                          return slide;
                        })
                      );
                    } else {
                      const updatedValue = (
                        slideList[slideOpened].correctOption || []
                      ).filter((_, i) => i !== index);
                      setSlideList((prevSlideList) =>
                        prevSlideList.map((slide) => {
                          if (slide.index === slideOpened) {
                            return { ...slide, correctOption: updatedValue };
                          }
                          return slide;
                        })
                      );
                    }
                  }}
                />
                <Input
                  id={`Alternativa ${index + 1}`}
                  placeholder={`Alternativa ${index + 1}`}
                  value={questao}
                  onChange={(e) => {
                    const updatedValue = slideList[slideOpened].options || [];
                    updatedValue[index] = e.target.value;
                    setSlideList((prevSlideList) =>
                      prevSlideList.map((slide) => {
                        if (slide.index === slideOpened) {
                          return { ...slide, options: updatedValue };
                        }
                        return slide;
                      })
                    );
                  }}
                />
                {index != 0 ? (
                  <Trash
                    size={28}
                    color="white"
                    className="bg-red-400 rounded"
                    onClick={() => {
                      const updatedValue = (
                        slideList[slideOpened].options || []
                      ).filter((_, i) => i !== index);
                      setSlideList((prevSlideList) =>
                        prevSlideList.map((slide) => {
                          if (slide.index === slideOpened) {
                            return { ...slide, options: updatedValue };
                          }
                          return slide;
                        })
                      );
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
            </>
          ))
        ) : (
          <div className="w-2/3 mb-4 flex items-center space-x-2">
            <Checkbox />
            <Input
              id="Alternativa 1"
              placeholder="Alternativa 1"
              onChange={(e) => {
                const updatedValue = slideList[slideOpened].options || [];
                updatedValue[0] = e.target.value;
                setSlideList((prevSlideList) =>
                  prevSlideList.map((slide) => {
                    if (slide.index === slideOpened) {
                      return { ...slide, options: updatedValue };
                    }
                    return slide;
                  })
                );
              }}
            />
          </div>
        )}
      </div>
      {
        // travar maximo de alternativas
        slideList[slideOpened].options ? (
          slideList[slideOpened].options.length < 5 ? (
            <Plus
              size={28}
              color="white"
              className="bg-green-600 rounded"
              onClick={() => {
                const updatedValue = slideList[slideOpened].options || [];
                const index =
                  slideList[slideOpened].options?.length || [].length;
                updatedValue[index] = "";
                setSlideList((prevSlideList) =>
                  prevSlideList.map((slide) => {
                    if (slide.index === slideOpened) {
                      return { ...slide, options: updatedValue };
                    }
                    return slide;
                  })
                );
              }}
            />
          ) : (
            ""
          )
        ) : (
          ""
        )
      }
      <div className="w-2/3 mb-4 items-center space-x-2">
        <Label htmlFor="Feedack Positivo">Feedback para acerto: </Label>
        <Input
          id="Feedack Positivo"
          placeholder="Feedack positivo..."
          value={slideList[slideOpened].feedbacks ? slideList[slideOpened].feedbacks[0] : ""}
          onChange={(e) => {
            const updatedValue = slideList[slideOpened].feedbacks || [];
            updatedValue[0] = e.target.value;
            setSlideList((prevSlideList) =>
              prevSlideList.map((slide) => {
                if (slide.index === slideOpened) {
                  return { ...slide, feedbacks: updatedValue };
                }
                return slide;
              })
            );
          }}
        />
        <Label htmlFor="Feedack Negativo">Feedback para erro: </Label>
        <Input
          id="Feedack Negativo"
          placeholder="Feedack de correção..."
          value={slideList[slideOpened].feedbacks ? slideList[slideOpened].feedbacks[1] : ""}
          onChange={(e) => {
            const updatedValue = slideList[slideOpened].feedbacks || [];
            updatedValue[1] = e.target.value;
            setSlideList((prevSlideList) =>
              prevSlideList.map((slide) => {
                if (slide.index === slideOpened) {
                  return { ...slide, feedbacks: updatedValue };
                }
                return slide;
              })
            );
          }}
        />
      </div>
    </>
  );
}
