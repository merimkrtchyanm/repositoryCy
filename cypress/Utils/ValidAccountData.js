export const validUsPass= {
    username: 'Meri',
    email: 'meri1@meri.meri',
    password: 'testpass'
}

export const validcard = {
    cardname: 'ameria',
    cardnumber : '4242 4242 4242 4242',
    cvc: '123',
    expmonth: '10',
    expyear: '2050'
}
 
export const AddressInfo  = {
    firstName: 'Meri',
    lastName: 'Mkrtchyan',
    company: 'My Company',
    address: 'Addres1',
    address2: 'Address2',
    country: 'India',
    state: 'State',
    city : 'city',
    zip : 'zip',
    phone: '+37494999999'
}

export const randomname = {
    randomName (length) {
        let result = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const charactersLength = characters.length
        let count=0
        while (count < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength))
          count +=1
        }
        return result
    } 
}


export const randomemail = {
    randomEmail (length) {
        let result = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const charactersLength = characters.length
        let count=0
        while (count < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength))
          count +=1
        }
        return result + '@mail.mail'
    }
 }
