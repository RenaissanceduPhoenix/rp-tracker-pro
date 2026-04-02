import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

FIREBASE
// Initialisation
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Le mot-clé 'export' est crucial ici
