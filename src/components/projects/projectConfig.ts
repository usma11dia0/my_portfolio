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
    },
    "brightness": 'brightness(1.3)'
  },
  "japanese-quiz-app": {
    "image": {
      "mainImageSrc": "/images/projects/japanese-quiz-app/japanese-quiz-app_main.png",
      "subImageSrc1": "/images/projects/japanese-quiz-app/japanese-quiz-app_sub_1.png",
      "subImageSrc2": "/images/projects/japanese-quiz-app/japanese-quiz-app_sub_2.png",
      "subImageSrc3": "/images/projects/japanese-quiz-app/japanese-quiz-app_sub_3.png",
    },
    "text": {
      "projectName": "JAPANESE QUIZ APP",
      "projectSummary": "日本語の同音異義語を判別するクイズアプリ",
      "projectDetails": "発音された同音異義語を当てる問題と、同音異義語の発声が正確かどうかを判定する問題の二種類を作成しました。",
      "projectURLLink": "",
      "projectDemoLink": "https://user-images.githubusercontent.com/30208963/192776306-37bb3e9f-31af-4a4e-bb04-457e62ca2ebf.gif",
      "projectGithubLink": "https://github.com/usma11dia0/japanese_quiz_app",
      "projectSkills": ["React", "TypeScript", "Django", "Pytorch", "Firebase", "AWS"]
    },
    "brightness": 'brightness(1.0)'
  }
}
