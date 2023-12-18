// FIREBASE GET ALL FUNCTION
export const dataCompile = async (getDocsCb, databaseColection, stateData, stopLoading) => {
    const data = await getDocsCb(databaseColection)
    const compileInfo = data.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id
    }))
    const processedData = compileInfo.map(prod => {
      let muscleArray;
      if (typeof prod.muscle === 'string') {
        try {
          muscleArray = JSON.parse(prod.muscle.replace(/'/g, '"'));
        } catch (error) {
          muscleArray = [prod.muscle];
        }
      } else {
        muscleArray = prod.muscle;
      }
      return { ...prod, muscle: muscleArray };
    });
    stateData(processedData);
    stopLoading ? stopLoading(false) : null
}