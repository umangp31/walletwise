import { create } from "zustand";
import { ProfileResponse } from "../screens/hooks/useProfile";

interface IEditProfileStore {
  handle: string;
  name: string;
  description: string;
  imageUrl: string;
  user: null | ProfileResponse;
  setHandle: (handle: string) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setImageUrl: (imageUrl: string) => void;
  setUser: (imageUrl: ProfileResponse) => void;
}

const useEditProfileStore = create<IEditProfileStore>((set) => ({
  handle: "",
  name: "",
  description: "",
  imageUrl: "",
  user: null,
  setHandle: (handle) => {
    set({
      handle: handle,
    });
  },
  setName: (name) => {
    set({
      name: name,
    });
  },
  setDescription: (description) => {
    set({
      description: description,
    });
  },
  setImageUrl: (imageUrl) => {
    set({
      imageUrl: imageUrl,
    });
  },
  setUser: (user) => {
    set({
      user: user,
    });
  },
}));

export default useEditProfileStore;
