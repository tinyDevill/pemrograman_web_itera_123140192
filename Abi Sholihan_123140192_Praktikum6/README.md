# TUGAS PRAKTIKUM 6
## Deskripsi Tugas
Yang ada di dalam folder ini merupakan API sederhana untuk memanajemen mata kuliah. API ini dapat digunakan untuk menghubungkan database yang menggunakan **PostgreSQL** dengan **User Interface**.

## Menyiapkan API
### Mengaktifkan Virtual Environment
1. Unduh file .zip repository ini
2. Masuk ke file **Abi Sholihan_123140192_Praktikum6** dengan terminal
3. Buat virtual environment python ( python -m venv venv )
4. Aktifkan virtual environment yang telah dibuat ( source venv/Scripts/activate [jika menggunakan git bash] )
### Menginstall Dependensi yang Diperlukan
1. Install pyramid dan cookiecutter ( python -m pip install "pyramid==2.0" cookiecutter )
2. Buat template proyek ( cookiecutter gh:Pylons/pyramid-cookiecutter-starter --checkout 2.0-branch )
3. Masuk ke folder **myproject** ( cd myproject )
4. Install dependensi project ( python -m pip install -e . ) -> jangan lupa tanda titiknya
5. Install driver untuk **PostgreSQL** ( python -m pip install psycopg2 )
6. Buat database di PostgreSQL ( CREATE DATABASE db_matakuliah; ) atau dapat juga menggunakan neon
### Penyesuaian File
1. Buka file development.ini dan ubah sqlalchemy.url dengan link database PostgreSQL milik anda

## Menjalankan API
### Menjalankan Migrasi
1. Lakukan kedua perintah ini agar tabel terbentuk di database
   alembic -c development.ini revision --autogenerate -m "init"
   alembic -c development.ini upgrade head
### Menjalankan Server
1. Untuk menjalankan server cukup dengan ( pserve development.ini ) dan tunggu hingga url localhost muncul
2. Berikut dokumentasi API yang telah dijalankan di browser
   ![](https://drive.google.com/uc?export=view&id=1y7jrGV2s6IwK7QoX3UNZt-y1WivL1-nY)

## API Endpoints
### Post Matakuliah
![](https://drive.google.com/uc?export=view&id=162uTAErXqyYOfF67qLReoeakstSSDC82)
![](https://drive.google.com/uc?export=view&id=1Q1MttYBmJ28RpiOK3SSfqCepjKBpNyJ9)
### Get All Matakuliah dan Matakuliah Spesifik
![](https://drive.google.com/uc?export=view&id=1Lh9ZhQP7-4bO723-YzLe7snOU-x7UR3r)
