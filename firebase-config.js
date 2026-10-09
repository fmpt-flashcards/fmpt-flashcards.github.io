// ============================================================================
//  FMPT Flashcards — configuration Firebase (projet dédié)
//  Projet : fmpt-flashcards | Compte : anzajewls@gmail.com
// ============================================================================
export const firebaseConfig = {
  apiKey: "AIzaSyCqiN5-OzoM6w_1iXXYkfvIGL-JuVaMCL8",
  authDomain: "fmpt-flashcards.firebaseapp.com",
  projectId: "fmpt-flashcards",
  storageBucket: "fmpt-flashcards.firebasestorage.app",
  messagingSenderId: "143651699970",
  appId: "1:143651699970:web:5b504c88e77f5ffabc561b"
};

// Email de l'administrateur — seul cet email peut générer des codes.
// DOIT correspondre à la valeur isAdmin() dans firestore.rules
export const ADMIN_EMAIL = "anzajewls@gmail.com";
