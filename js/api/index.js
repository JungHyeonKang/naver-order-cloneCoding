async function getRecentMenu(){
    const response = await fetch("http://localhost:3000/recent-orders",{
        method: "GET",
        headers: {
            Accept: "application / json",
          },
    })
 
    const data =  await response.json()
   
    return data;
}

async function getMenuGroups(){
   const response = await fetch('http://localhost:3000/menuGroups',{
        method : "GET",
        headers : {
            Accept :  "application/json"
        }
    })
    const data  =response.json()

    return data;
}

async function getMenu(menuId){
   const response =  await fetch(`http://localhost:3000/menu/${menuId}`,{
        method : 'GET',
        headers : {
            Accept : 'application/json'
        }
    })
    const data = response.json()

    return data
}

export {getRecentMenu , getMenuGroups , getMenu}