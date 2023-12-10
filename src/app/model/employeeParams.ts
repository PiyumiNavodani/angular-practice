export interface EmployeeParams {
    // id: number;
    firstName: string;
    lastName: string;
    emailId: string;
    contactList: Contact;
}

export interface Contact{
    mobileNumber: number;
}