# ReactWebProject後端Server

## 資料庫建置
1. 至MongoDB下載community server (https://www.mongodb.com/try/download/community)，
2. 創建DB與其Collection (db name: React, collection name: Food)
<img width="1183" alt="image" src="https://user-images.githubusercontent.com/50900244/172546088-ef50a877-d6a5-479c-ab3e-b4e8f4a248d2.png">

## 模組安裝與執行
```
npm install
node app.js
```
<img width="1177" alt="image" src="https://user-images.githubusercontent.com/50900244/172546342-5316c6fc-2065-490f-b17f-c11cc633111b.png">


## 後端Server功能
### food
POST: 店家登入資料，將店家資料依下格式夾帶在body中傳送
```
{
  Name: string,
  phone: string,
  address: string,
  startTime: string (HH:MM:SS),
  endTime: string (HH:MM:SS),
  style: Array of string,
  location: Array of string,
  type: Array of string,
  price: Array of string
}
```
ex.
```
{
  Name: '麥當勞',
  phone: '0912345678',
  address: '台北市文山區指南路二段67號',
  startTime: '9:00:00',
  endTime: '22:00:00',
  style: [ '0' ],
  location: [ '6' ],
  type: [ '3' ],
  price: [ '0', '1', '2' ]
}
```




