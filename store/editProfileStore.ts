import { create } from "zustand";

interface IEditProfileStore {
    handle:string
    name: string
    description: string
    imageUrl: string
    setHandle:(handle:string)=>void
    setName: (name: string) => void
    setDescription: (description: string) => void
    setImageUrl: (imageUrl: string) => void
}

const useEditProfileStore = create<IEditProfileStore>((set) => ({
    handle:"",
    name: "",
    description: "",
    imageUrl: "",
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
}));

export default useEditProfileStore;