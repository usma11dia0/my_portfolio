import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
    const [isMounted, setIsMounted] = React.useState(false);
  
    const defaultState = {
      opacity: 0,
      scaleX: 0,
      scaleY: 0,
      width: "100%",
      height: "100px",
    };
  
    return (
      <div className="container" style={{ position: "relative", height: "200px" }}>
        <button onClick={() => setIsMounted(!isMounted)}>
          {`${isMounted ? "Unmount" : "Mount"} Element`}
        </button>
        <AnimatePresence>
          {isMounted && (
            <motion.div
              className="block"
              initial={defaultState}
              exit={{
                opacity: 0,
                scaleX: 1, // アンマウント時には元のサイズに戻す
                scaleY: 1, // アンマウント時には元のサイズに戻す
                transition: { duration: 0.3 } // アンマウント時のアニメーションの持続時間を設定
              }}
              animate={{
                opacity: 1,
                scaleX: [0, 1.5, 0.3, 1, 1], // 最初に横に伸び、その後元に戻る
                scaleY: [0, 0.02, 1.3, 1.8, 1], // scaleYのアニメーションはscaleXの後に実行
                boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.3)",
              }}
              transition={{
                duration: 0.4,
                ease: "easeIn",
                scaleX: { duration: 0.3, times: [0, 0.6, 0.65, 0.75, 1] }, // scaleXのアニメーションタイミング
                scaleY: { duration: 0.3, times: [0, 0.6, 0.65, 0.75, 1] }, // scaleYのアニメーションタイミング
              }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
              }}
            />
          )}
        </AnimatePresence>
      </div>
    );
  }
