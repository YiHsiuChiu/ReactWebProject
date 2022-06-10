import React from "react";
let data = {};
const submitResult = (e) => {
    var storeName = document.getElementById("Name");
    data[storeName.id] = storeName.value;
    var storePhone = document.getElementById("phone");
    data[storePhone.id] = storePhone.value;
    var storeAddress = document.getElementById("address");
    data[storeAddress.id] = storeAddress.value;
    var startTime = document.getElementById("startTime");
    data[startTime.id] = startTime.value;
    var endTime = document.getElementById("endTime");
    console.log("endTime")
    console.log(endTime.value)
    //if(parseInt(endTime.value.split(':')[0])
    data[endTime.id] = endTime.value;
    var weeks = document.getElementsByName("week");
    var weekList = [];
    for (var i = 0; i < weeks.length; i++) {
        if (weeks[i].checked) {
            //i = String(i)
            weekList.push(i);
        }
    }
    data["week"] = weekList;

    var styles = document.getElementsByName("style");
    var styleList = [];
    for (var i = 0; i < styles.length; i++) {
        if (styles[i].checked) {
            //i = String(i)
            styleList.push(i);
        }
    }
    data["style"] = styleList;

    var locations = document.getElementsByName("location");
    var locationList = [];
    for (var m = 0; m < locations.length; m++) {
        if (locations[m].checked) {
            //m = String(m)
            locationList.push(m);
        }
    }
    data["location"] = locationList

    var types = document.getElementsByName("type");
    var typeList = [];
    for (var j = 0; j < types.length; j++) {
        if (types[j].checked) {
            //j = String(j)
            typeList.push(j);
        }
    }
    data["type"] = typeList

    var prices = document.getElementsByName("price");
    var priceList = [];
    for (var k = 0; k < prices.length; k++) {
        if (prices[k].checked) {
            //k = String(k)
            priceList.push(k);
        }
    }
    data["price"] = priceList
    console.log(data);

    fetch("http://localhost:3000/food",{
       
        //mode: 'no-cors',
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type":"application/json"}
      })
    // .then(response => response.json())
    // .then(console.log)
    // .catch(console.error);
    console.log(JSON.stringify(data));

}
export default function storeForm() {
    return (
        <>
            <h3>店家登錄</h3>
            <form>
                店名：<br /><input id="Name" type="text" name="info" />
                <br />
                電話：<br />
                <input id="phone" type="text" name="info" /><br />
                地址：<br />
                <input id="address" type="text" name="info" /><br />
            </form>
            營業時間<br />
            <input id="startTime" type="time" name="info" step="2" /> 到 <input id="endTime" type="time" name="info" step="2" min="2018-W1" max="2018-W52" /><br />
            營業日<br />
            <input type="checkbox" name="week" value="星期日"  />星期日
            <input type="checkbox" name="week" value="星期一"  />星期一
            <input type="checkbox" name="week" value="星期二"  />星期二
            <input type="checkbox" name="week" value="星期三"  />星期三
            <input type="checkbox" name="week" value="星期四"  />星期四
            <input type="checkbox" name="week" value="星期五"  />星期五
            <input type="checkbox" name="week" value="星期六"  />星期六
            <br />
            風格 : <br />
            <input type="checkbox" name="style" value="西式" />西式
            <input type="checkbox" name="style" value="日式" />日式
            <input type="checkbox" name="style" value="東南亞" />東南亞
            <input type="checkbox" name="style" value="中式" />中式
            <input type="checkbox" name="style" value="泰式" />泰式
            <input type="checkbox" name="style" value="韓式" />韓式
            <input type="checkbox" name="style" value="其他" />其他
            <br />
            區域 : <br />
            <input type="checkbox" name="location" value="正門"  />正門
            <input type="checkbox" name="location" value="商側" />商側
            <input type="checkbox" name="location" value="後山" />後山
            <input type="checkbox" name="location" value="木柵市場" />木柵市場
            <input type="checkbox" name="location" value="山上宿舍" />山上宿舍
            <input type="checkbox" name="location" value="新光路" />新光路
            <input type="checkbox" name="location" value="麥側" />麥側<br />
            類型 : <br />
            <input type="checkbox" name="type" value="飯"  />飯
            <input type="checkbox" name="type" value="麵" />麵
            <input type="checkbox" name="type" value="素食" />素食
            <input type="checkbox" name="type" value="速食" />速食
            <input type="checkbox" name="type" value="其他" />其他<br />
            價格 : <br />
            <input type="checkbox" name="price" value="100以下"  />100以下
            <input type="checkbox" name="price" value="100-200" />100-200
            <input type="checkbox" name="price" value="200-300" />200-300
            <input type="checkbox" name="price" value="300以上" />300以上<br />
            <input type="button" name="checked" id="checked" value="提交" onClick={submitResult} />
        </>
    );
}