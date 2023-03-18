import { useEffect, useState } from "react";



const useToken = email => {
    const [token, setToken] = useState(null);

    //token sending

    useEffect(() => {
        if (email) {
            fetch(`https://green-plant-server-omega.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.tokenForAccess) {
                        localStorage.setItem('tokenForAccess', data.tokenForAccess);
                        setToken(data.tokenForAccess);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default useToken;