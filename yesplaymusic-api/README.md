# yesplaymusic-api

基于 `@neteaseapireborn/api` 的独立 API 仓库模板，可单独部署给 YesPlayMusic 前端使用。

## 1. 本地运行

```bash
npm install
npm start
```

默认监听 `http://localhost:3000`，可测试：

- `GET /banner`
- `GET /album?id=32311`

## 2. 环境变量

复制 `.env.example` 到 `.env`，按需修改：

```bash
cp .env.example .env
```

常用变量：

- `PORT`: 端口，默认 `3000`
- `HOST`: 监听地址，默认 `0.0.0.0`
- `CORS_ALLOW_ORIGIN`: 允许跨域来源

## 3. Docker 部署

```bash
docker build -t yesplaymusic-api .
docker run -d --name yesplaymusic-api -p 3000:3000 yesplaymusic-api
```

验证：

```bash
curl http://localhost:3000/banner
```

## 4. 对接 YesPlayMusic 前端

前端推荐通过 `/api` 反向代理到此服务，例如：

```json
{
  "rewrites": [
    {
      "source": "/api/:match*",
      "destination": "https://your-api-domain/:match*"
    }
  ]
}
```

前端环境变量：

- `VUE_APP_NETEASE_API_URL=/api`
