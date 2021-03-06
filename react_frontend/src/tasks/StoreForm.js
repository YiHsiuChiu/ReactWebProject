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
            <h3>????????????</h3>
            <form>
                ?????????<br /><input id="Name" type="text" name="info" />
                <br />
                ?????????<br />
                <input id="phone" type="text" name="info" /><br />
                ?????????<br />
                <input id="address" type="text" name="info" /><br />
            </form>
            ????????????<br />
            <input id="startTime" type="time" name="info" step="2" /> ??? <input id="endTime" type="time" name="info" step="2" min="2018-W1" max="2018-W52" /><br />
            ?????????<br />
            <input type="checkbox" name="week" value="?????????"  />?????????
            <input type="checkbox" name="week" value="?????????"  />?????????
            <input type="checkbox" name="week" value="?????????"  />?????????
            <input type="checkbox" name="week" value="?????????"  />?????????
            <input type="checkbox" name="week" value="?????????"  />?????????
            <input type="checkbox" name="week" value="?????????"  />?????????
            <input type="checkbox" name="week" value="?????????"  />?????????
            <br />
            ?????? : <br />
            <input type="checkbox" name="style" value="??????" />??????
            <input type="checkbox" name="style" value="??????" />??????
            <input type="checkbox" name="style" value="?????????" />?????????
            <input type="checkbox" name="style" value="??????" />??????
            <input type="checkbox" name="style" value="??????" />??????
            <input type="checkbox" name="style" value="??????" />??????
            <input type="checkbox" name="style" value="??????" />??????
            <br />
            ?????? : <br />
            <input type="checkbox" name="location" value="??????"  />??????
            <input type="checkbox" name="location" value="??????" />??????
            <input type="checkbox" name="location" value="??????" />??????
            <input type="checkbox" name="location" value="????????????" />????????????
            <input type="checkbox" name="location" value="????????????" />????????????
            <input type="checkbox" name="location" value="?????????" />?????????
            <input type="checkbox" name="location" value="??????" />??????<br />
            ?????? : <br />
            <input type="checkbox" name="type" value="???"  />???
            <input type="checkbox" name="type" value="???" />???
            <input type="checkbox" name="type" value="??????" />??????
            <input type="checkbox" name="type" value="??????" />??????
            <input type="checkbox" name="type" value="??????" />??????<br />
            ?????? : <br />
            <input type="checkbox" name="price" value="100??????"  />100??????
            <input type="checkbox" name="price" value="100-200" />100-200
            <input type="checkbox" name="price" value="200-300" />200-300
            <input type="checkbox" name="price" value="300??????" />300??????<br />
            <input type="button" name="checked" id="checked" value="??????" onClick={submitResult} />
        </>
    );
}