function sendEmail(name, email, message) {
    return new Promise((resolve, reject) => {
        Email.send({
            SecureToken: "52025d61-6c39-4850-a0b6-2f3229e50547",
            To: 'tendrirazafimiandrisoa@gmail.com',
            From: "tendrirazafimiandrisoa@gmail.com",
            Subject: `Nouveau message de ${name}`,
            Body: `
                <h2>Nouveau message depuis le site web</h2>
                <p><strong>Nom:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        }).then(
            message => {
                if(message === "OK") {
                    alert("Message envoyé avec succès!");
                    resolve(message);
                } else {
                    alert("Une erreur est survenue. Veuillez réessayer.");
                    reject(new Error(message));
                }
            }
        ).catch(error => {
            alert("Une erreur est survenue. Veuillez réessayer.");
            reject(error);
        });
    });
}
