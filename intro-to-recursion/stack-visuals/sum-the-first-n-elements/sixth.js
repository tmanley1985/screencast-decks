/************************
 * SECOND CALL
 ***********************/

{
    if (2 === 0)
        return 0
    
    return 3 + 2 // 5
}

/************************
 * FIRST CALL
 ***********************/

{
    if (3 === 0)
        return 0
    
    return 4 + sum([2,3,4,5], 3 - 1)
}