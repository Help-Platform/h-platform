export class Users {

   name: string;
   password: string;
   email: string;
   contact: string;
   address: string;
   post: string;
   role: string;
   type: string;
   status: string;

   constructor(name, password, email, contact, address, post, type, status)
    {
        this.name = name;
        this.password = password;
        this.email = email;
        this.contact = contact;
        this.address = address;
        this.post = post;
        this.type = type;
        this.status = status;
    }
}
