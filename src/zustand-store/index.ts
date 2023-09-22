import { create } from "zustand";
import {
  BriefcaseMetal,
  Buildings,
  ChalkboardTeacher,
  ClockClockwise,
  Student,
} from "phosphor-react";
import { Video } from "@phosphor-icons/react";

export interface PlayerState {
  path: string;
  iconsToShow: { icon: React.ElementType; title: string }[];
  userType: string;

  verify: () => void;
  namingRole: () => void;
}


export const useStore = create<PlayerState>((set, get) => {
  return {
    path: window.location.pathname.toString(),
    iconsToShow: [], // Inicialmente, nenhum ícone é mostrado
    userType: "",

    namingRole: () => {
      const path = get().path; // Obtemos o valor atual de path usando a função get
      let newUserType;

      if (path === "/instrutor") {
        newUserType = "Instrutor";
      } else if (path === "/aluno") {
        newUserType = "Aluno";
      } else if (path === "/adm") {
        newUserType = "Admin";
      }

      set({ userType: newUserType });
    },

    verify: () => {
      const path = get().path; // Obtemos o valor atual de path usando a função get
      let newIconsToShow: { icon: React.ElementType; title: string }[] = [];

      if (path === "/instrutor") {
        newIconsToShow = [
          { icon: ChalkboardTeacher, title: "Minhas Aulas" },
          { icon: BriefcaseMetal, title: "Oficina" },
          { icon: Video, title: "Cursos" },
        ];
      } else if (path === "/aluno") {
        newIconsToShow = [
          { icon: Student, title: "Meu Aprendizado" },
          { icon: Video, title: "Cursos" },
        ];
      } else if (path === "/adm") {
        newIconsToShow = [
          { icon: ClockClockwise, title: "Cursos Pendentes" },
          { icon: Buildings, title: "Academias" },
          { icon: Video, title: "Cursos" },
        ];
      }

      set({ iconsToShow: newIconsToShow });
    },
    // ...
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
