export interface ProjectPublicSetType {
  [key: string]: {
    "image": {
      mainImageSrc: string;
      subImageSrc1: string;
      subImageSrc2: string;
      subImageSrc3: string;
    },
    "text": {
      "projectName": string;
      "projectSummary": string;
      "projectDetails": string;
      "projectURLLink": string;
      "projectDemoLink": string;
      "projectGithubLink": string;
      "projectSkills": string[];
    },
    "brightness": string;
  };
}
