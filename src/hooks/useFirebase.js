import { useEffect, useState } from "react"
import initializationFirebase from "../components/Login/Firsebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";


initializationFirebase()

const useFirebase=()=>{

    const [user, setUser]=useState({})
    const [isLoading, setLoading]=useState(true)
    const [authError, setAuthError]=useState('')

    const auth = getAuth();
    // user registration with email and password
    const registerUser=(email,password)=>{  
        setLoading(true)    
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setAuthError('')
            })
            .catch((error) => {
                
                setAuthError(error.message) ;

                // ..
            })  
            .finally(()=> setLoading(false) )   
            }

            // login with email and password
            const loginUser=(email,password)=>{
                setLoading(true)   
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        setAuthError('')
                    })
                    .catch((error) => {
                        setAuthError(error.message) ;
                    })
                    .finally(()=> setLoading(false) )  
            }


            // logout
            const logout=()=>{
                setLoading(true)   
                signOut(auth).then(() => {
                    // Sign-out successful.
                  }).catch((error) => {
                    // An error happened.
                  })
                  .finally(()=> setLoading(false) )  
            }

            // it observe login and  logout
           useEffect(()=>{
            const unsubcribe= onAuthStateChanged(auth, (user) => {
                if (user) {
                  const uid = user.uid;
                  setUser(user)
                } else {
                  setUser({})
                }
                setLoading(false)   
              });
              return ()=>unsubcribe
           },[])

        //    signInWithGoogle
        const googleProvider = new GoogleAuthProvider();
       
        const googleSignIn=()=>{
            signInWithPopup(auth, googleProvider)
            .then((result) => {
                setAuthError('')
            }).catch((error) => {
                setAuthError(error.message) ;
            })
          
        }



    return{
        user,
        isLoading,
        authError,
        registerUser,
        logout,
        loginUser,
        googleSignIn,
    }

}



export default useFirebase