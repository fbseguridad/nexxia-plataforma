// ==========================================
// NEXXIA FIREBASE CORE
// Conexión central a Firebase
// ==========================================

// Firebase core
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

// Servicios que usará Nexxia
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// ==========================================
// CONFIGURACIÓN FIREBASE
// ==========================================

const firebaseConfig = {
    apiKey: "AIzaSyA9T07P2pgnVux-fPTHX51jlpEQApbCTS0",
    authDomain: "nexxia-f5de0.firebaseapp.com",
    projectId: "nexxia-f5de0",
    storageBucket: "nexxia-f5de0.appspot.com",
    messagingSenderId: "949294128329",
    appId: "1:949294128329:web:91e587767bd2a0cd0fc118"
};

// ==========================================
// INICIALIZACIÓN SEGURA
// Evita inicializar Firebase varias veces
// ==========================================

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// ==========================================
// SERVICIOS NEXXIA
// ==========================================

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// ==========================================
// EXPORTS
// ==========================================

export { app, auth, db, storage };
