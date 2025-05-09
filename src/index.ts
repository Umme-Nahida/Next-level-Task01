
    //---------------------------Problem Num 1 & solution--------------------------//
    function formatString(input: string, toUpper?: boolean): string {
        if(toUpper!=false){
           return input.toUpperCase();
        }else{
            return input.toLowerCase();
        }
    }

  //  const result1 = formatString("Allah",false)
  //  console.log(result1)





    //---------------------------Problem Num 2 & solution--------------------------//
     function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] | void{
        const filteredProduct = items.filter((product)=>product.rating >= 4)
        return filteredProduct;
     }

     const books = [
      { title: "Book A", rating: 4.5 },
      { title: "Book B", rating: 3.2 },
      { title: "Book C", rating: 5.0 }
    ];
    
    const result2= filterByRating(books);
    console.log(result2)

     //---------------------------Problem Num 3 & solution--------------------------//
     function concatenateArrays<T>(...arrays: T[][]): T[] | void{
        return arrays.reduce((acc, curr) => [...acc,...curr], []);
         
     }

    const result3= concatenateArrays(["a", "b"], ["c"]);  
    console.log(result3)




     //---------------------------Problem Num 4 & solution--------------------------//

     class Vehicle {
        make:string;
        year:number;

        constructor(make:string,year:number){
            this.make = make;
            this.year = year
        }

        getInfo(){
            return `Make: ${this.make}, Year: ${this.year}`;
        }
     }

     
     class Car extends Vehicle{
        model:string;

        constructor(make:string,year:number,model:string){
            super(make,year)
            this.model = model
        }

        getModel(){
            return `model: ${this.model}`
        }
        
     }


     const myCar = new Car("Toyota", 2020, "Corolla");
     myCar.getInfo();
     myCar.getModel();  





      //---------------------------Problem Num 5 & solution--------------------------//
      function processValue(value:string | number) :number{
        if(typeof value == "string"){
           return (value as string).length;
        }else{
            return value * 2;
        }
      }

      const result5 = processValue("jhanker Mahbub is my favourite teacher")
      console.log(result5);


     


       //---------------------------Problem Num 6 & solution--------------------------//

       interface Product {
        name: string;
        price: number;
      }
      
      function getMostExpensiveProduct(products: Product[]): Product | null{
        const maxPricedProduct = products.reduce((max,current)=> current.price > max.price ? current : max)
        return maxPricedProduct
      }

      const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
      ];
      
     const result6 = getMostExpensiveProduct(products);
     console.log(result6)





     //---------------------------Problem Num 7 & solution--------------------------//
     enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
      function getDayType(day: Day): string{
        if(day == Day.Sunday || day==Day.Saturday){
            return "Weekend"
        }else{
            return "Weekday "
        }
      }

     console.log(getDayType(Day.Saturday)) 



       //---------------------------Problem Num 8 & solution--------------------------//
     async function squareAsync(n: number): Promise<number>{
        if(n<0){
            throw new Error("Negative number not allowed");
            
        }
        return new Promise<number>((resolve,reject)=>{
            setTimeout(()=>{
              resolve(n*n)
            },1000)
        })
    }

    squareAsync(4)
    .then(data=>console.log(data))
    



    