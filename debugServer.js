"use strict";

// header 受け取り確認用のサーバです

const express = require('express');
const app = express();
const htmlTemplate = `
<html>
<head>
  <meta charset="UTF-8">
  <title>debug server</title>
</head>
<body>
  <pre>
  __body__
  </pre>
</body>
</html>
`

app.get('*', (req, res) => {
  const resBody = {
    url: req.url,
    headers: req.headers
  };
  res.send(htmlTemplate.replace('__body__', JSON.stringify(resBody, undefined, 2)));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
