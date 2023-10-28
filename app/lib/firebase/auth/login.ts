import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase-config';

export const login = async (email:string, password:string) => {
    let result, error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }
    return {result, error};
}