import { ref, set, push, get } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebase";

export default async function handleUserRegisteration(auth, data, setError, setStatus, setUser, navigate) {
  try {
    const createdUser = await createUserWithEmailAndPassword(auth, data.email, data.pwd);
    const userRef = ref(db, `users/${createdUser.user.uid}`);
    await set(userRef, {
      email: data.email,
      balance: 0,
      nickname: data.nickname,
      point: 2000,
    });
    const idListRef = ref(db, `idList`);
    await push(idListRef, data.id);
    const nicknameListRef = ref(db, `nicknameList`);
    await push(nicknameListRef, data.nickname);
    const user = createdUser.user;
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
    }
    navigate("/dashboard");
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      setError("email", {
        type: "manual",
        message: "already registered",
      });
      setStatus((prevStatus) => ({
        ...prevStatus,
        email: { color: "red", message: "already registered" },
      }));
    } else {
      console.error(error);
    }
  }
}
