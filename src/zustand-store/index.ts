import { create } from "zustand";
import {
  BriefcaseMetal,
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
  iconsToShow: { icon: React.ElementType; title: string }[];
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
      let newIconsToShow: { icon: React.ElementType; title: string }[] = [];

      if (usuarioTeste.cargo === UsuarioTipo.instrutor) {
        newIconsToShow = [
          { icon: ChalkboardTeacher, title: "Minhas Aulas" },
          { icon: BriefcaseMetal, title: "Oficina" },
          { icon: Video, title: "Cursos" },
        ];
      } else if (usuarioTeste.cargo == UsuarioTipo.aluno) {
        newIconsToShow = [
          { icon: Student, title: "Meu Aprendizado" },
          { icon: Video, title: "Cursos" },
        ];
      } else if (usuarioTeste.cargo == UsuarioTipo.administrador) {
        newIconsToShow = [
          { icon: ClockClockwise, title: "Cursos Pendentes" },
          { icon: Buildings, title: "Academias" },
          { icon: Video, title: "Cursos" },
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
