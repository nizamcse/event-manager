export interface IEvent {
  id: string;
  eventName: string;
  hostName: string;
  location: string;
  startTime: string;
  endTime: string;
  imageURI: string | null;
}
export type EventContextType = {
  myEvent: IEvent | null;
  saveEvent: (myEvent: IEvent | null) => void;
  updateEvent: (myEvent: IEvent | null) => void;
};
