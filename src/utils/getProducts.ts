const getCampaigns = async () => {
    const res = await fetch(`${process.env.SERVER_URL}campaign/all-campaign`)
    const data = await res.json()
    return data
}

export default getCampaigns
