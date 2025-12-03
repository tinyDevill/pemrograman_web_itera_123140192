from abc import ABC, abstractmethod

# Kelas Abstrak Benda Perpustakaan
class libraryItem(ABC):
    def __init__(self, bookId, title, writer, year):
        self.__id = bookId
        self.title = title
        self.writer = writer
        self.year = year

    # Propery Decorator
    @property
    def bookId(self):
        return self.__id
    
    @bookId.setter
    def bookId(self, new_id):
        if new_id < 0:
            print(f"ERROR: ID buku {self.title} tidak boleh negatif")
        else:
            self.__id = new_id
            print(f"ID buku {self.title} telah berhasil diganti")
    
    @abstractmethod
    def lamaPeminjaman(self):
        pass

# Kelas Ensiklopedia, Turunan Kelas Perpustakaan
class encyclopedia(libraryItem):
    def __init__(self, id, title, writer, year):
        super().__init__(id, title, writer, year)

    def lamaPeminjaman(self):
        return "5 Hari"

# Kelas Majalah, Turunan Kelas Perpustakaan
class magazine(libraryItem):
    def __init__(self, id, title, writer, year):
        super().__init__(id, title, writer, year)

    def lamaPeminjaman(self):
        return "7 Hari"

# Kelas Novel, Turunan Kelas Perpustakaan
class novel(libraryItem):
    def __init__(self, id, title, writer, year):
        super().__init__(id, title, writer, year)

    def lamaPeminjaman(self):
        return "3 Hari"

# Kelas Untuk Manajemen Benda Perpustakaan
class library:
    def __init__(self):
        self.__database = []
    
    # Fungsi untuk menambahkan buku ke database
    def addBook(self, book):
        if isinstance(book, libraryItem):
            self.__database.append(book)
            print(f"{book.title} berhasil ditambahkan.")
        else:
            print("Buku tidak valid.")
    
    # Fungsi untuk menampilkan daftar buku yang ada di dalam database
    def bookList(self):
        print("-- DAFTAR BUKU --")
        if not self.__database:
            print("Tidak ada buku yang disimpan.")
        else:
            print(f"{'Id Buku' :^10}|{'Judul Buku' :^20}|{'Lama Peminjaman' :^17}")
            for book in self.__database:
                print(f"{book.bookId :^10}|{book.title :^20}|{book.lamaPeminjaman() :^17}")

    # Fungsi untuk menemukan buku dengan id
    def findBook(self, searchId):
        for book in self.__database:
            if book.bookId == searchId:
                return book
        
        return None


Perpustakaan = library()
choosen = -1
while choosen != 0:
    print("0. Keluar")
    print("1. Menambahkan buku")
    print("2. Mencari buku dengan id")
    print("3. Menampilkan daftar buku")

    choosen = int(input("Pilih aksi: "))
    if choosen == 1:
        print("\n1. Ensiklopedia")
        print("2. Majalah")
        print("3. Novel")
        bookChoosen = int(input("Pilih jenis buku yang ingin ditambah: "))
        print("\n== MASUKKAN DATA ==")

        if bookChoosen == 1:            
            id = int(input("Id Ensiklopedia: "))
            title = input("Judul Ensiklopedia: ")
            writer = input("Penulis Ensiklopedia: ")
            year = int(input("Tahun Terbit Ensiklopedia: "))

            Perpustakaan.addBook(encyclopedia(id, title, writer, year))
        elif bookChoosen == 2:
            id = int(input("Id Majalah: "))
            title = input("Judul Majalah: ")
            writer = input("Penulis Majalah: ")
            year = int(input("Tahun Terbit Majalah: "))

            Perpustakaan.addBook(magazine(id, title, writer, year))
        elif bookChoosen == 3:
            id = int(input("Id Novel: "))
            title = input("Judul Novel: ")
            writer = input("Penulis Novel: ")
            year = int(input("Tahun Terbit Novel: "))

            Perpustakaan.addBook(novel(id, title, writer, year))
        else:
            print("\nInput tidak valid!")
    elif choosen == 2:
        searchId = int(input("Masukkan Id Buku yang ingin dicari: "))
        foundBook = Perpustakaan.findBook(searchId)

        if foundBook == None:
            print(f"\nBuku dengan Id {searchId} tidak ada dalam database.")
        else:
            print("\n=== Buku ditemukan ===")
            print(f"Id Buku: {foundBook.bookId}")
            print(f"Judul Buku: {foundBook.title}")
            print(f"Penulis Buku: {foundBook.writer}")
            print(f"Tahun Terbit: {foundBook.year}")
    elif choosen == 3:
        Perpustakaan.bookList()

    print("")