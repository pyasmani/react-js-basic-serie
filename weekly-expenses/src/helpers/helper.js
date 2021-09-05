export const validateBudget = budget => {
    let totalBudget = parseInt(budget, 10) || 0;

    if (totalBudget > 0) {
        return totalBudget;
    } else {
        return false;
    }
}

export const checkBudget = (budget, remanent) => {
    let classs;
    if ((budget / 4) > remanent) {
        classs = 'alert alert-danger';
    } else if ((budget / 2) > remanent) {
        classs = 'alert alert-warning'
    } else {
        classs = 'alert alert alert-success';
    }
    return classs;
}