function diffArray (arr1, arr2) {
    const filtered1 = arr1.filter((el)=> !arr2.includes(el))
    const filtered2 = arr2.filter((el)=> !arr1.includes(el))

    const res = [...filtered1, ...filtered2]
    return res
}


diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"])