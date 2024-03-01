// スムーズスクロールを実行する関数
export const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, 
    targetId: string
  ): void => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
