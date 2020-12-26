export type Id = string | number;

export type InputElem = HTMLInputElement | HTMLTextAreaElement;

export type ReactChangeEvent = React.ChangeEvent<InputElem>;

export interface IInputProps {
  name: string;
  value: any;
  onChange: (e: ReactChangeEvent) => void;
  id: string;
}
