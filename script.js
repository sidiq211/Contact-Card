document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("container");
    const contactList = document.getElementById("list");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>Name:</strong> ${name}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Phone:</strong> ${phone}
        `;

        contactList.appendChild(listItem)
        contactForm.reset();
    });
});


// function contact(name,email,phoneNo){
//     this.name = name;
//     this.email = email;
//     this.phoneNo = phoneNo;
// }

//  contact.prototype.Info = function(){
//     console.log(`Name: ${this.name}`);
//     console.log(`Email: ${this.email}`);
//     console.log(`Phone No.: ${this.phoneNo}`);
//  };

// const contact1 = new contact("Dave","dave111@gmail.com","+234-805-484-3738");

// contact1.Info();
