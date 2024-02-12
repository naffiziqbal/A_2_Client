export interface ICampaign {
    _id: string
    creatorId: string
    title: string
    amount: number
    description: string
    image: string
    category: string
    __v?: number

}{ }

export interface ICampaignInputs {
    title: string
    amount: number
    description: string
    image: string
    category: string
}




export interface ICampaignProps {
    data: {
        _id: string
        creatorId: string
        title: string
        amount: number
        description: string
        image: string
        __v?: number
        category: string

    }[]
}


export interface IDonation {
    _id: string
    campaignId: string
    campaignTitle: string
    donationAmount: number,
    donatorId: string
    donatorName: string
}


export interface IRegistrationInputs {
    name: string
    email: string
    password: string
    role: string
}
export interface ILoginInputs {
    email: string
    password: string
}

