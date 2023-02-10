const formInputCreator = (label , type , placeholder)=>{
    return {
        label,
        type , 
        placeholder,
    };
}
export const newUserForm  = [
    formInputCreator('Username' , 'text','john_doe'),
    formInputCreator('Name' , 'text','John Doe'),
    formInputCreator('Email' , 'email' , 'doejohn@gmail.com'),
    formInputCreator('Phone' , 'tel' ,'+91 8960 300 940' ),
    formInputCreator('Password' , 'password',''),
    formInputCreator('Address','text','18 F Motilal Nehru Marg'),
    formInputCreator('Country' , 'text' , 'India'),

];

export const newProductForm = [
    formInputCreator('Title','text','Double Margerita'),
    formInputCreator('Description' , 'text','The OG Pizza'),
    formInputCreator('Category' ,'text', 'computers'),
    formInputCreator('Price' , 'text' , '$99.99'),
    formInputCreator('Stock','text','55'),

]
