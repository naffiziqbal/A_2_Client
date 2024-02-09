export const getCampaignDonation = async (campaignId: string) => {
    console.log(campaignId)
    const res = await fetch(`https://donation-server-six.vercel.app/api/v1/donation/donations-by-campaign/${campaignId}`)
    const data = await res.json()
    // console.log(data)
    return data
}


//https://donation-server-six.vercel.app/api/v1/
