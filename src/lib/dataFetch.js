export const dataFetched = async () =>{
    const promise =  await fetch('/data.json')
    const data = await promise.json()
    console.log(data, 'dataFROMFILE')
    return data
}

