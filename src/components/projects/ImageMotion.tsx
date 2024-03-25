import React, { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

interface ImageMotionProps {
  children: ReactNode;
  active: boolean;
}

const ImageMotion = ({children, active}: ImageMotionProps): ReactElement => {
  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => {
    setIsActive(active);
  } ,[active]);
  
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="relative"
          key="imageMotion"
          initial={{
            opacity: 0,
            scaleX: 0,
            scaleY: 0,
            width: "100%",
          }}
          exit={{
            opacity: 0,
            scaleX: 1, // アンマウント時には元のサイズに戻す
            scaleY: 1, // アンマウント時には元のサイズに戻す
          }}
          animate={{
            opacity: 1,
            scaleX: [0, 1.3, 0.1, 1.0, 1.0], // 最初に横に伸び、その後元に戻る
            scaleY: [0, 0.001, 1.0, 1.0, 1.0], // scaleYのアニメーションはscaleXの後に実行
          }}
          transition={{
            duration: 0.4,
            ease: "easeIn",
            scaleX: { duration: 0.4, times: [0, 0.6, 0.65, 0.75, 1] }, // scaleXのアニメーションタイミング
            scaleY: { duration: 0.4, times: [0, 0.6, 0.65, 0.75, 1] }, // scaleYのアニメーションタイミング
            transition: { duration: 0.1 } // アンマウント時のアニメーションの持続時間を設定
          }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
        >
        {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ImageMotion
