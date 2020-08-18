//1. 1) Constant? 2)Linear?

//2. Constant, the number of operations doesn't change based off the input size

//3. O(n^k), 2 levels of looping

//4. O(n), number of operations scales linearly with the size of the array input

//5. O(n)

//6. O(n^2)

//7. Returns Fibonaci Sequence up to num, O(n)

//8. O(log(n)), The search size gets cut in half after each check

//9. O(1)

//10. Checks to see if n is a prime number, O(n)

//11.

function printTowerHanoi(discs){
  let RodA = [];
  for(let i = 1; i <= discs; i++){
    RodA.push(discs-i+1);
  }
  let RodB = [];
  let RodC = [];

  //Moves a Ring from one rod to another
  function moveRing(RodFrom,RodTo){
    const Ring = RodFrom[RodFrom.length-1];
    RodTo.push(Ring);
    RodFrom.pop();  
    console.log(RodA,RodB,RodC);
  }

  //recursive function
  function towerHanoi(rings, origin,destination,temp){
    if(rings === 1){
      moveRing(origin,destination);
    }else{
      towerHanoi(rings-1,origin,temp,destination);
  
      moveRing(origin,destination);

      towerHanoi(rings-1,temp,destination,origin);
    }
  }

  console.log(RodA,RodB,RodC);

  towerHanoi(discs,RodA,RodC,RodB);
}

printTowerHanoi(5);

// console.log(isRodStackComplete([4,3,1]));