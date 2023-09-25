type colors = "blue-gray" | "gray" | "brown" | "deep-orange" | "orange" | "amber" | "yellow" | "lime" | "light-green" | "green" | "teal" | "cyan" | "light-blue" | "blue" | "indigo" | "deep-purple" | "purple" | "pink" | "red";
export default interface IAlert {
  code: string;
  message: string;
  solution?: string;
  color: colors;
  visible?:boolean;
}
