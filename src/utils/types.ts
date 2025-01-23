export interface PostContentParam {
  text: string;
  image: { path: string; alt?: string };
}

export interface PostAccountParam {
  accountDetail: {
    name: string;
    time: string;
  };
  image: { path: string; alt?: string };
}

export interface PostActionParam {
  postId: number;
  like: number;
  comments: number;
  view: number;
  share: number;
}

export interface Comment {
  id: number;
  text: string;
  time: string;
  author: {
    name: string;
    image: {
      path: string;
      alt: string;
    };
  };
  replies: {
    text: string;
    time: string;
    author: {
      name: string;
      image: {
        path: string;
        alt: string;
      };
    };
  }[];
}

interface Replies {
  show: boolean;
  postId: number | undefined;
}

export interface PostComment {
  replies: Replies;
  displayPost: boolean;

  setDisplayPost: (state: boolean) => void;
  setReplies: (state: Replies) => void;
}
