/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    
    const cacheS = s.split('').reduce((acc, cur) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1;
        return acc;
    }, {});
    
    const cacheT = t.split('').reduce((acc, cur) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1;
        return acc;
    }, {});
    
    for (const char in cacheT) {
        if (cacheT[char] !== cacheS[char] || !cacheS[char]) return false;
    }
    return true;
};