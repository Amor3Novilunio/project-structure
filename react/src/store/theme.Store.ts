import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { ColorTypes, ThemeTypes } from "../types/theme.types";
import themeConst from "../constants/theme.const";

type States = {
  colors: ColorTypes;
  theme: ThemeTypes;
};
type Actions = {};

export default () =>
  create<States & Actions>()(
    persist(
      (_set, _get) => {
        const defaultTheme: ThemeTypes = "dark";

        return {
          colors: themeConst[defaultTheme],
          theme: defaultTheme,
        };
      },
      {
        name: "theme",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
