# デバッグ用のリバースプロキシ

デバッグ用にローカルホストにプロキシサーバを立てます。

## Requirement

node.js v8.11.3 で動作確認しています。

## Install

```bash
npm install
```

## Usage

```bash
npm start
```

## Config

```json
{
  "listenPort": 5000,
  "targetHost": "http://localhost:3000",
  "appendHeaders": {
    "authentication": "bearer eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVlLCJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0.yRQYnWzskCZUxPwaQupWkiUzKELZ49eM7oWxAQK_ZXw",
    "X-Forwarded-For": "120.0.0.7",
    "X-Forwarded-Proto": "https",
    "X-Forwarded-Port": "443"
  }
}
```

* listenPort  
待ち受けするポート
* targetHost  
プロキシ対象のサーバ
* appendHeaders  
リクエストに付与するhttpヘッダーの値

## LICENSE

このコードはMITライセンスにて提供しています。詳しくは LICENSE ファイルをご確認ください。