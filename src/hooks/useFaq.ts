import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

interface UseFaqResult {
  faqs: FaqItem[];
  toggleFAQ: (index: number) => void;
}

const useFaq = (): UseFaqResult => {
  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      question:
        "Apakah satu akun hanya dapat memberikan satu voting pada masing-masing LKM dan UKM?",
      answer:
        "Satu akun dapat memberikan voting untuk kategori Best Favorite minimal satu kali pada masing-masing LKM (DPM, BEM, HIMA) dan UKM.",
      open: false,
    },
    {
      question:
        "Jika ingin mengikuti lebih dari dua kategori nominasi, apakah harus mengunggah dua kali?",
      answer:
        "Ya, masing-masing file PPT harus diunggah dalam format PDF sesuai dengan ketentuan yang telah ditetapkan. File tersebut kemudian diunggah ke dalam Link Google Drive (Catatan: ubah link GDrive menjadi akses terbuka untuk semua orang).",
      open: false,
    },
    {
      question:
        "Untuk best favorite itu pure dari voting seluruh mahasiswa UB atau ada lainnya?",
      answer:
        "Ya, Best favorite akan dihitung sesuai jumlah voting terbanyak yang dilakukan oleh seluruh mahasiswa Universitas Brawijaya.",
      open: false,
    },
    {
      question: "Apakah akan ada awarding terkait nominasi yang disediakan?",
      answer:
        "Pasti ada, awarding akan dilaksanakan pada main event Brawijaya Appreciate 2024 di Auditorium Merah tanggal 01 November 2024.",
      open: false,
    },
  ]);

  const toggleFAQ = (index: number): void => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, open: !faq.open };
        } else {
          return { ...faq, open: false };
        }
      }),
    );
  };

  return { faqs, toggleFAQ };
};

export default useFaq;
