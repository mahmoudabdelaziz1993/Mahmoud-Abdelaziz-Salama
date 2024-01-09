// create response type
export type Response = {
    data?: any,         // data
    error?: string,        // error
    success: 'success' | 'error'

}

export type BasicInfo = {
    name: string;
    label: string;
    summary: string;
    location_address: string;
    image: string;
    email: string;
    phone: string;
    phone2: string;
}