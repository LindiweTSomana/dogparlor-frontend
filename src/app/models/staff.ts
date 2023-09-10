export interface Staff {
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
