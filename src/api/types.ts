export interface Todo {
    id : number,
    title: string;
    content: string;
    done: boolean;
  }

export interface newTodo {
  title: string;
  content: string;
}

export interface patchTodo {
  title: string;
  content: string;
  done: boolean;
}