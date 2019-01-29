/*
Problem:

Your program must destroy the enemy ships by shooting the closest enemy on each turn.
 	Rules
On each start of turn (within the game loop), you obtain information on the two closest enemies:
enemy1 and dist1: the name and the distance to enemy 1.
enemy2 and dist2: the name and the distance to enemy 2.
Before your turn is over (end of the loop), output the value of either enemy1 or enemy2 to shoot the closest enemy.



*/

// game loop
while (true) {
    var enemy1 = readline(); // name of enemy 1
    var dist1 = parseInt(readline()); // distance to enemy 1
    var enemy2 = readline(); // name of enemy 2
    var dist2 = parseInt(readline()); // distance to enemy 2

    // Write an action using print()
    
    // Enter the code here
    
    if (dist1 < dist2) {
        print(enemy1);
    } else {
        print(enemy2);
    }

}