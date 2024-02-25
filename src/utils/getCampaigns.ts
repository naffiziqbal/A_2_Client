

const getCampaigns = async (limit: number | null) => {
    const res = await fetch(`https://donation-server-six.vercel.app/api/v1/campaign/all-campaign?limit=${limit}`)
    const data = await res.json()
    console.log(data)
    return data
}

export default getCampaigns
