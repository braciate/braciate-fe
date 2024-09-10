# Pengembangan Web Braciate 2024

## Daftar Framework / Library

1. [Vite JS](https://vitejs.dev/)

2. ‌[ES Lint](https://eslint.org/)

3. ‌[Tailwind](https://tailwindcss.com/)

4. ‌[Shadcn](https://ui.shadcn.com/)

5. [Framer Motion](https://www.framer.com/motion/)

6. ‌[Axios](https://axios-http.com/)

7. [Zustand](https://zustand-demo.pmnd.rs/)

8. ‌[React Hook Form](https://www.react-hook-form.com/)

## Aturan Penulisan Kode

1.  Penulisan UseState yang diikuti dengan fungsi spesifik/UseEffect harus **dipisahkan** dari File layout/page (membuat custom hooks). Kode custom hooks dituliskan pada folder **"src/hooks".**

2.  **Komponen seperti** alert dan modal yang banyak digunakan berulang kali pada banyak page berbeda sebaiknya **cukup dipanggil sekali** pada root project dan atur kemunculan dan kontennya menggunakan state management (zustand).

3.  Komponen yang dibuat **jangan terlalu terikat** pada props variant untuk mengatur tampilan. **Contoh:** komponen button ingin menampilkan icon back (\<Button variant="back-button" />). Lebih baik tulis kode menjadi (<Button icon={\<BackIcon/>} />).

4.  Komponen yang dibuat sebagai **modifikasi** terhadap tag HTML tertentu (misal button) harus meng-**extend** props tag HTML tersebut menggunakan **interface**.

5.  **Jangan memberikan** props ke komponen jika data props tersebut **tidak digunakan** dalam komponen tersebut. (misal, setelah fetch data API maka jangan berikan seluruh data API tersebut sebagai props ke komponen card yang hanya menampilkan gambar dan judul).

6.  **Wajib** menuliskan dokumentasi singkat dalam bentuk **komentar** pada fungsi unik yang kalian buat. Dokumentasi / komentar dituliskan di atas fungsi yang dibuat.

## Getting Started

Pertama clone repo Braciate-fe:

```bash

git clone https://github.com/braciate/braciate-fe.git

```

Kemudian install depedencies:

```bash

npm install

```

Kemudian jalankan development server:

```bash

npm run dev

```

Buka [http://localhost:3000](http://localhost:3000) menggunakan browser untuk melihat tampilan website

Untuk melakukan perubahan pada codebase, buat branch baru dengan nama branch sesuai fitur, perubahan, atau bug fixing yang akan diselesaikan

```bash

git branch "[feat/fix]/nama-branch"

```

Kemudian pindah ke branch yang telah dibuat

```bash

git switch "[feat/fix]/nama-branch"

```

<br/>

~ **code your idea** ~

<br/>

Lakukan commit perubahan:

```bash

git add .
git commit -m "deskripsi perubahan"

```

Push ke repository github:

```bash

git push -u origin "nama branch"

```

Usahakan commit message memenuhi [Conventional Commit](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13),
kemudian lakukan pull request ke branch dev pada repository braciate-fe.

## Diskusi dan Request Perubahan Codebase

Untuk mengajukan diskusi topik terkait repo, gunakan fitur [discussion](https://github.com/braciate/braciate-fe/discussions)

Untuk mengajukan perubahan codebasee, gunakan fitur [issue](https://github.com/braciate/braciate-fe/issues) pada github dengan ketentuan label:

1. **enhancement** untuk enhancement fitur tertentu atau penambahan fitur baru
2. **bug** untuk report dan request bug fixing pada website
3. **documentation** untuk penambahan dokumentasi, fixing typo pada dokumentasi, dan segala hal terkait dokumentasi website

<br/>

<div align="center">
  <img src="https://media.giphy.com/media/vzO0Vc8b2VBLi/giphy.gif" width="300"/>
</div>

<div align="center">
  <h1>Happy Coding</h1>
</div>
