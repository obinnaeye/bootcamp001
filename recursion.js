function  sumRange(range) {
    if(range == 0) {
        return range
    }
    return range + sumRange(range - 1)
}

console.log(sumRange(5))

// Round 1: 10 + sumRange(9)
// Round 2: 10 + 9 + sumRange(8)
// Round 3: 10 + 9 + 8 + sumRange(7)
// Round 4: 10 + 9 + 8 + 7 + sumRange(6)
// Round 5: 10 + 9 + 8 + 7 + 6 + sumRange(5)
// Round 6: 10 + 9 + 8 + 7 + 6 + 5 + sumRange(4)
// Round 7: 10 + 9 + 8 + 7 + 6 + 5 + 4 + sumRange(3)
// Round 8: 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + sumRange(2)
// Round 9: 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + sumRange(1)
// Round 10: 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + sumRange(0)
// Round 11: 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0


// GIT git
