/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const createCache = (str) => {
    return str.split('').reduce((acc, cur) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1;
        return acc;
    }, {});
}

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    
    const cacheS = createCache(s)
    
    const cacheT = createCache(t)
    
    for (const char in cacheT) {
        if (cacheT[char] !== cacheS[char] || !cacheS[char]) return false;
    }
    return true;
};