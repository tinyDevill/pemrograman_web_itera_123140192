import { JadwalManager } from "./app.js";

const form = document.getElementById("form-jadwal");
const tbody = document.querySelector("#tabel-jadwal tbody");
const submitbtn = document.getElementById("submitbtn");
const manager = new JadwalManager({
    submitbtnPar: document.getElementById("submitbtn")
});

let editIndex = null;

// Mengambil data ketika web baru dibuka
const updateTable = () =>
    manager.renderTable(tbody, handleEdit, handleDelete);

// Handle tambah / edit jadwal
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        matkul: form.matkul.value,
        dosen: form.dosen.value,
        hari: form.hari.value,
        jam: form.jam.value,
    };

    if (editIndex !== null) {
        await manager.editJadwal(editIndex, data);
        editIndex = null;
    } else {
        await manager.tambahJadwal(data);
    }

    form.reset();
    updateTable();
});

// Menghapus data
const handleDelete = async (i) => {
    if (confirm("Yakin ingin hapus jadwal ini?")) {
        await manager.hapusJadwal(i);
        updateTable();
    }
};

// Mengedit data
const handleEdit = (i) => {
    const j = manager.jadwalList[i];
    form.matkul.value = j.matkul;
    form.dosen.value = j.dosen;
    form.hari.value = j.hari;
    form.jam.value = j.jam;
    editIndex = i;
    submitbtn.textContent = 'Simpan';
};

updateTable();
