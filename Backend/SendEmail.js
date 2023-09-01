const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
// const { userEmail, userPassword } = require("./config/keys");
app.options('*', cors())
const app = express();
const port = 3001;
app.use(cors());

app.use(bodyParser.json());

app.post("/sendEmail", (req, res) => {
  const data = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "6as1910036@gmail.com",
      pass: "wgespjyozgtjaljk",
    },
  });

  const mailOptions = {
    from: "6as1910036@gmail.com",
    to: data.email,
    subject: `Statement of Purpose for ${data.name}`,
    text: `Dear ${data.name},

Please find attched the Statement of Purpose template for your student visa application to Canada. Kindly edit it as per your scenario and needs.
In case you would like to get the full statement of purpose drafted by our experts, do not hesitate to contact us.

Here is the doc file in case you would like to edit it:
_________________________________________________________

From
${data.name}
(Address)
${data.email}

To
Visa Officer
High Commission of Canada
Subject: Statement of Purpose for studying in Canada

Dear Sir/Madam,

I would like to take this opportunity to introduce myself as ${
      data.name
    }, a passionate and dedicated individual seeking to pursue higher education in Canada. 
I have recently completed my ${data.qual} in ${data.course} from ${
      data.institue
    }, where I developed a strong foundation in ${
      data.course
    } and gained valuable practical experience through internships and projects.

Why Computer Science at the University of Toronto?
After careful consideration of my alternatives for further studies, the Computer Science program at the University of Toronto has emerged as my top choice. The program's interdisciplinary approach and comprehensive curriculum align perfectly with my academic and career goals. I believe that studying at the University of Toronto will provide me with a deeper understanding of computer science concepts and equip me with the necessary skills to excel in the field.
Furthermore, the University of Toronto is renowned for its world-class faculty and state-of-the-art facilities. I am excited about the opportunity to learn from highly experienced professors and collaborate with fellow students who share my passion for computer science. The university's strong industry connections and research opportunities will also provide me with valuable practical experience and networking opportunities.

Why study in Canada?
Canada has always been my preferred destination for higher education due to its excellent education system and welcoming environment. Canadian universities are known for their high academic standards and commitment to research and innovation. Studying in Canada will not only provide me with a quality education but also expose me to diverse cultures and perspectives, enhancing my personal and professional growth.
Moreover, Canada is a safe and peaceful country with a strong healthcare system, ensuring a secure and healthy environment for international students. The country's strong economy and thriving job market make it an ideal place to launch a successful career in the field of computer science.

My Future Goals
Upon completion of my studies in Canada, my goal is to return to my home country, ${
      data.countryApplying
    }, and contribute to the development of the technology industry. I am passionate about leveraging my knowledge and skills to drive innovation and solve real-world problems. 
The computer science program at the University of Toronto will equip me with the necessary expertise and industry exposure to make a meaningful impact in my home country's technology sector.

Academic Background and Language Proficiency
I have successfully completed my ${data.qual} in ${data.course} from ${
      data.institue
    }, where I gained a solid understanding of fundamental concepts and practical skills in computer science. My academic background has prepared me well for the challenges of the Computer Science program at the University of Toronto.
In terms of language proficiency, I have achieved an overall IELTS score of ${
      data.englishL
    } in listening, ${data.englishR} in reading, ${
      data.englishW
    } in writing, and ${
      data.englishS
    } in speaking. While my speaking score may not be as high as desired, I am confident that my language skills will continue to improve during my studies in Canada, as I will be immersed in an English-speaking environment.

Finances
I have made the necessary financial arrangements to support my education in Canada. I have paid ${
      data.tuitionFee
    } CAD towards the first year's tuition fees${
      data.gic === "true"
        ? `, and I have also secured a Guaranteed Investment Certificate (GIC) of ${data.gicFee} CAD to cover my living expenses for the first year`
        : ``
    }. 
Additionally, my family is providing financial support to ensure that I can focus on my studies without any financial burden.

Conclusion
I sincerely request you to consider my application for a study visa to Canada. I assure you that I will abide by all the rules and regulations set by the Canadian government, the local authorities, and the University of Toronto. I am grateful for the opportunity to pursue my higher education in Canada and contribute to the growth and development of my home country's technology industry.

Thank you for your time and consideration. I look forward to the positive outcome of my visa application.

Sincerely,
${data.name}

_________________________________________________________

Leave us a google review if you liked our service:
https://g.page/r/CQT2Q8IwOnqpEB0/review

Best Regards,
Team Effizient
www.effizient.ca
Ph: 226-774-9168
Email: info@effizient.ca

_________________________________________________________
Your Data : 
_________________________________________________________

${JSON.stringify(data, null, 2)}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
      alert("There was a Problem. Please Fill Again.");
    } else {
      console.log("Email sent:", info.response);
      res.json({ message: "Email sent successfully" });
      alert("Form filled Successfully. Please check your email.");
    }
  });
});

// if (process.env.NODE_ENV == "production") {
//   const path = require("path");

//   app.get("/", (req, res) => {
//     app.use(express.static(path.resolve(__dirname, "sop-generation", "build")));
//     res.sendFile(
//       path.resolve(__dirname, "sop-generation", "build", "index.html")
//     );
//   });
// }

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
