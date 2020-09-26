export function getByteSize(str: string):number {
    if(typeof str !== 'string') {
        throw new Error("argument of the geyByteSize function must be a string")
    }
    const byteSize = Array.from(str).reduce((byteSize, char) => {
        const charCode = char.charCodeAt(0)
        if(charCode >> 11) {
            return byteSize + 3;
        } 
        if(charCode >> 7) {
            return byteSize + 2;
        }
        return byteSize + 1;
    }, 0);
    return byteSize
}

// TODO: 테스트
// console.log(getByteSize("kkh")) // 3
// console.log(getByteSize("김기현")) // 9
// console.log(getByteSize("kihyun kim")) // 10
// console.log(getByteSize("kihyun\nkim")) // 10
// console.log(getByteSize("大韓民國")) // 4