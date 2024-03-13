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
    }
  };
}

// 各プロジェクトの画像パス
export const PROJECT_PUBLIC_SET:ProjectPublicSetType  = {
  "portfolio": {
    "image": {
      "mainImageSrc": "/images/projects/portfolio/portfolio_main.png",
      "subImageSrc1": "/images/projects/portfolio/portfolio_sub_1.png",
      "subImageSrc2": "/images/projects/portfolio/portfolio_sub_2.png",
      "subImageSrc3": "/images/projects/portfolio/portfolio_sub_3.png",
    },
    "text": {
      "projectName": "usma11dia0's PORTFOLIO",
      "projectSummary": "個人用のポートフォリオサイト",
      "projectDetails": "Next.jsの勉強を踏まえて、今まで携わってきた事をポートフォリオとしてまとめました。SF風のデザインを意識して作成しました。",
      "projectURLLink": "",
      "projectDemoLink": "",
      "projectGithubLink": "https://github.com/usma11dia0/my_portfolio",
      "projectSkills": ["Next.js", "TailWindCSS", "TypeScript", "Vercel", "Framer Motion", "ARWES"]
    }
  },
  "japanese-quiz-app": {
    "image": {
      "mainImageSrc": "/images/projects/portfolio/japanese-quiz-app_main.png",
      "subImageSrc1": "/images/projects/portfolio/japanese-quiz-app_sub_1.png",
      "subImageSrc2": "/images/projects/portfolio/japanese-quiz-app_sub_2.png",
      "subImageSrc3": "/images/projects/portfolio/japanese-quiz-app_sub_3.png",
    },
    "text": {
      "projectName": "JAPANESE QUIZ APP",
      "projectSummary": "日本語の同音異義語を判別するクイズアプリ",
      "projectDetails": "発音された同音異義語を当てる問題と、発生した発音が正確かどうかを判定する問題の二つを用意しています。自分の声を用いてモデルの学習から作成しており、発音の判定は自分の声以外だと精度が低いです。",
      "projectURLLink": "",
      "projectDemoLink": "",
      "projectGithubLink": "",
      "projectSkills": ["Next.js", "TailWindCSS", "TypeScript", "Vercel", "Framer Motion", "ARWES"]
    }
  }
}
