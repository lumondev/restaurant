const d = document;

export function sendEmail(name, from, message) {
  let params = {
    from_name: name,
    mail: from,
    message,
  };

  emailjs.send("service_nmznmnr", "template_9xcvn1j", params).then(function (res) {
    console.log("success", res.status);
  });
}
