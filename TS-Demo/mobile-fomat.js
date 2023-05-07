function mobileFormat(mobileNo) {
    return mobileNo.slice(0, 3) + '-' + mobileNo.slice(4, 6) + '-' + mobileNo.slice(6);
}
console.log(mobileFormat('08912345687'));
console.log(mobileFormat('08945645687'));
