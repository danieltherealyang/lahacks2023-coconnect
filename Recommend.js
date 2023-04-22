// Each tutor object has the following properties:
// - name: string
// - rating: number (out of 5)
// - subjects: array of strings
// - location: string (city name or "remote")
// - experience: string
// - price: float

class Tutor {
  constructor(name, rating, subjects, location, experience, price) {
    this.name = name;
    this.rating = rating;
    this.subjects = subjects;
    this.location = location;
    this.experience = experience;
    this.price = price;
  }
}

function recommendTutors(tutee, tutors) {
  // Filter out tutors that don't match any of the tutee's subjects
  const matchingTutors = tutors.filter((tutor) => {
    return tutor.subjects.some((subject) => tutee.subjects.includes(subject));
  });

  // Sort the matching tutors by rating (highest to lowest)
  matchingTutors.sort((a, b) => b.rating - a.rating);

  // Sort the matching tutors further based on availability of location
  if (tutee.location === "Remote") {
    matchingTutors.sort((a, b) => {
      if (a.location === "Remote" && b.location === "Remote") {
        return b.rating - a.rating;
      } else if (a.location === "Remote") {
        return -1;
      } else if (b.location === "Remote") {
        return 1;
      } else {
        return b.rating - a.rating;
      }
    });
  } else {
    matchingTutors.sort((a, b) => {
      if (a.location === tutee.location && b.location === tutee.location) {
        return b.rating - a.rating;
      } else if (a.location === tutee.location) {
        return -1;
      } else if (b.location === tutee.location) {
        return 1;
      } else {
        return b.rating - a.rating;
      }
    });
  }

  return matchingTutors;
}
