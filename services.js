function services() {
  return {
    getPersons: function(persons) {
      return new Promise((resolve, reject) => {
        if(typeof persons.income === "undefined") { reject("Income is undefined")}
        const randomTime = persons.income
        try {
            setTimeout(() => {
            resolve(persons);
          }, randomTime);
        } catch(e) {
            console.log(e)
          reject();
        }
      });
    },
  }

}
