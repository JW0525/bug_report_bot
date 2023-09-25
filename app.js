const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/slack/usability-report", (req, res) => {
  const responseMessage = `[사용성 제안] 리포트 제목을 입력해주세요\n\n*리포트 내용*\n제안자: 이한준\n제안 내용\nex) 포인트의 숫자만 노출되는데 어떤 결제인지 함께 노출`;

  res.json({
    response_type: "ephemeral", // 사용자에게만 보이는 응답
    text: responseMessage,
  });
});

app.post("/slack/bug-report", (req, res) => {
  const responseMessage = `[버그 리포트] 리포트 제목을 입력해주세요.\n\n*리포트 내용*\n플랫폼: iOS 17, Android 15, Chrome, Safari 등\n플랫폼 버전: 앱일 경우 - '내 계정 탭 → 버전 에서 확인', 웹일 경우 - ''\n발생 기기: 아이폰 15, 갤럭시 S24, 맥북, 윈도우 피씨 등\n발생 일시: 2024년 12월 32일 13시 23분 경\n제보자: 이한준\n재현 방법: OO화면에서 OO버튼을 누름 → OO현상이 일어남`;
  res.json({
    response_type: "ephemeral", // 사용자에게만 보이는 응답
    text: responseMessage,
  });
});

const port = 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
