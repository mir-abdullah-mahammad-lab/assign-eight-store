export const dataFetched = async () =>{
    const promise =  await fetch(`${process.env.BETTER_AUTH_URL}/data.json`,{
        cache: "no-store"
    })
    const data = await promise.json()
    return data
}



