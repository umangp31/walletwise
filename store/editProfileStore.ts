import { create } from "zustand";

interface IEditProfileStore {
    name: string
    description: string
    imageUrl: string
    setName: (name: string) => void
    setDescription: (description: string) => void
    setImageUrl: (imageUrl: string) => void
}

const useEditProfileStore = create<IEditProfileStore>((set) => ({
    name: "",
    description: "",
    imageUrl: "",
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
}));

export default useEditProfileStore;