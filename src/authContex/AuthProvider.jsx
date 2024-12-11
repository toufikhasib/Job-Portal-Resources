import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
    signInWithEmailAndPassword,
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
        return signInWithEmailAndPassword(auth,email,password)
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
        signInUser
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
