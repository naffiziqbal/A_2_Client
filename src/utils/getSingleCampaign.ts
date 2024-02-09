const getSingleCampaign = async (id: string) => {
    const res = await fetch(`https://donation-server-six.vercel.app/api/v1/campaign/${id}`)
    const data = res.json()
    console.log(data)
    return data
}

export default getSingleCampaign
