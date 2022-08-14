import { query, collection, getDocs, orderBy } from "firebase/firestore/lite";
import { db } from "../firebase";

export const loadRoomDetails = async (roomId) => {
  console.log('en loadRoomDetails' + roomId);
  const collectionRef = query(collection(db, `rooms/${roomId}/messages`), orderBy("timestamp"));
  const docs = await getDocs(collectionRef);

  return docs;
}