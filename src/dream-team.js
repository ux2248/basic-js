const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let team = [];
    for (m of members) {
      if (typeof(m) === "string") team.push(m.trim().toUpperCase()[0]);
    }
    return (team.sort().join(""));
  }
  return false;
}