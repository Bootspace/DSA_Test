const twoSum = (nums, target) => {
    for(let i = 0; i< nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++ ) {
            if(nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
}

const twoSum2 = (nums, target) => {
    const map = {};
    for(let i = 0; i< nums.length; i++) {
        const complement = target - nums[i];
        if(map.hasOwnProperty(complement)) {
            return [map[complement], i]
        }
        map[nums[i]] = i;
    }
}

// console.log(twoSum2([4, 7, 23, 2], 9));

const sorted2Sum = (nums, target) => {
    let maps = {};
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(maps.hasOwnProperty(complement)) {
            return [ (maps[complement]) + 1, i + 1];
        }
        maps[nums[i]] = i;
    }
}

console.log(sorted2Sum([4, 7, 23, 2], 9));