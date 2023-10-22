export interface Staff {
    user: any,
    firstName: string,
    lastName: string, 
    speciality: string,
    role: [
        {
            roleID: string,
            name: string
        }
    ]
}
