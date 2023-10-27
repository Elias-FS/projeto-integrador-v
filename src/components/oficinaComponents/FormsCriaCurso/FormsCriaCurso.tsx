import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import DropZone from "../dropZone/dropZone";

export function FormsCriaCurso() {
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
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Banner:
          </Typography>
          <DropZone/>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Descrição:
          </Typography>
          <Input
            size="lg"
            placeholder="Descrição do curso..."
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",

            }}
          />
        </div>
        <Button className="mt-6 text-gray-900" fullWidth>
          Criar Curso
        </Button>
      </form>
    </Card>
  );
}
