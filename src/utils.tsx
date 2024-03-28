// スムーズスクロールを実行する関数
export const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, 
    targetId: string,
    navHeight: number,
  ): void => {
    e.preventDefault();   
    const sectionPosition = calculateScrollPosition(targetId, navHeight)

    window.scrollTo({ 
      top: sectionPosition,
      behavior: 'smooth' 
    });
  };


// 固定ヘッダーの高さを考慮してセクションまでスクロールする位置を計算する関数
export function calculateScrollPosition(sectionId: string, headerHeight: number): number {
  const section = document.getElementById(sectionId);
  if (!section) {
    console.error(`Section with ID ${sectionId} not found.`);
    return 0;
  }

  const sectionTop = section.getBoundingClientRect().top; // セクションのビューポート上での位置
  const scrollTop = document.documentElement.scrollTop; // 現在のスクロール位置
  const position = sectionTop + scrollTop - headerHeight; // ヘッダーの高さを考慮したスクロール位置

  return position;
}
