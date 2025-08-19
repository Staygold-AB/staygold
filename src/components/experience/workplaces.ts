export type Workplace = {
  name: string;
  duration: {
    start: number;
    end?: number;
  };
  role: string;
  duty: string[];
  url?: string;
};

export const workplaces: Workplace[] = [
  {
    name: "Stay Gold",
    duration: {
      start: 1441065600, // Sep 2015
    },
    role: "Full stack developer and technical lead",
    duty: [
      "Build and maintain campaigns, large-scale websites and mobile apps as a freelancer / consultant.",
      "Mentor trainees.",
      // "Worked at SBAB as a senior frontend developer building and maintaining products around pre-approval applications. Led effort to make products compliant with the European Accessibility Act.",
    ],
    url: "https://staygold.se/",
  },
  {
    name: "Nord DDB",
    duration: {
      start: 1377993600, // Sep 2013
      end: 1438387200, // Aug 2015
    },
    role: "Senior frontend developer",
    duty: [
      "Built campaigns and large-scale websites for clients of one of Sweden’s largest full-service agencies.",
    ],
    url: "https://nordddb.com/",
  },
  {
    name: "Perfect Fools",
    duration: {
      start: 1291161600, // Dec 2010
      end: 1343779200, // Aug 2012
    },
    role: "Senior frontend developer",
    duty: ["Built cutting edge campaigns for the company’s clients."],
    url: "https://www.perfectfools.com/",
  },
  {
    name: "Crispin Porter + Bogusky Europe",
    duration: {
      start: 1267401600, // Mar 2010
      end: 1351728000, // Nov 2012
    },
    role: "Senior frontend developer and technical lead",
    duty: [
      "Built cutting-edge award-winning campaigns and large-scale websites for the global advertising agency’s clients.",
    ],
    url: "https://www.crispin.com/",
  },
  {
    name: "Natures of Scandinavia",
    duration: {
      start: 1199145600, // Jan 2008
      end: 1262304000, // Jan 2010
    },
    role: "Full stack developer",
    duty: ["Built and maintained an e-commerce platform."],
    // url: "https://naturesofscandinavia.com/",
  },
  {
    name: "Freelance",
    duration: {
      start: 1136073600, // Jan 2006
      end: 1199145600, // Jan 2008
    },
    role: "Full stack developer",
    duty: ["Built websites and internal tools."],
  },
  {
    name: "Restaurangguiden",
    duration: {
      start: 1136073600, // Jan 2006
      end: 1136073600, // Jan 2006
    },
    role: "Frontend developer",
    duty: ["Built websites for all the restaurants in the guide."],
    // url: "https://restaurangguiden.com/",
  },
];
