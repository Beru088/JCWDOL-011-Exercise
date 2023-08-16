//soal 01
var panjang = 10
var lebar = 5

const area = panjang * lebar
console.log("luas persegi panjang =", area)

//soal 02
const perimeter = (panjang + lebar) * 2
console.log("keliling persegi panjang =", perimeter)

//soal 03
var radius = 5

// diameter lingkaran
const diameter = 2 * radius
console.log("diameter lingkaran =", diameter)

// keliling lingkaran
const circumference = 2 * Math.PI * radius
console.log("keliling lingkaran =", circumference)

// luas lingkaran
const areaCircle = Math.PI * radius * radius
console.log("luas lingkaran =", areaCircle)

//soal 04
var angle1 = 30
var angle2 = 90

const angle3 = 180 - (angle1 + angle2)
console.log("sudut ke tiga =", angle3)

//soal 05
var date1 = new Date("2023-07-17")
var date2 = new Date("2023-07-24")

// selisih dari dua tanggal
const perbedaanMiliDetik = date2 - date1

// mengubah milli detik menjadi hari
const perbedaanHari = Math.abs(perbedaanMiliDetik / (1000 * 60 * 60 * 24))
//absolute karena selisih hari tidah boleh negatif

console.log("perbedaan tanggal dengan format hari = ", perbedaanHari, " hari")

//soal 06
//total hari ke tahun
var totalHari = 400

var tahun = Math.floor(totalHari / 365)
var sisaHari = totalHari % 365
var sisaBulan = Math.floor(sisaHari / 30)
sisaHari %= 30

console.log(
  `total hari = ${totalHari}, menjadi ${tahun} tahun ${sisaBulan} bulan dan ${sisaHari} hari`
)

//tahun ke hari
var totalTahun = 3

var hari = totalTahun * 365
console.log("total tahun = ", totalTahun, ", menjadi ", hari, " hari")

//bulan ke hari
var totalBulan = 2

var hari2 = totalBulan * 30
console.log("total bulan = ", totalBulan, ", menjadi ", hari2, " hari")
