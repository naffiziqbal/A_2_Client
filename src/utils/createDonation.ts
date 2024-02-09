export const createDonation = async (donationData: any) => {
    console.log(
        donationData
    )
    const res = await fetch(`https://donation-server-six.vercel.app/api/v1/donation/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData)
    })
    const data = await res.json()
    return data
}
