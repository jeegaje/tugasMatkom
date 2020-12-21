var konversiDetik = function(x) {
  var detik = x % 60;
  var sisaDetik = (x - detik) / 60
  var menit = sisaDetik % 60;
  var sisaMenit = (sisaDetik - menit) / 60;
  var jam = sisaMenit % 24;
  var sisaJam = (sisaMenit - jam) / 24;
  var hari = sisaJam
  return console.log('HASIL KONVERSI\n====================\n' + hari + ' hari\n' + jam + ' jam\n' + menit + ' menit\n' + detik + ' detik\n====================')
}
