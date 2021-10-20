import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBUMKiat2zlRYLIfCEh5V_U-U1PITbAn9U',
  authDomain: 'culture-punk-24575.firebaseapp.com',
  projectId: 'culture-punk-24575',
  databaseURL: 'culture-punk-24575-default-rtdb.firebaseio.com',
  storageBucket: 'culture-punk-24575.appspot.com',
  messagingSenderId: '349325033057',
  appId: '1:349325033057:web:cf319257ca01ba57177420',
  measurementId: 'G-MGQPC2252K',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);

export const auth = getAuth(app);
export default { app, analytics };
