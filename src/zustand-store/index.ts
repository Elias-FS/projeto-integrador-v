import { create } from "zustand";
import {
  Wrench,
  Buildings,
  ChalkboardTeacher,
  ClockClockwise,
  Student,
} from "phosphor-react";
import { Video } from "@phosphor-icons/react";
import { Usuario } from "@/models/usuario";
import { UsuarioTipo } from "@/enums/usuario_tipo";

const usuarioTeste = new Usuario(
  new Date('1990-01-01'),
  1,
  '123456789',
  'João da Silva',
  true,
  'Desenvolvedor',
  'joao@example.com',
  '12345-678',
  'Centro',
  'SP',
  'Rua Principal',
  UsuarioTipo.administrador

);

export interface PlayerState {
  iconsToShow: {
    icon: React.ElementType;
    title: string;
    path: string;
  }[];
  userType: string;

  verifySideBar: () => void;
  namingRole: () => void;
}


export const useStore = create<PlayerState>((set, get) => {
  return {
    iconsToShow: [], // Inicialmente, nenhum ícone é mostrado
    userType: "",

    namingRole: () => {
      let newUserType;

      if (usuarioTeste.cargo == UsuarioTipo.aluno) {
        newUserType = "Aluno";
      } else if (usuarioTeste.cargo == UsuarioTipo.instrutor) {
        newUserType = "Instrutor";
      } else if (usuarioTeste.cargo == UsuarioTipo.administrador) {
        newUserType = "Admin";
      }

      set({ userType: newUserType });
    },

    verifySideBar: () => {
      let newIconsToShow: { icon: React.ElementType; title: string; path: string }[] = [];
      if (usuarioTeste.cargo == UsuarioTipo.aluno) {
        newIconsToShow = [
          { icon: Student, title: "Meu Aprendizado", path: "/meu-aprendizado" },
          { icon: Video, title: "Cursos", path: "/cursos" },
        ];
      } else if (usuarioTeste.cargo === UsuarioTipo.instrutor) {
        newIconsToShow = [
          { icon: ChalkboardTeacher, title: "Minhas Aulas", path: "/minhas-aulas" },
          { icon: Student, title: "Meu Aprendizado", path: "/meu-aprendizado" },
          { icon: Wrench, title: "Oficina Curso", path: "/oficina-curso" },
          { icon: Video, title: "Cursos", path: "/cursos" },
        ];
      } else if (usuarioTeste.cargo == UsuarioTipo.administrador) {
        newIconsToShow = [
          { icon: ClockClockwise, title: "Cursos Pendentes", path: "/cursos-pendentes" },
          { icon: ChalkboardTeacher, title: "Minhas Aulas", path: "/minhas-aulas" },
          { icon: Student, title: "Meu Aprendizado", path: "/meu-aprendizado" },
          { icon: Wrench, title: "Oficina Curso", path: "/oficina-curso" },
          { icon: Wrench, title: "Oficina Academia", path: "/oficina-academia" },
          { icon: Buildings, title: "Academias", path: "/academias" },
          { icon: Video, title: "Cursos", path: "/cursos" },
        ];
      }

      set({ iconsToShow: newIconsToShow });
    },

  };
});

//     verify: async () => {
//       set({ isLoading: true })

//       const response = await api.get('/courses/1')

//       set({
//         course: response.data,
//         isLoading: false,
//       })
//     },

//     next: () => {
//       const { currentLessonIndex, currentModuleIndex, course } = get()

//       const nextLessonIndex = currentLessonIndex + 1;
//       const nextLesson = course?.modules[currentModuleIndex].lessons[nextLessonIndex];

//       if (nextLesson) {
//         set({ currentLessonIndex: nextLessonIndex })
//       } else {
//         const nextModuleIndex = currentModuleIndex + 1;
//         const nextModule = course?.modules[nextModuleIndex];

//         if (nextModule) {
//           set({
//             currentModuleIndex: nextModuleIndex,
//             currentLessonIndex: 0,
//           })
//         }
//       }
//     }
//   }
// })
