import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import { app, db } from "../../firebase";

export async function handleSignIn(data, setUser, navigate) {
  const auth = getAuth(app);

  try {
    const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
    const user = userCredential.user;

    const userRef = ref(db, `users/${user.uid}`);
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      const userData = snapshot.val();
      const userInfo = {
        uid: user.uid,
        email: user.email,
        balance: userData.balance,
        nickname: userData.nickname,
        point: userData.point,
      };

      setUser(userInfo);
      localStorage.setItem("user", JSON.stringify(userInfo));
      navigate("/dashboard");
    }
  } catch (error) {
    console.error("Error signing in: ", error);
    alert("Failed to sign in. Please check your email and password.");
  }
}
