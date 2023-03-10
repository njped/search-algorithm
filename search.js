function jumpSearch(array, targetSearch) {
    const length = array.length
    let step = Math.floor(Math.sqrt(length))
    let lower_Bound = 0
    while (array[Math.min(step, length) - 1] < targetSearch) {
        lower_Bound = step
        step += lower_Bound
        if (lower_Bound >= length) {
            return -1
        }
    }
    const upper_Bound = Math.min(step, length)
    while (array[lower_Bound] < targetSearch) {
        lower_Bound++
        if (lower_Bound === upper_Bound) {
            return -1
        }
    }
    if (array[lower_Bound] === targetSearch) {
        return lower_Bound
    }
    return -1
}