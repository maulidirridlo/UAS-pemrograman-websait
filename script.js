// Website Pondok Pesantren An-Nur - Ridho - 43050250055 - 3B TI

// 1. Sapaan sesuai jam
function buatSapaan(waktu) {
  return "Selamat " + waktu + ", selamat datang di Pondok Pesantren An-Nur";
}

let jam = new Date().getHours();
let waktu;

if (jam < 10) {
  waktu = "pagi";
} else if (jam < 15) {
  waktu = "siang";
} else if (jam < 18) {
  waktu = "sore";
} else {
  waktu = "malam";
}

document.querySelector("#sapaan").textContent = buatSapaan(waktu);

// 2. Kegiatan santri (array of objects) - Hover di desktop & sentuh di HP
let kegiatan = [
  { kategori: "Harian", nama: "Sholat jamaah 5 waktu" },
  { kategori: "Harian", nama: "Waqi'ahan dan ngaji subuh", foto: "waqiah.jpeg" },
  { kategori: "Harian", nama: "Qur'anan" },
  { kategori: "Harian", nama: "Asmaul Husna" },
  { kategori: "Harian", nama: "Sorogan Al-Qur'an setelah Maghrib", foto: "sorogan quran.jpeg" },
  { kategori: "Harian", nama: "Madin (mengaji kitab)" },
  { kategori: "Harian", nama: "Syawir" },
  { kategori: "Mingguan", nama: "Roan akbar (bersih-bersih pondok) setiap hari Minggu" },
  { kategori: "Mingguan", nama: "Yasinan setelah Maghrib di malam, madin diganti Dzibaan" },
  { kategori: "Mingguan", nama: "Yasinan bersama warga desa setiap malam Minggu setelah Maghrib" },
  { kategori: "Mingguan", nama: "Ziarah makam" },
  { kategori: "Mingguan", nama: "Mujahadah" },
  { kategori: "Mingguan", nama: "Khitobah", foto: "khitobah.jpg" },
  { kategori: "Bulanan", nama: "Dzikir Manaqib Syekh Abdul Qodir Jaelani" },
  { kategori: "Tahunan", nama: "Akhirussanah", foto: "akhirussanah.jpg" },
  { kategori: "Tahunan", nama: "Mafia Santri", foto: "mafia santri.jpg" },
  { kategori: "Tahunan", nama: "Peringatan HSN", foto: "peringatan hari santri.jpeg" },
  { kategori: "Tahunan", nama: "Ziarah makam wali (Bagi Santri 3 sanawi)", foto: "ziarah makam wali.png" },
  { kategori: "Tahunan", nama: "Peringatan 17 Agustus", foto: "kegiatan 17an.jpg" },
  { kategori: "Tahunan", nama: "Haul masyayikh", foto: "ziarah makom abah.jpg" },
  { kategori: "Tahunan", nama: "Cek Kesehatan Santri", foto: "cek kesehatan santri.jpg" }
];

let kategoriList = ["Semua", "Harian", "Mingguan", "Bulanan", "Tahunan"];
let wadahFilter = document.querySelector("#filter");
let daftarKegiatan = document.querySelector("#daftar-kegiatan");

let ikon = {
  Harian: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
  Mingguan: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  Bulanan: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/>',
  Tahunan: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
};

function tampilkanKegiatan(pilihan) {
  daftarKegiatan.innerHTML = "";

  kegiatan.forEach(function (item) {
    if (pilihan === "Semua" || item.kategori === pilihan) {
      let li = document.createElement("li");
      li.className = "kartu-kegiatan";
      li.innerHTML =
        '<div class="ikon"><svg viewBox="0 0 24 24" aria-hidden="true">' + (ikon[item.kategori] || '') + "</svg></div>" +
        "<h3>" + item.nama + "</h3><p>" + item.kategori + "</p>";

      if (item.foto) {
        let foto = document.createElement("div");
        foto.className = "foto-hover";
        let gambar = document.createElement("img");
        gambar.src = encodeURI("images/kegiatan/" + item.foto);
        gambar.alt = item.nama;
        gambar.loading = "lazy";
        gambar.addEventListener("error", function () { foto.remove(); li.classList.remove("ada-foto"); }, { once: true });
        let judul = document.createElement("span");
        judul.textContent = item.nama;
        foto.appendChild(gambar);
        foto.appendChild(judul);
        li.appendChild(foto);
        li.classList.add("ada-foto");

        li.addEventListener("touchstart", function () {
          li.classList.toggle("buka");
        }, { passive: true });
      }

      daftarKegiatan.appendChild(li);
    }
  });

  wadahFilter.querySelectorAll("button").forEach(function (tombol) {
    tombol.classList.toggle("aktif", tombol.textContent === pilihan);
  });
}

kategoriList.forEach(function (nama) {
  let tombol = document.createElement("button");
  tombol.type = "button";
  tombol.textContent = nama;
  tombol.addEventListener("click", function () {
    tampilkanKegiatan(nama);
  });
  wadahFilter.appendChild(tombol);
});

tampilkanKegiatan("Semua");

// 3. Fasilitas (7 item)
let fasilitas = [
  { nama: "Kamar santri", foto: "images/kamar.jpeg" },
  { nama: "Tempat madin", foto: "images/madin.jpeg" },
  { nama: "Wifi", foto: "images/wifi.jpeg" },
  { nama: "Kamar mandi", foto: "images/kamarmandi.jpeg" },
  { nama: "Dapur", foto: "images/dapur.jpeg" },
  { nama: "Area parkir", foto: "images/parkiran.jpeg" },
  { nama: "Kantin", foto: "images/kantin.jpeg" }
];

let daftarFasilitas = document.querySelector("#daftar-fasilitas");
daftarFasilitas.innerHTML = "";

fasilitas.forEach(function (item) {
  let li = document.createElement("li");
  li.innerHTML = '<div class="fasilitas-card">' +
                   '<img src="' + item.foto + '" alt="' + item.nama + '">' +
                   '<span>' + item.nama + '</span>' +
                 '</div>';
  daftarFasilitas.appendChild(li);
});

// 4. Validasi form minat mendaftar
let form = document.querySelector("#form-daftar");
let pesanForm = document.querySelector("#pesan-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let nama = document.querySelector("#nama").value.trim();
  let hp = document.querySelector("#hp").value.trim();
  let jenis = document.querySelector("#jenis").value;

  if (nama === "") {
    pesanForm.textContent = "Nama calon santri belum diisi.";
    pesanForm.className = "salah";
  } else if (!/^[0-9]{10,13}$/.test(hp)) {
    pesanForm.textContent = "Nomor HP harus berupa angka, 10 sampai 13 digit.";
    pesanForm.className = "salah";
  } else {
    pesanForm.textContent =
      "Terima kasih. Data " + nama + " (pondok " + jenis + ") sudah benar. Hubungi pengurus lewat WhatsApp untuk lanjut mendaftar.";
    pesanForm.className = "benar";
    form.reset();
  }
});

// 5. Floating Pill Toggle di layar HP (klik logo untuk buka/tutup menu)
let logoToggle = document.querySelector("#logo-toggle");
let navbarPill = document.querySelector("#navbar-pill");
let menu = document.querySelector("#menu");

logoToggle.addEventListener("click", function (event) {
  if (window.innerWidth <= 768) {
    event.preventDefault();
    navbarPill.classList.toggle("buka");
  }
});

menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navbarPill.classList.remove("buka");
  });
});