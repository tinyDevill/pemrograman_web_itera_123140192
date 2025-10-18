Di dalam repository berikut ini merupakan aplikasi web **Manajemen Tugas**. Aplikasi ini dikhususkan untuk pelajar mengatur dan mengingatkan mengenai tugas yang harus dilakukan. Aplikasi ini memiliki beberapa fitur sebagai berikut:
1. Menambahkan tugas dengan detail mata kuliah, tugas, dan tanggal pengumpulan.
2. Menandai tugas yang telah diselesaikan.
3. Mengedit tugas yang telah dibuat.
4. Menghapus tugas yang belum maupun telah diselesaikan.

Gambar 1. Menambahkan Tugas
![alt text](https://github.com/tinyDevill/pemrograman_web_itera_123140192/blob/main/Abi%20Sholihan_123140192_Pertemuan1/Menambahkan%20Tugas.png)

Gambar 2. Menandai Tugas yang telah Diselesaikan
![alt text](https://github.com/tinyDevill/pemrograman_web_itera_123140192/blob/main/Abi%20Sholihan_123140192_Pertemuan1/Menandai%20Tugas%20yang%20telah%20Diselesaikan.png)

Gambar 3. Mengedit Tugas
![alt text](https://github.com/tinyDevill/pemrograman_web_itera_123140192/blob/main/Abi%20Sholihan_123140192_Pertemuan1/Mengedit%20Tugas.png)

Gambar 4. Menghapus Semua Tugas
![alt text](https://github.com/tinyDevill/pemrograman_web_itera_123140192/blob/main/Abi%20Sholihan_123140192_Pertemuan1/Mengedit%20Tugas.png)

Cara menjalankan aplikasi web ini cukup mudah.
1. Download file "pertama.html, pertama.css, pertama.js" dan letakkan pada folder yang sama.
2. Buka file "pertama.html" di web browser yang anda sukai.
3. Selamat mencoba!

Aplikasi web ini menggunakan Local Storage. Apa itu Local Storage?
Local Storage adalah penyimpanan data di sisi browser (client-side) yang bersifat permanen. Sehingga semua tugas yang telah dituliskan di web ini tidak akan hilang ketika tab browser di refresh atau bahkan browser tersebut ditutup.
Secara teknis, alurnya seperti ini:
1. Saat menambah/edit tugas:
   - Program akan mengambil array dari localStorage dengan menggunakan fungsi loadTask.
   - Setelah itu, pengguna bisa menambahkan atau mengubah elemen array.
   - Kemudian ketika disimpan, array tersebut akan ditempatkan kembali ke Local Storage melalui fungsi saveTask().

2. Saat halaman di-refresh:
   - Program akan menjalankan fungsi render secara otomatis.
   - Fungsi tersebut memanggil loadTask untuk membaca semua data tersimpan.
   - Data langsung muncul kembali di tabel.

3. Saat menghapus:
   - Program dapat menghapus data tertentu (splice) atau semua (localStorage.removeItem('task')).

Pastikan sebelum menekan tombol untuk menambahkan ataupun menyimpan hasil edit tugas kotak mata kuliah, tugas, dan tanggal telah terisi. Jika tidak, sistem akan mengeluarkan peringatan bahwa ketiga kotak tersebut harus diisi oleh pengguna.
