export function filterProductsByMuscles(searchValues, database) {
    if (searchValues.length === 0) {
      return database;
    }
    return database.filter(product => {
      return (
        Array.isArray(product.muscle) ?
          product.muscle.some(muscle => searchValues.includes(muscle)) :
          searchValues.includes(product.muscle)
      );
    });
  }
