// Kelas untuk di export
export class JadwalManager {
    constructor({ storageKey = "jadwalKuliah", submitbtnPar = null } = {}) {
        this.storageKey = storageKey;
        this.submitbtn = submitbtnPar;
        this.jadwalList = JSON.parse(localStorage.getItem(this.storageKey)) || [];
    }

    // Menyimpan data
    async simpanData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                localStorage.setItem(this.storageKey, JSON.stringify(this.jadwalList));
                resolve(true);
            }, 200);
        });
    }

    // Menyimpan jadwal baru
    tambahJadwal = async (data) => {
        this.jadwalList.push(data);
        await this.simpanData();
    };

    // Menghapus salah satu jadwal
    hapusJadwal = async (index) => {
        this.jadwalList.splice(index, 1);
        await this.simpanData();
    };

    // Mengedit jadwal
    editJadwal = async (index, data) => {
        this.jadwalList[index] = data;
        await this.simpanData();
        if(this.submitbtn){
            this.submitbtn.textContent = 'Tambah Jadwal';
        }
    };

    // menampilkan jadwal
    renderTable = (tableBody, editCallback, deleteCallback) => {
        tableBody.innerHTML = this.jadwalList
            .map(
                (j, i) => `
                <tr>
                    <td>${j.matkul}</td>
                    <td>${j.dosen}</td>
                    <td>${j.hari}</td>
                    <td>${j.jam}</td>
                    <td>
                        <button class="edit" data-index="${i}">Edit</button>
                        <button class="hapus" data-index="${i}">Hapus</button>
                    </td>
                </tr>
            `
            )
            .join("");

        // Memberikan event listener pada tombol-tombol yang baru
        tableBody.querySelectorAll(".edit").forEach((btn) => {
            btn.addEventListener("click", () => editCallback(btn.dataset.index));
        });

        tableBody.querySelectorAll(".hapus").forEach((btn) => {
            btn.addEventListener("click", () => deleteCallback(btn.dataset.index));
        });
    };
}
