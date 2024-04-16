
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries // Your web app's Firebase configuration
const firebaseConfig = {

  //Kobra/stada
  /* apiKey: "AIzaSyCL5ZF3sZ5_NPGvJiJL3bFP_kHDDA_kRPU",
  authDomain: "stadafint-project.firebaseapp.com",
  projectId: "stadafint-project",
  storageBucket: "stadafint-project.appspot.com",
  messagingSenderId: "936824237970",
  appId: "1:936824237970:web:b8e225cbbf5a4d40f05b4b" */

  //Kobra/stadafint2
  /* apiKey: "AIzaSyAF_pFscCBNMrs6PcEU6w63PPhDQZoH4AI", 
     authDomain: "stadafint2.firebaseapp.com",  
     projectId: "stadafint2", 
      storageBucket: "stadafint2.appspot.com",  
      messagingSenderId: "293014467298", 
     appId: "1:293014467298:web:63fc302da633eebeed64bb" */

  //Kobra/test3
  apiKey: "AIzaSyDw9_n8xzZ9lBb1ETn3D2npb-_BERyvjKE",
  authDomain: "test3-a7fa9.firebaseapp.com",
  projectId: "test3-a7fa9",
  storageBucket: "test3-a7fa9.appspot.com",
  messagingSenderId: "887035996800",
  appId: "1:887035996800:web:3d1c0f4ac5c661e2ee5465"

  //Narges/stadaFint
  /* apiKey: "AIzaSyCEQwUhZyYfW3-7j0usptZPAF8miOeh64o",
  authDomain: "stadafint-c3dab.firebaseapp.com",
  projectId: "stadafint-c3dab",
  storageBucket: "stadafint-c3dab.appspot.com",
  messagingSenderId: "865519338083",
  appId: "1:865519338083:web:63fc4b792efc573d892e56" */

  //Narges/stadaFint1
  /* apiKey: "AIzaSyC3DR64PD1aakvTHfep5hFVw5CxmyDJm14",
  authDomain: "stadafint3.firebaseapp.com",
  projectId: "stadafint3",
  storageBucket: "stadafint3.appspot.com",
  messagingSenderId: "822679659171",
  appId: "1:822679659171:web:898a3480cc2a2d36571516" */

  //Narges/stadaFint2
  /* apiKey: "AIzaSyCEQwUhZyYfW3-7j0usptZPAF8miOeh64o",
  authDomain: "stadafint-c3dab.firebaseapp.com",
  projectId: "stadafint-c3dab",
  storageBucket: "stadafint-c3dab.appspot.com",
  messagingSenderId: "865519338083",
  appId: "1:865519338083:web:63fc4b792efc573d892e56" */

  //stadaFint3
  /* apiKey: "AIzaSyCi5GVpRV0FoNN4AcPGGsxDqdwiW4uM9ww",
  authDomain: "stadafint5.firebaseapp.com",
  projectId: "stadafint5",
  storageBucket: "stadafint5.appspot.com",
  messagingSenderId: "351763896699",
  appId: "1:351763896699:web:7a6740f995ef7b178a45de" */

}; // Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)