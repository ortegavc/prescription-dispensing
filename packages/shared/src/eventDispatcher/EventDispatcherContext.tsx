
import { ReactNode, createContext, useContext, useEffect } from "react";
import EventDispatcher from "./EventDispatcher";

const eventDispatcher = new EventDispatcher();

const EventDispatcherContext = createContext<EventDispatcher>(eventDispatcher);

export function useEventDispatcher() {
  return useContext(EventDispatcherContext);
}

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export function EventDispatcherContextProvider({ children }: Props) {

  return (
    <EventDispatcherContext.Provider value={eventDispatcher}>
      {children}
    </EventDispatcherContext.Provider>
  );
}
