import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const deleteData = async (collection: string, id: string) => {
    await deleteDoc(doc(db, collection, id));
};

export default deleteData;
