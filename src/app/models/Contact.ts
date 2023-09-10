export interface Contact {
    contactValue: string,
    contactType: {
        isEmail: boolean,
        isPhone: boolean
    }
}