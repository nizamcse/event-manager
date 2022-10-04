import { createContext, useState, ReactNode } from "react";
import { EventContextType, IEvent } from "../types/events";

interface Props {
  children: ReactNode;
}

export const EventContext = createContext<EventContextType>({
  myEvent: null,
  saveEvent: (myEvent: IEvent | null) => {},
  updateEvent: (myEvent: IEvent | null) => {},
});

const EventProvider = ({ children }: Props) => {
  const [myEvent, setMyEvent] = useState<IEvent | null>(null);

  const saveEvent = (createdEvent: IEvent | null) => {
    setMyEvent(createdEvent);
  };

  const updateEvent = (updatedEvent: IEvent | null) => {
    setMyEvent(updatedEvent);
  };
  return (
    <EventContext.Provider value={{ myEvent, saveEvent, updateEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
