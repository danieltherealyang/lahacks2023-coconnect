// Each tutor object has the following properties:
// - name: string
// - rating: number (out of 5)
// - subjects: array of strings
// - location: string (city name or "remote")
// - experience: string
// - price: float
// - tutor and tutee are single objects while tutors and tutees are arrays of all of the respective objects.

class Tutor {
  constructor(
    firstname,
    lastname,
    email,
    password,
    subjects,
    location,
    experience,
    price,
    interests
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password;
    this.rating = -1;
    this.subjects = subjects;
    this.location = location;
    this.experience = experience;
    this.price = price;
    this.interests = interests;
  }
}

class Tutee {
  constructor(
    firstName,
    lastName,
    email,
    password,
    location,
    subjects,
    gpa,
    interests
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.location = location;
    this.subjects = subjects;
    this.gpa = gpa;
    this.interests;
    this.matches = []; // Array to store Tutor objects that the Tutee matches with
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

function recommendTutees(tutor, tutees) {
  const matchingTutees = tutees.filter((tutee) => {
    return tutee.location === tutor.location;
  });

  matchingTutees.sort((a, b) => {
    if (a.location === tutor.location && b.location === tutor.location) {
      return Math.random() - 0.5; // Randomize order within location group
    } else if (a.location === tutor.location) {
      return -1; // Move Tutees with same location to the front
    } else if (b.location === tutor.location) {
      return 1; // Move Tutees with same location to the front
    } else {
      return 0;
    }
  });

  return matchingTutees;
}
