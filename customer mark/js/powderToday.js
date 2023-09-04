let infor = [
    {
        id: 1,
        name: '花开富贵',
        city: '山东省济南市',
        time: '2023-08-24 16:51',
        imageSrc: "../images/1.png"
    },
    {
        id: 2,
        name: '喜欢爱笑的人',
        city: '福建省南平市',
        time: '2023-08-24 15:51',
        imageSrc: "../images/1.png"
    },
    {
        id: 3,
        name: '心莲',
        city: '北京市丰台区',
        time: '2023-08-24 14:51',
        imageSrc: "../images/1.png"
    },
    {
        id: 3,
        name: '心莲',
        city: '北京市丰台区',
        time: '2023-08-24 14:51',
        imageSrc: "../images/1.png"
    },
    {
        id: 3,
        name: '心莲',
        city: '北京市丰台区',
        time: '2023-08-24 14:51',
        imageSrc: "../images/1.png"
    },
    {
        id: 3,
        name: '心莲',
        city: '北京市丰台区',
        time: '2023-08-24 14:51',
        imageSrc: "../images/1.png"
    }
]

function showList(userList) {
    console.log("showList")
    var tmpStr = ""
    for (let index = 0; index < userList.length; index++) {
        tmpStr +=
            `<div class="fansInformation">
        <img class="avatar" src="`+ userList[index].imageSrc + `" alt="">
        <div id="information" class="information">
            <div class="name">`+ userList[index].name + `</div>
            <div class="city">`+ userList[index].city + `</div>
            <div class="time">`+ userList[index].time + `</div>
        </div>
        <div class="report" @click="reportPopups">上报</div>
    </div>
        `
    }
    //拼接完字符串数组后用innerHTML把它渲染到页面中
    document.getElementById("information").innerHTML = tmpStr
}
showList(infor)


// 上报弹窗按钮
function reportPopups() {

}