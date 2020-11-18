//related to profile.js (both outdated looking for a new solution)
const patients = [
  {
    id: "1",
    name: "Myrtle W Gilliam",
    email: "cecelia1983@yahoo.com",
    password: "4455467535",
    registrationDate: "4/5/1976",
    bio:
      "Typical foodaholic. Tv advocate. Professional organizer. Entrepreneur. Passionate bacon junkie. Gamer. Music geek. General web nerd.",
  },
  {
    id: "2",
    name: "Sharon L Holmes",
    email: "trever_mra3@yahoo.com",
    password: "7669526197",
    registrationDate: "7/30/1951",
    bio:
      "Freelance creator. Gamer. Zombie buff. Infuriatingly humble beer fanatic. Twitter enthusiast. Amateur tv ninja.",
  },
  {
    id: "3",
    name: "James C Harlow",
    email: "aaliyah.greenho@gmail.com",
    password: "5870704511",
    registrationDate: "12/10/1986",
    bio:
      "Zombie buff. Writer. Subtly charming gamer. Passionate introvert. Explorer",
  },
  {
    id: "4",
    name: "Kelly J Chappell    ",
    email: "natalia_parisi@gmail.com",
    password: "3305339387",
    registrationDate: "4/8/1955",
    bio:
      "Internet scholar. Friendly pop culture buff. Unapologetic alcohol fan. General reader. Typical tv fanatic.",
  },
  {
    id: "5",
    name: "Richard B Rockey",
    email: "wilford_blan@gmail.com",
    password: "7979757399",
    registrationDate: "4/27/1971",
    bio:
      "Organizer. Certified gamer. Proud travel advocate. Hipster-friendly internet geek.",
  },
  {
    id: "6",
    name: "Chase T Murray",
    email: "elna_brekk7@yahoo.com",
    password: "2504677975",
    registrationDate: "3/14/1977",
    bio:
      "Infuriatingly humble travel aficionado. Unapologetic communicator. Typical twitter expert.    ",
  },
  {
    id: "7",
    name: "Norma H Jones",
    email: "terry2002@yahoo.com",
    password: "Bobobobobob",
    registrationDate: "3941046773",
    bio:
      "Creator. Typical reader. Falls down a lot. Pop culture ninja. Hipster-friendly internet junkie. Tv enthusiast. Organizer. Travel maven.",
  },
  {
    id: "8",
    name: "Judith B Bowman",
    email: "keanu.hamil4@yahoo.com",
    password: "6428284288",
    registrationDate: "7/19/1943",
    bio:
      "Coffee nerd. Amateur alcohol fan. Devoted pop culture advocate. Food aficionado. Travel expert. Bacon evangelist. Freelance analyst.",
  },
  {
    id: "9",
    name: "Jonathan E Cosme",
    email: "larry2002@hotmail.com",
    password: "7708277592",
    registrationDate: "7/10/1991",
    bio:
      "Pop culture guru. Avid creator. Infuriatingly humble internet expert. Hardcore explorer.",
  },
  {
    id: "10",
    name: "Carolyn C Carl",
    email: "arthur.herz@hotmail.com",
    password: "2822752026",
    registrationDate: "5/27/1975",
    bio:
      "Creator. Hipster-friendly food buff. Extreme entrepreneur. Music aficionado. Infuriatingly humble tv fan.",
  },
];

export const getAllPatients = () => {
  return patients;
};

export const getPatientById = (id) => {
  return patients.filter((patient) => {
    return patient.id === id;
  });
};
