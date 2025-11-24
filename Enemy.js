// Define monster and attack
class Enemy{
    // define attributes
    constructor(name, hp, atk, def, exp, money) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.exp = exp;
        this.money = money;
    }
}
// Give values
// Green<Red<Bat<Skeleton(difficulty)
const ENEMY_STATS = {
    8: new Enemy("Red Slime", 60, 14, 2, 3, 3), // SLIME_RED
    9: new Enemy("Green Slime", 50, 10, 1, 2, 2), // SLIME_GREEN
    10: new Enemy("Bat", 80, 18, 3, 4, 4), //BAT
    11: new Enemy("Skeleton", 120, 24, 6, 6, 6) // SKELETON
};
// Define battle function: if player win then he gets enemy's hp and money, else died
function battle(enemyID) {
    // Make a copy so ENEMY_STATS template is not modified
    const base = ENEMY_STATS[enemyID];
    const enemy = new Enemy(
        base.name,
        base.hp,
        base.atk,
        base.def,
        base.exp,
        base.money
    );
    // Give player attention
    console.log(`You encountered a ${enemy.name}.`);
    // Player attack first
    while (player.hp > 0 && enemy.hp > 0) {
        // First: Player attacks enemy
        const damageToEnemy = Math.max(player.atk - enemy.def, 1);
        enemy.hp -= damageToEnemy;
        // Give damage info
        console.log(`You dealt ${damageToEnemy} to ${enemy.name}. Enemy HP: ${enemy.hp}`);
        // If win the enemy then jump out
        if (enemy.hp <= 0) {
            break;
        }
        // If both alive then enemy attacks player
        const damageToPlayer = Math.max(enemy.atk - player.def, 1);
        player.hp -= damageToPlayer;
        console.log(`${enemy.name} dealt ${damageToPlayer} to you. Your HP: ${player.hp}`);
    }
    if (player.hp <= 0) {
        // Player died
        console.log('Died');
        return false;
    }
    // If player wins then he gains enemy's exp and money
    player.totalExp += enemy.exp;
    player.money += enemy.money;
    console.log(
        `You defeated ${enemy.name}! +${enemy.exp} EXP, +${enemy.money} money.`
    );
    return true;
}





