const template = (content) => `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web-Server</title>
</head>
<body>
  <h1>${content}</h1>
</body>
</html>
`;

module.exports = template;