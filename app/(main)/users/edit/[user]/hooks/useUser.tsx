'use client'

import React, { useEffect, useState } from 'react'

function useUser(id: string) {
    const [userData, setUserData] = useState({
        data: ""
    });

    const getUserData = () => {
        setUserData({
            data: id
        })
    }
    
    useEffect(() => {
        getUserData();
    }, [])

    return {
        userData
    }

}

export default useUser