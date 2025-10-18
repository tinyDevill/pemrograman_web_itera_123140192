(function() {
    const subjectInput = document.getElementById('subject');
    const taskInput = document.getElementById('task');
    const dateInput = document.getElementById('date');
    const addBtn = document.getElementById('addBtn');
    const clearBtn = document.getElementById('clearBtn');
    const warningEl = document.getElementById('warning');
    const tableBody = document.querySelector('#taskTable tbody');
    const doneTable = document.querySelector('#doneTable tbody');
    const counter = document.getElementById('count');
    const countDone = document.getElementById('count-done');
    const searchInput = document.getElementById('search');
    
    const loadTask = ()=> JSON.parse(localStorage.getItem('task') || '[]');
    const saveTask = arr => localStorage.setItem('task', JSON.stringify(arr));
    let editIndex = null;
    let searchterm = '';
    
    const render = () => {
        let arr = loadTask();

        // Memastikan data tugas valid
        arr = arr.map(it => ({
            ...it,
            completed: typeof it.completed === 'boolean' ? it.completed : false
        }));
        saveTask(arr);

        // Digunakan untuk filter berdasarkan kata pencarian
        let filtered = arr;
        if (searchterm && searchterm.length > 0) {
            filtered = arr.filter(it => {
                const subj = it.subject?.toLowerCase() || '';
                const task = it.task?.toLowerCase() || '';
                const date = it.date?.toLowerCase() || '';
                return subj.includes(searchterm) || task.includes(searchterm) || date.includes(searchterm);
            });
        }

        const done = filtered.filter(it => it.completed);
        const todo = filtered.filter(it => !it.completed);

        // Mengosongkan tabel sebelum isi ulang
        tableBody.innerHTML = '';
        doneTable.innerHTML = '';

        // Mengupdate jumlah
        counter.textContent = 'Belum selesai (' + todo.length + ')';
        countDone.textContent = 'Sudah selesai (' + done.length + ')';

        // Jika tidak ada tugas
        if (todo.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="5" style="color:#888">Belum ada tugas.</td></tr>';
        }
        if (done.length === 0) {
            doneTable.innerHTML = '<tr><td colspan="5" style="color:#888">Belum ada tugas.</td></tr>';
        }

        // Menampilkan hasil filtered
        filtered.forEach((it, i) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${it.subject}</td>
                <td>${it.task}</td>
                <td>${it.date}</td>
                <td>
                    <input type="checkbox" class="status" data-idx="${i}" ${it.completed ? 'checked' : ''}>
                </td>
                <td>
                    <button class="action-btn remove" style="color:black" data-idx="${i}">Hapus</button>
                    <button class="action-btn edit" style="color:black" data-idx="${i}">Edit</button>
                </td>
            `;

            if (it.completed) {
                tr.classList.add('completed');
                doneTable.appendChild(tr);
            } else {
                tableBody.appendChild(tr);
            }
        });

        // Tombol hapus
        document.querySelectorAll('.remove').forEach(btn => {
            btn.onclick = e => {
                const arr = loadTask();
                arr.splice(+e.target.dataset.idx, 1);
                saveTask(arr);
                render();
            };
        });

        // Tombol edit
        document.querySelectorAll('.edit').forEach(btn => {
            btn.onclick = e => {
                const arr = loadTask();
                const idx = +e.target.dataset.idx;
                const item = arr[idx];

                subjectInput.value = item.subject;
                taskInput.value = item.task;
                dateInput.value = item.date;

                editIndex = idx;
                addBtn.textContent = 'Simpan';
            };
        });

        // Checkbox status
        document.querySelectorAll('.status').forEach(chk => {
            chk.addEventListener('change', e => {
                const arr = loadTask();
                const idx = +e.currentTarget.dataset.idx;
                arr[idx].completed = e.currentTarget.checked;
                saveTask(arr);
                render();
            });
        });
    };

    // Menampilkan jika ada box yang kosong
    const showWarning = msg=>{
        warningEl.textContent = msg;
        warningEl.classList.remove('hidden');
        setTimeout(()=>warningEl.classList.add('hidden'), 3000);
    }

    // Tombol menambahkan tugas
    addBtn.addEventListener('click', ()=>{
        const subj = subjectInput.value.trim();
        const task = taskInput.value;
        const date = dateInput.value || '-';
        
        if(!subj || !task || date === '-'){showWarning('Ketiga data diatas harus diisi'); return;}

        const arr = loadTask();
        
        if(editIndex !== null){
            arr[editIndex] = {subject: subj, task, date};
            saveTask(arr);
            editIndex = null;
            addBtn.textContent = 'Tambah';
        } else{
            arr.push({subject: subj, task, date});
            saveTask(arr);
        }

        subjectInput.value = '';
        taskInput.value = '';
        dateInput.value = '';
        render();
    })

    // Tombol menghapus semua tugas
    clearBtn.addEventListener('click', ()=>{
        if(confirm('Yakin ingin menghapus semua jadwal?')){
            localStorage.removeItem('task');
            render();
        }
    })

    // Kotak pencarian
    searchInput.addEventListener('input', e => {
        searchterm = e.target.value.trim().toLowerCase();
        render();
    })

    render();
})();