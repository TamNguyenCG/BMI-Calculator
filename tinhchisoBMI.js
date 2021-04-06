let a=prompt("Nhập cân nặng")
let b=prompt("Nhập chiều cao")
BMI=a/(b*b);
if (BMI >= 18.5) {
    alert('Bạn hơi gầy')
} else if (18.5 <= BMI&&BMI <= 24.9) {
    alert('Bình thường')
}else if (25 <= BMI&&BMI  <= 29.9) {
    alert('Bạn hơi mập')
}else if (30 <=BMI&&BMI  <= 34.9) {
    alert('Bạn béo cấp 1')
}else if (35 <= BMI&&BMI  <= 39.9) {
    alert('Bạn béo cấp 2')
}else{
    alert('Nguy hiểm !!! Bạn nên chú ý sức khỏe')
}

