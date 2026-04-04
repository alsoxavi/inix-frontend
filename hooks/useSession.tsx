const useSession = () => {
    const getUserData = () => {
        return {
            name: "Miguel Zapata",
            email: "correo@example.com"
        }
    }
    const logOut = () => {
        console.dir("login out")
    }
  return { 
    getUserData,
    logOut
 }
}

export default useSession