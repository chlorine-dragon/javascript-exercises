// const findTheOldest = function(arr) {
//
//   const currentYear = new Date().getFullYear();
//   const ages = arr.map(({ yearOfBirth, yearOfDeath }) =>
//   (yearOfDeath ?? currentYear - yearOfBirth
// );
//   const maxAge = Math.max(...ages);
//   const oldest = arr[ages.indexOf(maxAge)];
//   return oldest.name;
// };

const findTheOldest = function(arr) {
  const currentYear = new Date().getFullYear();

  const oldest = arr.reduce((oldest, person) => {
    const agePerson = (person.yearOfDeath ?? currentYear) - person.yearOfBirth;
    const ageOldest = (oldest.yearOfDeath ?? currentYear) - oldest.yearOfBirth;
    return agePerson > ageOldest ? person : oldest;
  });

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
