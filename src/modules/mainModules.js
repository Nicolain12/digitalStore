// FIREBASE GET FUNCTION
export const fbGetCall = async (getDocCb, table)=>{
    const data = await getDocCb(table)
    const compileInfo = data.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id
    }))
    return compileInfo
}