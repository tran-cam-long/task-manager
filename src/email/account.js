const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "LongTCSE140661@fpt.edu.vn",
    subject: "Thanks for joining in",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  });
};

const sendCancelEmail = (email) => {
  sgMail.send({
    to: email,
    from: "LongTCSE140661@fpt.edu.vn",
    subject: "Thanks for your good time with us",
    text: `Your account has been removed. Please leave a short reason why you canceled our service`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
