// スムーズスクロールを実行する関数
export const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, 
    targetId: string
  ): void => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      // 固定ヘッダーの高さを取得
      const headerOffset = 60; //Todo: 引数で取得出来ないか検討
      // セクションまでの距離とヘッダーの高さを考慮した位置を計算
      const sectionPosition = section.getBoundingClientRect().top // ビューポート（現在ブラウザで表示されている画面の範囲）に対する相対的な位置
        +  document.documentElement.scrollTop  // ページが垂直方向にどれだけスクロールされたかを示す値
        - headerOffset;

      window.scrollTo({ 
        top: sectionPosition,
        behavior: 'smooth' 
      });
    }
  };
