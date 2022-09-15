// console.log('👻');

const filterByGroupName = (property) => {
    
    // Created a null object, thus I'll be able to push some values into it.
    const resultObj = {
        "group": null,
        "student": [],
        "assistant": null
    };
    
    //fetched the data, and checked if the group name matched with our parameter (which is called property).

    fetch('/assets/data/data.json')
    .then(response => response.json())
    .then(data => data.filter(person => person.group === property)

    // then iterated in the results whose are matched with the property
    .forEach(person => {
        resultObj.group = property
        person.type ? resultObj.assistant = person.name : resultObj.student.push(person.name)
    }))

    // catched if there is an error
    .catch(error => alert(error));

    return resultObj;
}

console.log(filterByGroupName("YellowGreen"));