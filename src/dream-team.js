module.exports = function createDreamTeam(members) {
    if (members instanceof Array === false) return false;
    let onlyStrings = members.filter(e => typeof e === 'string' && e !== '');
    onlyStrings = onlyStrings.map(function(el) {
        return el.toUpperCase().trim();
    });
    onlyStrings.sort();
    const firstLetter = onlyStrings.map(([v]) => v);
    let result = firstLetter.join("")
    return result;
};