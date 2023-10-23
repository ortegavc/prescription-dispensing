import Alert from "@interfaces/alert";
import InfoUser from "@interfaces/InfoUser";

export const AppAlertName = "appAlert";
export const InfoUserClickedName = "infoUserClicked";
export type EventType = "appAlert" | "infoUserClicked";

export interface IBaseEvent {
  type: EventType;
  timestamp?: Date;
}

export interface appAlert extends IBaseEvent {
  message: Alert;
  type: "appAlert";
}

export interface InfoUserClicked extends IBaseEvent {
  user: InfoUser;
  type: "infoUserClicked";
}

export interface Events {
  [AppAlertName]: appAlert;
  [InfoUserClickedName]: InfoUserClicked;
}
