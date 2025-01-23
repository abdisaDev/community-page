import { create } from "zustand";
import { PostComment } from "../utils/types";

const useStore = create<PostComment>((set) => ({
  replies: { show: false, postId: undefined },
  displayPost: false,

  setDisplayPost: (state: boolean) => set({ displayPost: state }),
  setReplies: (state) => set({ replies: state }),
}));

export default useStore;
