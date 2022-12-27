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

export {getRecentMenu}