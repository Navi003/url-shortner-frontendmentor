import { create, StateCreator } from "zustand";
import sendRequest from "./send-request";

interface Link {
  originalLink: string;
  shortedLink: string;
  createdAt: Date;
}

interface TemplateStore {
  url: Link[];
  getUrl: (url: string) => void;
  // create: (data: string) => void;
}

const initialState: TemplateStore = {
  url: [],
  getUrl: async (url: string) => {},
};

type CustomStoreType = StateCreator<TemplateStore>;

const store: CustomStoreType = (set, get) => ({
  ...initialState,
  userResetAll: () => set({ ...initialState }),

  getUrl: async (url) => {
    try {
      let response = await sendRequest({
        url: "/api",
        method: "POST",
        data: {
          url,
        },
      });

      const { full_short_link: shortedLink, original_link: originalLink } =
        response.data.urlinfo.result;

      set({
        url: [
          ...get()?.url,
          {
            shortedLink,
            originalLink,
            createdAt: new Date(),
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  },
});

const useStore = create(store);
export default useStore;
