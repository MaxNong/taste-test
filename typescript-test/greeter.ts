class Hello implements HellType{
    name: string;
    constructor (name: string) {
        this.name = name;
    }
    sayHello(): void {
        
    }
}

interface HellType {
    name: string;
    sayHello(): void;
}

class HelloController {
    constructor(private readonly helloService: Hello) {}
}