export interface ICampaign {

        _id: string
        creatorId: string
        title: string
        amount: number
        description: string
        image: string
        __v?: number
    
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
    }[]
}
