// // * Example 1
//     const myArr = [1,2,3,4];
//     const myOtherArr = myArr;
//     myArr.pop();
//     console.log(myArr) // * Will pass by in value, pass by in reference. Output: [ 1, 2, 3 ]
//     console.log(myOtherArr) // * Output: [ 1, 2, 3 ]

// // * Example 2
//     let myStr = "Hello"
//     let myOtherStr = myStr
//     myStr = "Hi" //* Passes by but is a different value than line 9
//     console.log(myOtherStr)
//     console.log(myStr)

//* Example 3
    //? Three ways to declare a variable
    //* var, let, const; you want to narrow the scope rather than keep it broad as often as possible
    //* Const does not let you reassign something that has been declared, var let's you. It is the only difference
    //* Only want to use let if you are reassigning it
    function double(num){
        var num2 = 2
        for (let i=0; i<10;i++){
            console.log(i)
        }
        return num2 * num;
    }

    const immutableArr = ["apple", "bannana", "tomato"] //What if this had been another array? const immutableArr = ["apple", "bannana", "tomato", ["lentils","beans"], "tomato"] 
    Object.freeze(immutableArr);

    // const actuallyFruit = [...immutableArr] 
    // actuallyFruit.pop();
    // console.log(actuallyFruit); //! This is the spread operator
    
    const actuallyFruit = immutableArr.slice(0,2) //! Slice gets a shallow copy, it will not pull the "tomato" after the array because it is stopping at the area that is why you would use the spread operator over the shallow copy
    console.log(actuallyFruit);