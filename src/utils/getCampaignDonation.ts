export const getCampaignDonation = async (campaignId: string) => {
    const res = await fetch(`https://donation-server-six.vercel.app/api/v1/donation/donations-by-campaign/${campaignId}`)
    const data = await res.json()
    return data
}


//https://donation-server-six.vercel.app/api/v1/
