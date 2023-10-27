import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import DropZone from "../dropZone/dropZone";

interface FormsCriaCursoProps {
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
}

export function FormsCriaCurso({ setSelectedImage }: FormsCriaCursoProps) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Cadastrar Curso
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Preencha todas informações para dar início a criação do seu curso.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Título:
          </Typography>
          <Input
            size="lg"
            placeholder="Título do Curso..."
            className="border border-t border-opacity-50 rounded focus:border-t focus:border-opacity-50 focus:rounded"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Imagem do Curso:
          </Typography>
          <DropZone setSelectedImage={setSelectedImage}/>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Descrição:
          </Typography>
          <Input
            size="lg"
            placeholder="Descrição do curso..."
            className="border border-t border-opacity-50 rounded focus:border-t focus:border-opacity-50 focus:rounded"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Academia:
          </Typography>
          <Input
            size="lg"
            placeholder="Academia do curso..."
            className="border border-t border-opacity-50 rounded focus:border-t focus:border-opacity-50 focus:rounded"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button className="mt-6 bg-green-700 text-lg h-11" fullWidth>
          Criar Curso
        </Button>
      </form>
    </Card>
  );
}
