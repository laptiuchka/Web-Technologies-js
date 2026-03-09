function getStudentStatus(score) {
    if (score >= 90) return "Excellent";
    if (score >= 75) return "Good";
    if (score >= 60) return "Satisfactory";
    return "Unsatisfactory";
}

function determineSeason(month) {
    
    let resultIf;
    if (month === 12 || month <= 2) resultIf = "Winter";
    else if (month <= 5) resultIf = "Spring";
    else if (month <= 8) resultIf = "Summer";
    else resultIf = "Autumn";


    let resultTernary = (month === 12 || month <= 2) ? "Winter" :
                        (month <= 5) ? "Spring" :
                        (month <= 8) ? "Summer" : "Autumn";

    return { ifMethod: resultIf, ternaryMethod: resultTernary };
}

console.log("\n Task 3 Results ");
console.log("Grade for 82 points:", getStudentStatus(82));
const seasonData = determineSeason(8); 
console.log("Season analysis for month 8:", seasonData.ternaryMethod);