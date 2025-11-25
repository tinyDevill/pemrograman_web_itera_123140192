# menghitung nilai akhir seorang mahasiswa
def nilaiAkhir(nilai_uts, nilai_uas, nilai_tugas):
    bagianUts = 30 * nilai_uts / 100
    bagianUas = 40 * nilai_uas / 100
    bagianTugas = 30 * nilai_tugas / 100

    return int(bagianUts + bagianUas + bagianTugas)

# menentukan huruf mutu
def grade(nilai_akhir):
    if nilai_akhir >= 80:
        hurufmutu = 'A'
    elif nilai_akhir >= 70:
        hurufmutu = 'B'
    elif nilai_akhir >= 60:
        hurufmutu = 'C'
    elif nilai_akhir >= 50:
        hurufmutu = 'D'
    else:
        hurufmutu = 'E'

    return hurufmutu

# menampilkan data
def tampilkanData(nim, nama, n_uts, n_uas, n_tugas, n_akhir, huruf_mutu):
    print(f"{'No.':^5}|{'NIM':^11}|{'Nama Mahasiswa':^20}|{'UTS':^5}|{'UAS':^5}|{'Tugas':^7}|{'Nilai':^7}|{'Grade':^7}")

    for i, n in enumerate(nim):
        print(f"{(i + 1):^5}|{n:<11}|{nama[i]:<20}|{n_uts[i]:^5}|{n_uas[i]:^5}|{n_tugas[i]:^7}|{n_akhir[i]:^7}|{huruf_mutu[i]:^7}")

# menampilkan mahasiswa dengan nilai tertinggi
def nilaiTertinggi(nama, n_akhir):
    tertinggi = max(n_akhir)
    index = []

    output = "Mahasiswa dengan nilai tertinggi adalah "
    for i, n in enumerate(n_akhir):
        if tertinggi == n:
            index.append(i)

    if len(index) == 1:
        output += nama[index[0]]
    elif len(index) == 2:
        output += nama[index[0]] + " dan " + nama[index[1]]
    elif len(index) > 1:
        for i, n in enumerate(index):
            if(i == len(index) - 2):
                output += nama[n]
                output += ", dan "
            elif(i == len(index) - 1):
                output += nama[n]
            else:
                output += nama[n]
                output += ", "
    
    print(output)

# menampilkan mahasiswa dengan nilai terendah
def nilaiTerendah(nama, n_akhir):
    terendah = min(n_akhir)
    index = []

    output = "Mahasiswa dengan nilai terendah adalah "
    for i, n in enumerate(n_akhir):
        if terendah == n:
            index.append(i)

    if len(index) == 1:
        output += nama[index[0]]
    elif len(index) == 2:
        output += nama[index[0]] + " dan " + nama[index[1]]
    elif len(index) > 1:
        for i, n in enumerate(index):
            if(i == len(index) - 2):
                output += nama[n]
                output += ", dan "
            elif(i == len(index) - 1):
                output += nama[n]
            else:
                output += nama[n]
                output += ", "
    
    print(output)

# menghitung nilai rata-rata kelas
def rataKelas(n_akhir):
    jumlah = sum(n_akhir)
    print(f"Rata-rata nilai kelas ini adalah {float(jumlah / len(n_akhir))}")

# menampilkan data mahasiswa dengan huruf mutu tertentu
def filterGrade(nim, nama, n_uts, n_uas, n_tugas, n_akhir, huruf_mutu):
    grade = input("Masukkan grade : ")

    print(f"{'No.':^5}|{'NIM':^11}|{'Nama Mahasiswa':^20}|{'UTS':^5}|{'UAS':^5}|{'Tugas':^7}|{'Nilai':^7}|{'Grade':^7}")
    for i, n in enumerate(huruf_mutu):
        if n == grade:
            print(f"{(i + 1):^5}|{nim[i]:<11}|{nama[i]:<20}|{n_uts[i]:^5}|{n_uas[i]:^5}|{n_tugas[i]:^7}|{n_akhir[i]:^7}|{n:^7}")


# deklarasi list dan variabel
nim = []
nama = []
n_uts = []
n_uas = []
n_tugas = []
n_akhir = []
huruf_mutu = []
index = 0
opsi = 1

# perulangan
while opsi != 0:
    print("1. Tambah data nilai mahasiswa")
    print("2. Tampilkan data nilai mahasiswa")
    print("3. Mencari mahasiswa dengan nilai tertinggi")
    print("4. Mencari mahasiswa dengan nilai terendah")
    print("5. Mencari rata-rata nilai kelas")
    print("6. Menampilkan ")
    print("0. Keluar")
    opsi = int(input("Pilih yang ingin anda lakukan (masukkan angka) : "))

    if opsi == 1:
        nim_baru = input("Masukkan NIM : ")
        nim.append(nim_baru)
        nama_baru = input("Masukkan Nama : ")
        nama.append(nama_baru)
        uts_baru = int(input("Masukkan Nilai UTS : "))
        n_uts.append(uts_baru)
        uas_baru = int(input("Masukkan Nilai UAS : "))
        n_uas.append(uas_baru)
        tugas_baru = int(input("Masukkan Nilai Tugas : "))
        n_tugas.append(tugas_baru)
        mutu_baru = grade(tugas_baru)
        huruf_mutu.append(mutu_baru)

        akhir_baru = nilaiAkhir(n_uts[index], n_uas[index], n_tugas[index])
        n_akhir.append(akhir_baru)
        index += 1
    elif opsi == 2:
        tampilkanData(nim, nama, n_uts, n_uas, n_tugas, n_akhir, huruf_mutu)
    elif opsi == 3:
        nilaiTertinggi(nama, n_akhir)
    elif opsi == 4:
        nilaiTerendah(nama, n_akhir)
    elif opsi == 5:
        rataKelas(n_akhir)
    elif opsi == 6:
        filterGrade(nim, nama, n_uts, n_uas, n_tugas, n_akhir, huruf_mutu)
    
    print("")
