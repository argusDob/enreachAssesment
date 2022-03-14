function personsIncome() {
  let promisesList = [],
    totalIncome = 0;
  const personsList = getPersons();
  const service = services();

  function calculateIncome() {
    personsList.map(function(person) {
      if (person.age >= 35) {
        let thePerson = {
          ...person
        }
        let randomIncome = Math.random() * (1000 - 500) + 500;
        if(typeof randomIncome !== 'undefined'){
        var roundedIncome = Math.round(randomIncome * 10) / 10
        thePerson.income = roundedIncome;
        }
        const promise = service.getPersons(thePerson);
        promisesList.push(promise);
      }
    });
  }

  function calculateAverageIncome(response) {
    let averageIncome = 0;
    if (typeof response === "undefined" || response.length === 0) {
      console.warn("Wrong configuration")
      return
    }
    response.forEach(function(person) {
      if (typeof person.income !== 'undefined' || person.hasOwnProperty("income")) {
        totalIncome += person.income
      } else {
        console.warn("Income is undefined")
        totalIncome = 0
      }
    })
    averageIncome = totalIncome / response.length;
    console.log("The average income is: ", averageIncome)
    return averageIncome;
  }

  function fetchMyPersons() {
    calculateIncome();
    if(promisesList.length === 0) { 
        console.warn("Promise list should have lentght")
        return;
    }
    Promise.all(promisesList).then(function(response) {
      let dde = new BuiltList(response);
      dde.builtHTMLlist();
      calculateAverageIncome(response)
    })
    .catch(function(error){
        console.error(error)
    })
  }
  return {
    fetchPersons: fetchMyPersons
  }
}


const myPersonsIncome = personsIncome();
myPersonsIncome.fetchPersons();
