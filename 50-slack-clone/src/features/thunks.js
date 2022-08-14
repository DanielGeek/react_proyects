import { loadChannels } from "../helpers/loadChannels";
import { loadRoomDetails } from "../helpers/loadRoomDetails";
import { setChannels, setRoomDetails } from "./appSlice";

export const startLoadingChannels = () => {
  return async( dispatch, getState ) => {
    const { channels } = getState().app;
    if ( !channels ) throw new Error('no existen channels');

    const notes = await loadChannels();
    dispatch( setChannels( notes ) );

  }
}

export const startLoadingRoomDetails = (roomId) => {
  return async( dispatch, getState ) => {
    const { channels } = getState().app;
    if ( !channels ) throw new Error('no existen channels');

    const roomDetails = await loadRoomDetails(roomId);
    dispatch( setRoomDetails( roomDetails ) );

  }
}