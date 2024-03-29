# usma11dia0's Portfolio
下記リンク先のポートフォリオにて使用した技術・フレームワークの詳細です。  
URL：https://usma11dia0-portfolio.vercel.app/

## 主な使用技術
<p>
  <!-- Next.js -->
  <img src="https://img.shields.io/badge/Next.js-v14.1.0-blue.svg?logo=next.js&style=for-the-badge">
  <!-- TailWind CSS -->
  <img src="https://img.shields.io/badge/TailwindCSS-v3.4.1-blue.svg?logo=tailwindcss&style=for-the-badge">
  <!-- TypeScript -->
  <img src="https://img.shields.io/badge/Typescript-v5.3.3-blue.svg?logo=typescript&style=for-the-badge">
  <!-- Vercel -->
</p>

## 環境
| 言語・フレームワーク    | バージョン      |
| --------------------- | -------------- |
| Next.js               | 14.1.0         |
| Node.js               | 21.1.0　       |
| TypeScript            | 5.3.3　        |
| chart.js              | 4.4.2     　   |
| Framer Motion         | 13.4.6         |
| TailWind CSS          | 3.4.1          |
| ARWES                 | 1.0.0-alpha.23 |

※上記以外はpackage.jsonを参照してください。

## ディレクトリ構成
```text
├─.next
├─messages　          # 多言語対応(日本語,英語)のための言語ファイルを格納
├─node_modules
├─public              # 静的ファイルを格納
│  ├─demo
│  ├─images
│  │  ├─others
│  │  └─projects 
│  └─sounds
└─src　　　　　　　     
  ├─components　　　　　
  │  ├─about
  │  ├─elements　　　#共通して使用するコンポーネント
  │  │  ├─background
  │  │  ├─button
  │  │  ├─frame
  │  │  └─text
  │  ├─hero　　
  │  ├─layouts　　　 #ヘッダーやフッターなどレイアウト関連のコンポーネント
  │  ├─others
  │  ├─projects
  │  ├─services
  │  └─skills
  ├─pages    
  └─styles          #Tailwind CSS,Framer Motion関連のファイルを格納
```

### 対応スクリーンサイズ
※下記以外については、レイアウトが崩れてしまう可能性があります。

| Size            | 
| ----------------| 
| 360×640         |   　　　　                
| 360×720         |           　               
| 375×667         | 
| 375×812       　|  
| 390×844         | 
| 414×896         | 
| 1280×720        |  
| 1280×800        |  
| 1366×768        |  
| 1368×912        |  
| 1440×900        |  
| 1487×878        |
| 1504×1003       |
| 1512×982        |  
| 1536×864        |  
| 1680×1050       | 
| 1800×1169       |  
| 1912×958        | 
| 1920×1080       |  
| 1920×1200       |  
| 2552×958        |  
| 2560×1080       |  
| 2650×1440       | 

## 開発環境構築手順
#### １．Node.jsのversionを指定  
`nvm use 21.1.0`

#### ２．開発用の依存関係をインストール    
`npm install` 

#### ３．Next.jsの開発サーバーを起動  
`npm run dev`

### Todoリスト
- 参考URL 掲載
- ノートPCのレイアウト変更 (AboutをGrid-col-2, タイトルとパネル間調整)
- 携帯閲覧時に十字線を削除
- LinkButtonのhover判定修正
- favion作成
- Adobe illustlaterでカーソルアイコンを作成 ※通常・フォーカスの2種類    
- ProjectButton変更
- カスタムドメイン設定 
- 発注書転記アプリのdemo追加
- Webスクレイピングのproject追加 (当ポートフォリオから情報を抽出するスクレイピングを作成)
- お問い合わせフォームの作成



| Size            | breakpoint |
| ----------------| ---------- |
| 360×640         |   　　　　                
| 360×720         |           　               
| 375×667         | 
| 375×812       　|  
| 390×844         | 
| 414×896         | 
| 1280×720        |  
| 1280×800        |  
| 1366×768        | 1xlAndMdh  | 
| 1368×912        | 1xlAndMdh  | 
| 1440×900        | 1xlAndMdh  | 
| 1487×878        | 1xlAndMdh  |
| 1504×1003       | 1.5xl | 
| 1512×982        | 1.5xl | 
| 1536×864        | 2xlCustom | 
| 1680×1050       | 2xlAndLgh |
| 1800×1169       |  
| 1912×958        | 
| 1920×1080       | 4xl |
| 1920×1200       | 4xl | 
| 2552×958        | 5xl | 
| 2560×1080       | 5xl | 
| 2650×1440       | 5xl |
