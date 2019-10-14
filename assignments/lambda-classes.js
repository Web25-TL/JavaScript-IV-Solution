// CODE here for your Lambda Classes

class Person {
	constructor(attrs) {
		this.name = attrs.name;
		this.location = attrs.location;
		this.age = attrs.age;
		this.gender = attrs.gender;
	}

	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}`;
	}
}

class Instructor extends Person {
	constructor(instAttrs) {
		super(instAttrs);
		this.specialty = instAttrs.specialty;
		this.favLanguage = instAttrs.favLanguage;
		this.catchPhrase = instAttrs.catchPhrase;
	}

	demo(subject) {
		return `Today we are learning about ${subject}`;
	}

	grade(student, subject) {
		return `${student.name} receives a perfect score on ${subject}`;
	}

	gradeAssignment(student) {
		let score = Math.round(Math.random() * 100);
		student.grade = (student.grade + score) / 2;
		if (score < 65) {
			return `${student.name}, please see me after class. A score of ${score} is unnacceptable.`;
		} else if (score < 85) {
			return `${student.name}, your score of ${score} will suffice.`;
		} else {
			return `${student.name}, you did very well on this assignment with a score of ${score}. You're amazing!`;
		}
	}
}

class Student extends Person {
	constructor(stuAttrs) {
		super(stuAttrs);
		this.previousBackground = stuAttrs.previousBackground;
		this.className = stuAttrs.className;
		this.favSubjects = stuAttrs.favSubjects;
		this.grade = stuAttrs.grade;
	}

	listsSubjects() {
		return this.favSubjects;
	}

	PRAssignment(subject) {
		return `${this.name} has submitted a PR for ${subject}`;
	}

	sprintChallenge(subject) {
		return `${this.name} has begun sprint challenge on ${subject}`;
	}
}

class ProjectManager extends Instructor {
	constructor(pMAtters) {
		super(pMAtters);
		this.gradClassName = pMAtters.gradClassName;
		this.favInstructor = pMAtters.favInstructor;
	}

	standUp(channel) {
		return `${this.name} announes to ${channel}, @channel standy times!`;
	}

	debugsCode(student, subject) {
		return `${this.name} debugs ${student.name}'s code on ${subject}`;
	}
}
