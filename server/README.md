# ReactWebProject後端Server

## 資料庫建置
1. 至MongoDB下載community server (https://www.mongodb.com/try/download/community)，
2. 創建DB與其Collection (db name: React, collection name: Food)
<img width="1182" alt="image" src="https://user-images.githubusercontent.com/50900244/172753143-3e8dca42-6011-41f5-bb47-98409a53ff39.png">

## 模組安裝與執行
```
npm install
node app.js
```
<img width="1177" alt="image" src="https://user-images.githubusercontent.com/50900244/172546342-5316c6fc-2065-490f-b17f-c11cc633111b.png">


## 後端Server功能
### food
POST: 店家登錄資料，將店家資料依下格式夾帶在body中傳送 (header記得帶"Content-Type:application/json")
```
{
  Name: string,
  phone: string,
  address: string,
  week: Array of string,
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
{
  Name: '麥當勞',
  phone: '0912345678',
  address: '台北市文山區指南路二段67號',
  week: [
    '0', '1', '2',
    '3', '4', '5',
    '6'
  ],
  startTime: '9:00:00',
  endTime: '22:00:00',
  style: [ '0' ],
  location: [ '6' ],
  type: [ '3' ],
  price: [ '0', '1', '2' ]
}
}
```
其中，style,location等後四項依店家登錄頁面順序編碼填入(從0開始算 => style 0 = 西式)
傳送後server應回傳insert data
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/50900244/172752794-f273c489-d006-4b53-b646-06a31ed4bf1e.png">

GET: 客戶端抽取店家，回傳目前營業中且符合客戶端需求之店家
客戶端需求以queryparams表示，編碼方式與POST相同
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/50900244/172752878-232dcf6e-8013-4597-8c5d-713ccba24951.png">



