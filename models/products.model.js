import { collection, getDocs, doc, getDoc, addDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase.config.js';

const PRODUCTS_COLLECTION = 'products';
const productCollection = collection(db, "productos");

export const getAllProducts = async () => {
  try {
    const products = await getDocs(productCollection);
    return products.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
  } catch (error) {
    throw new Error ("Error", error.message)
  }
};

export const getById = async (id) => {
  const ref = doc(db, productCollection, id);
  const snap = await getDoc(ref);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
};

export const create = async (data) => {
  const docRef = await addDoc(collection(db, productCollection), data);
  return { id: docRef.id, ...data };
};

export const remove = async (id) => {
  await deleteDoc(doc(db, productCollection, id));
};
