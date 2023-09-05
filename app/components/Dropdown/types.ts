export type DropdownType = {
  title: string;
  changeOption: (newOption: string) => void;
  options: string[];
};
