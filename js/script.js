function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // convert to meters
    var age = parseInt(document.getElementById('age').value);
    var gender = document.querySelector('input[name="gender"]:checked').value;
  
    var errorMessages = [];

    if (!weight) {
      errorMessages.push("Mohon isi kolom Berat Badan dengan angka.");
    }
  
    if (!height) {
      errorMessages.push("Mohon isi kolom Tinggi Badan dengan angka.");
    }
  
    if (!age) {
      errorMessages.push("Mohon isi kolom Usia dengan angka.");
    }
  
    if (errorMessages.length > 0) {
      alert(errorMessages.join('\n'));
      return;
    }

    var bmi = weight / (height * height);
    var category = '';
    var description = '';
    
    if (bmi < 18.5) {
      category = 'Kekurangan Berat Badan';
      description = 'Anda memiliki berat badan di bawah normal. Untuk menjaga kesehatan Anda, pertahankan pola makan seimbang dan gaya hidup yang sehat.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Normal';
      description = 'Berat badan Anda dalam kisaran normal. Pertahankan pola makan yang seimbang dan rutin berolahraga untuk menjaga kesehatan Anda.';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      category = 'Kelebihan Berat Badan';
      description = 'Anda memiliki kelebihan berat badan. Untuk mengurangi risiko penyakit, pertimbangkan untuk mengadopsi pola makan sehat dan rutin berolahraga.';
    } else {
      category = 'Obesitas';
      description = 'Anda memiliki risiko tinggi terhadap berbagai penyakit. Konsultasikan dengan dokter atau ahli gizi untuk merencanakan program penurunan berat badan yang aman dan efektif.';
    }
    
    var resultCat = category;
    var resultBMI = bmi.toFixed(2);
    var resultDes = description;
    
    var result =  resultCat + " \n " + resultBMI + " \n " + resultDes;
    document.getElementById('result').innerText = result;
    
  
    // Membuat laporan PDF
    var doc = new jsPDF();
    doc.text("Hasil Kalkulator BMI", 10, 10);
    doc.text("Berat Badan: " + weight + " kg", 10, 20);
    doc.text("Tinggi Badan: " + height * 100 + " cm", 10, 30);
    doc.text("Usia: " + age, 10, 40);
    doc.text("BMI Anda: " + bmi.toFixed(2), 10, 50);
    doc.text("Kategori: " + category, 10, 60);
    doc.save("laporan_bmi.pdf");
  }
  