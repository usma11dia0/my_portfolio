import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
    const [isMounted, setIsMounted] = React.useState(false);
  
    const defaultState = {
        opacity: 0,
        scaleX: 0, // 横方向のスケールを0に設定
        width: "100%", // コンテナの幅に合わせる
        height: "100px",
      };
  
    return (
      <div className="container" style={{position: "relative", height: "200px"}}>
        <button onClick={() => setIsMounted(!isMounted)}>
          {`${isMounted ? "Unmount" : "Mount"} Element`}
        </button>
        <AnimatePresence>
          {isMounted && (
            <motion.div
              className="block"
              initial={defaultState}
              exit={defaultState}
              animate={{
                opacity: 1,
                boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.3)",
                scaleX: 1,
              }}
              transition={{
                duration: 0.1, // アニメーションの持続時間
                ease: "easeInOut", // アニメーションのイージング関数
              }}
              style={{
                position: "absolute", // 要素の位置を絶対位置に設定
                top: "50%", // 上辺をコンテナの中央に設定
                left: "50%", // 左辺をコンテナの中央に設定
                x: "-50%", // X軸に沿って要素を中央にシフト
                y: "-50%", // Y軸に沿って要素を中央にシフト
              }}
            />
          )}
        </AnimatePresence>
      </div>
    );
  }
