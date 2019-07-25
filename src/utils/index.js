/*
 menuData数据格式:
 [
   {
      "name":"总览",
      "key":"0",
      "children":[
        {
          "name":"数据总览",
          "key":"00",
          "link":"/dashboard"
        },
        {
          "name":"图表监控",
          "key":"01",
          "link":"/dashboard/table"
        }
      ]
    },
    {
      "name":"告警",
      "key":"1",
      "children":[
        {
          "name":"告警",
          "key":"10",
          "link":"/warning"
        },
        {
          "name":"告警联系人",
          "key":"11",
          "link":""
        }
      ]
    }
 ]
 处理后数据格式：
 {
   "/dashboard" : {key: "00", name: "数据总览"},
   "/dashboard/table": {key: "01", name: "图表监控"},
   ...
 }
*/
export const mapMenuPathToKey = (menuData) => {
  console.log('menuData:', menuData);
  let mapData = {}
  if(menuData.link) {
    mapData[menuData.link] = {
      key: mapData.key,
      name: mapData.name
    }
  }
  if(menuData.children && menuData.children.length > 0) {
    menuData.children.forEach((child) => {
      mapMenuPathToKey(child)
    })
  } 
  return mapData
}