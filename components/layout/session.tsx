'use client'
import useSession from "@/hooks/useSession"

function Session() {
    const { getUserData, logOut } = useSession()
    const userData = getUserData()
    return (
        <div className="grid grid-cols-6 items-center p-2 px-5 py-9 border-t-2 border-gray">
            <div className="col-span-1 rounded-4xl bg-blue-700 text-white h-10 w-10 flex justify-center items-center">
                <span>{userData.name.split(" ")[0][0]}{userData.name.split(" ")[1][0]}
                </span>
            </div>
            <div className="col-span-4 flex flex-col">
                <span className="font-semibold text-sm">{userData.name}</span>
                <span className="text-sm text-gray-400" >{userData.email}</span>
            </div>
            <div className="col-span-1" >
                <button onClick={logOut}>
                    <img alt="logout" src="logout.svg" />
                </button>
            </div>
        </div>
    )
}

export default Session