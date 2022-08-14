import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../firebase";

export const loadChannels = async () => {
  const collectionRef = collection(db, 'rooms');
  const docs = await getDocs(collectionRef);

  return docs;
}