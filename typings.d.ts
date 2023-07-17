interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _type: "reference";
    _ref: string;
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  role: string;
  heroImage: Image;
  socials: string;
  profilePic: Image;
  phoneNumber: string;
  backgroundInformation: string;
  email: string;
  name: string;
}

export interface Technology extends SanityBody {
  progress: number;
  title: string;
  image: Image;
  _type: "skill";
}
export interface Skill extends SanityBody {
  progress: number;
  title: string;
  image: Image;
  _type: "skill";
}

export interface Experience extends SanityBody {
  _type: "experience";
  dateEnded: date;
  dateStarted: date;
  isCurrentlyWorkingHere: boolean;
  companyImage: Image;
  company: string;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Project extends SanityBody {
  title: string;
  image: Image;
  summary: string;
  technologies: Technology[];
  linkToBuild: string;
  _type: "project;";
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
