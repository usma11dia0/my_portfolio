export interface ProjectImageSetType {
  [key: string]: {
    mainImageSrc: string;
    subImageSrc1: string;
    subImageSrc2: string;
    subImageSrc3: string;
  };
}

// 各プロジェクトの画像パス
 export const PROJECT_IMAGE_SET: ProjectImageSetType = {
  "portfolio": {
    "mainImageSrc": "/images/projects/portfolio/portfolio_main.png",
    "subImageSrc1": "/images/projects/portfolio/portfolio_sub_1.png",
    "subImageSrc2": "/images/projects/portfolio/portfolio_sub_2.png",
    "subImageSrc3": "/images/projects/portfolio/portfolio_sub_3.png",
  },
}
