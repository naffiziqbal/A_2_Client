import axios from "axios"

export const getUser = async ({ id, token }: { id: string, token: string }) => {
    const response = axios.get(`https://donation-server-six.vercel.app/api/v1/user/${id}`, {
        headers: {
            Authorization: `bearer ${token}`
        }
    })
    const data = (await response).data
    return data
}
