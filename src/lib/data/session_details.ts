export interface SessionDetail {
  title: string;
  displayName: string;
  sessionAbstract: string;
  role: string;
  org: string;
  bio: string;
  speakerImage: string;
  labels: {
    track: string;
    type: string;
    time: string;
  };
  socials: {
    xAccount?: string;
    github: string;
  };
  additionalInfo?: string;
}

export const SESSION_DETAILS: { [key: string]: SessionDetail } = {};
