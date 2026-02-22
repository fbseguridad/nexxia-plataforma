import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Tu configuración de Firebase que ya verificamos
const firebaseConfig = {
  apiKey: "AIzaSyA9T07P2pgnVux-fPTHX51jlpEQApbCTS0",
  authDomain: "nexxia-f5de0.firebaseapp.com",
  projectId: "nexxia-f5de0",
  storageBucket: "nexxia-f5de0.firebasestorage.app",
  messagingSenderId: "949294128329",
  appId: "1:949294128329:web:91e587767bd2a0cd0fc118"
};

// Inicializamos los servicios
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);      // Para el Login/Registro
export const db = getFirestore(app);   // Para la base de datos de propinas y perfiles
export const storage = getStorage(app); // Para subir las fotos de Cocina, Gym y Arte
