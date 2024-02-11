import axios from "axios"

export const getUser = async (id: string, token: string) => {
    const response = axios.get(`https://donation-server-six.vercel.app/api/v1/user/${id}`, {
        headers: {
            Authorization: `bearer ${token}`
        }
    })
    const data = (await response).data
    console.log(data)
    return data
}
