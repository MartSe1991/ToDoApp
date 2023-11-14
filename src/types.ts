export type TItem = {
  complete: boolean;
  name: string;
};

export type TList = {
  title: string;
  items: TItem[];
};
