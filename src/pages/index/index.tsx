import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { View, Text, Button } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  // 示例来自: https://zh-hans.react.dev/reference/react-dom/flushSync
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    function handleBeforePrint() {
      flushSync(() => {
        setIsPrinting(true);
      });
    }

    function handleAfterPrint() {
      setIsPrinting(false);
    }

    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);
    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  return (
    <View className="index">
      <Text>是否打印：{isPrinting ? "是" : "否"}</Text>

      <Button onClick={() => window.print()}>打印</Button>
    </View>
  );
}
