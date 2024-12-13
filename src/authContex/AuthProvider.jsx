import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loadding, setLoadding] = useState(true);
	// register
	const createNewUser = (email, password) => {
		setLoadding(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
    // sign in user
    const signInUser=(email,password)=>{
        setLoadding(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    // sign out
    const signOutUser=()=>{
        setLoadding(true)
        return signOut(auth)
    }
	// google login
	const googleLogin=()=>{
		const provider = new GoogleAuthProvider()
		return signInWithPopup(auth,provider)

	}
	//
	console.log(user);
	// onAuthStateChanged
	useEffect(() => {
		const unSubscrice = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoadding(false);
		});
		return () => {
			unSubscrice();
		};
	}, []);
	const authInfo = {
		user,
		setUser,
		loadding,
		createNewUser,
        signInUser,
        signOutUser,
		googleLogin
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
