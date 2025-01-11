interface CommitteeMember {
  name: string;
  chairman: string;
  members?: string[];
  member_convenor?: string; // Optional because not all committees might have it
  co_convenor?: string; // Optional
  convenor?: string; // Optional, for committees that have a convenor instead of a member convenor
}

export const committeesData: CommitteeMember[] = [
  {
    name: "Reception Sub Committee",
    chairman: "Mr. Bijay Malakar- MLA, R.K.Nagar",
    members: [
      "Pratima Nath, Chairperson, R.K.Nagar Municipality",
      "Mr.Hiresh Biswas",
      "Mr.Biswatosh Sen",
      "Mr.Rathi Ranjan Das",
      "Mr.Amrit Paul",
      "Mr.Dr Sudip Das",
      "Mr.Subrata Das",
    ],
    member_convenor: "Sri Gopal Das, President, Anandapur GP",
    co_convenor: "Mr. Rajesh Das",
  },
  {
    name: "Media and Publicity Sub Committee",
    chairman: "Mr. Kripanath Mallah- MP, Karimganj.",
    members: [
      "Mr Kutub Uddin Ansari, Assam University",
      "Mr. Pranab Bhattacharjee, Assam University",
      "Mr. Dibyendu Das, Assam University",
      "Mr. Arindam Sarkar, Assam University",
    ],
    member_convenor: "Dr. Paromita Das, Assam University",
    co_convenor: "Dr. Arnab Paul, Assam University",
  },
  {
    name: "Cultural and Sound Sub Committee",
    chairman:
      "Mr. Mriganka Dutta Choudhury, President, Sammilito Sanskritik Mancha, R.K.Nagar",
    members: [
      "Mr. Smarajit Biswas",
      "Mr. Mriganka Purkayastha",
      "Mr.Soumyajit Dutta Choudhury",
      "Mrs. Mitali Paul",
      "Mr. Sanjib Das",
      "Mr. Biswajyoti Bhattacharjee",
    ],
    member_convenor:
      "Mr. Biswotosh Sen, Secretary, Sammilito Sanskritik Mancha, R.K.Nagar",
    co_convenor: "Dr. Abhijit Mitra, President, Feriwala, Hailakandi",
  },
  {
    name: "Stage, Pendal, Decoration and Lighting Sub Committee",
    chairman: "Mr. Himangshu Dey, Vice Chairman, R.K.Nagar Municipality",
    members: [
      "Mr.Bipul Das",
      "Mr. Bhajanlal Das",
      "Mr. Arup Das",
      "Mr. Sourov Das",
      "Mr.Suramoni Sarkar",
      "Mr. Ramu Baidya",
    ],
    member_convenor: "Sanjay Choudhury",
  },
  {
    name: "Refreshment Sub Committee",
    chairman: "Mr. Joydeb Das",
    members: [
      "Mr.Jayanta Das",
      "Mr. Ratish Das",
      "Mr. Siddhartha Das",
      "Mr. Raju Das",
      "Mr. Nigamananda Bharati",
      "Mr. Paritosh Das",
      "Mr. Mridul Das",
    ],
    convenor: "Mr. Debesh Das",
    co_convenor: "Mr Sujit Das",
  },
  {
    name: "Ground Management Committee",
    chairman: "Mr. Promode Das",
    members: [
      "Mr. Mohesh Das",
      "Mr. Ranjit Das",
      "Mr. Bakul Das",
      "Mr. Janak Das",
    ],
    member_convenor: "Dr. Parashuram Das",
  },
  {
    name: "Accommodation Sub Committee",
    chairman: "Mr. Anil Ch Das",
    members: [
      "Mr. Dipu Roy",
      "Mr. Raghunath Das",
      "Mr. Nilkanta Das",
      "Mr. Pradyut Das",
      "Mr. Subudh Das",
      "Mr. Kumudlal Das",
    ],
    member_convenor: "Mr. Jayanta Das",
  },
  {
    name: "Transport Sub Committee",
    chairman: "Mr. Sekhar Das, President, Bhairabnagar GP",
    members: [
      "Mr. Gopal Das",
      "Mr. Animesh Das",
      "Mr. Dibyendu Das",
      "Mr. Benu Das",
      "Mr. Sujit Das",
      "Mr. Monotosh Das",
    ],
    member_convenor: "Mr. Sidhangshu Baishnab",
  },
  {
    name: "Water Supply Sub Committee",
    chairman: "Chairman, Hailakandi Municipality",
    members: [
      "SDO,PHE Division Patharkandi",
      "Mr. Lal Mohan Das",
      "Mr. Umakanta Das",
      "Mr. Mrinal Kanti Das",
      "Mr. Mohitosh Das",
      "Mr. Bijit Kr Das",
    ],
    member_convenor: "Mrs. Anupama Das, President, Ramkrisnha Nagar AP",
  },
  {
    name: "Exhibition Sub Committee",
    chairman: "Mr. Sumanta Das",
    members: [
      "Mr. Kandarpa Malakar",
      "Mr. Sanat Das",
      "Mr. Sanjit Das",
      "Mr. Sanjay Das",
      "Mr. Nitish Chkraborty",
    ],
    member_convenor: "Mr. Srinibash Paul",
    co_convenor: "Mr. Jaydeep Chakraborty",
  },
  {
    name: "Academic Sub Committee",
    chairman: "Dr. Sabyasachi Roy, Karimganj College",
    members: ["Biswajyoti Bhattacharjee- Gamaria"],
    member_convenor: "Dr. Lina Chakraborty, R.K.Nagar College",
    co_convenor: "Mrs. Mandira Deb Roy, Ram Krishna Vidya Pith",
  },
  {
    name: "Souvenir Publication Sub Committee",
    chairman: "Prof. Debasish Bhattacharjee, Dept of Bengali, AUS",
    member_convenor: "Prof. Ramakanta Das, Dept of Bengali, AUS",
  },
  {
    name: "Art and Photography Competition Sub Committee",
    chairman: "Prof. Nirmal Kanti Roy",
    member_convenor: "Mr. Dipendu Das",
  },
  {
    name: "Stall Sub Committee",
    chairman: "Mr. Apurba Das",
    members: [
      "Mr. Bishulal Das",
      "Mr. Gourmohan Das",
      "Mr. Raju Das",
      "Mr. Ranjit Das",
      "Mr. Pabendra Das",
      "Mr. Dipulal Das",
    ],
    member_convenor: "Mr. Joydev Das",
  },
  {
    name: "Documentation Sub Committee",
    chairman: "Prof. Partha Sarkar",
    members: [
      "Mr. Kutub Uddin Ansari, Assam University",
      "Mr. Pranab Bhattacharjee, Assam University",
    ],
    member_convenor: "Prof. S M.Alfarid",
  },
  { name: "Design Sub Committee", chairman: "Dr. Gautam Dutta" },
  {
    name: "Coordination Sub Committee",
    chairman: "Mr. Joydeb Das",
    members: [
      "Mr. Anil Das",
      "Mr. Nani Gopal Das",
      "Mr. Prafulla Ch Das",
      "Mr. Gaurilal Das",
    ],
  },
];

interface taskForceMember {
  task: string;
  members: string[];
}

export const taskForceData: taskForceMember[] = [
  {
    task: "Food",
    members: [
      "Prof. P.B.Mazumder",
      "Dr. Amit Das",
      "Dr. Biswaranjan Roy",
      "Dr Pranab Kumar Sarkar",
    ],
  },
  {
    task: "Reception, Stage and Felicitation",
    members: [
      "Prof. Debasish Bhattachrjee",
      "Dr. Amitabha Bhattacharjee",
      "Dr. Jayshree Dey",
      "Dr. Paromita Das",
    ],
  },
  {
    task: "Transport and Accommodation",
    members: [
      "Dr. Anupam Das Talukdar",
      "Dr. Shubhasish Choudhury",
      "Dr. Sudip Choudhury",
    ],
  },
  {
    task: "Ground Management",
    members: [
      "Dr. Ramakanta Das",
      "Dr. Saday Ch Das",
      "Dr. Panna Dey",
      "Dr Purnendu Das",
      "Mr. Arijit Goswami",
    ],
  },
  {
    task: "Publicity and Website",
    members: ["Dr Arnab Paul", "Dr. Pradipto Das"],
  },
  {
    task: "Cultural and Academic Programme",
    members: ["Prof. Debasish Bhattachrjee", "Dr. Barunjyoti Choudhury"],
  },
  {
    task: "Exhibition",
    members: ["Mr Navajyoti Nath", "Mr Angshu", "Mr. Bikrom"],
  },
];
