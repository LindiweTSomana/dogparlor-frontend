import { Contact } from "./Contact";

export interface Customer {
    customerID?: string,
    firstName: string,
    lastName: string,
    contacts: Array<Contact>,
    addresses: Array<any>
}

// {
//     "firstName": "Likho",
//     "lastName": "Dyantyi",
//     "contacts": [
//         {
//             "contactValue": "onodwa@gmail.com",
//             "contactType": {
//                 "isEmail": true,
//                 "isPhone": false
//             }
//         }
//     ],
//     "addresses": [
//         {
//             "addressValue": "10 Nonqane Crescent",
//             "addressType": {
//                 "isApartment": false,
//                 "isHome": true,
//                 "isComplex": false,
//                 "isDuplex": false
//             },
//             "suburb": "Ilitha Park",
//             "zipcode": "7784",
//             "city": "Cape Town"
//         }
//     ]
// }