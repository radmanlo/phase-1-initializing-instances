// Write your code here

class Breakfast{

    //constructor
    constructor( food, drink){
        this.food = food
        this.drink = drink
    }
}

class Lunch{

    // constructor
    constructor( salad, soup, drink){
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}

class Dinner{
    
    //private variable
    #dessert

    //constructor
    constructor( salad, soup, entree, dessert){
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this.#dessert = dessert
    }

}