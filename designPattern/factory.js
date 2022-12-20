"use strict"

// 팩토리 패턴
class Car {
	constructor(info) {
		this.name = info.name;
		this.price = info.price;
	}

	getInfo() {
		return this.name + "의 가격은 " + this.price + " 입니다.";
	}

	static factory(name) {
		if (name === "Avante") {
			return new Avante();
		} else if (name === "Sonata") {
			return new Sonata();
		}
	}
}

class Sonata extends Car {
	constructor() {
		super({name: "쏘나타", price: "2,386 ~ 3,367만원"});
	}
}

class Avante extends Car {
	constructor() {
		super({name: "아반떼", price: "1,570 ~ 2,453만원"});
	}
}

const avante = Car.factory("Avante");
const sonata = Car.factory("Sonata");

console.log(avante, sonata);