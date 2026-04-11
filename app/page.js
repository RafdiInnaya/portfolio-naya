"use client";

import { motion } from "framer-motion";
import { FaReact, FaFigma, FaHtml5, FaCss3Alt, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiTailwindcss, SiFirebase } from "react-icons/si";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 text-gray-800">

      {/* NAVBAR */}
<nav className="fixed top-4 left-0 right-0 z-50 flex justify-center">
  <div className="backdrop-blur-md bg-gradient-to-r from-blue-200/80 via-white/70 to-indigo-200/80 shadow-lg rounded-full px-8 py-3 flex items-center gap-10 border border-blue-100">
    
    <h1 className="text-sm font-bold text-blue-600">
      Portfolio
    </h1>

    <div className="flex gap-8 text-sm font-medium text-gray-700">
      <a href="#home" className="hover:text-blue-600 transition">Home</a>
      <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
      <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
      <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
    </div>

  </div>
</nav>

      {/* HERO */}
      <section id="home" className="pt-32 pb-20 flex items-center px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-xs font-semibold">
              Software Engineer
            </span>

            <h1 className="text-5xl font-bold mt-4 leading-tight">
              Rafdi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Innaya</span>
            </h1>

            <p className="mt-6 text-gray-600 max-w-lg">
              Saya berfokus pada pengembangan aplikasi dengan membangun sistem yang fungsional, responsif, dan mudah digunakan. 
Memiliki pemahaman dalam pengolahan data, pengembangan fitur, serta perancangan alur sistem untuk mendukung kebutuhan pengguna.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#projects" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">
                Lihat Project
              </a>
              <a href="#contact" className="border border-blue-400 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition">
                Kontak
              </a>
            </div>
          </div>

          {/* IMAGE SECTION */}
<div className="relative flex justify-center items-center">

  <div className="absolute w-80 h-80 bg-blue-400/30 rounded-full blur-3xl"></div>
  <div className="absolute w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl translate-x-10 translate-y-10"></div>

  <div className="absolute w-72 h-72 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-xl opacity-70"></div>

  <img
    src="/foto.jpeg"
    alt="profile"
    className="relative w-72 h-72 object-cover rounded-full shadow-2xl border-4 border-white hover:scale-105 transition duration-500"
  />

</div>
        </div>
      </section>

{/* SKILLS */}
<section id="skills" className="py-12 bg-white">
  <div className="max-w-6xl mx-auto px-8">

    <div className="text-center mb-16">
  <h2 className="text-4xl font-bold">
    <span className="text-gray-800">My </span>
    <span className="text-blue-600">Skills</span>
  </h2>
  <p className="text-gray-600 mt-2">
    Teknologi yang biasa saya gunakan dalam pengembangan
  </p>
</div>

   <div className="flex flex-wrap justify-center gap-16 max-w-2xl mx-auto">

      {[
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "GitHub", icon: <FaGithub /> },
      ].map((skill, i) => (
        <motion.div
  key={i}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, delay: i * 0.1 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.08 }}
  className="w-[120px] bg-blue-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col items-center gap-3"
>
          <div className="text-3xl text-blue-500">
            {skill.icon}
          </div>
          <p className="text-sm font-semibold">{skill.name}</p>
        </motion.div>
      ))}

    </div>
  </div>
</section>

{/* PROJECTS */}
<section id="projects" className="py-12 bg-blue-50">
  <div className="max-w-6xl mx-auto px-8">

    <div className="text-center mb-16">
  <h2 className="text-4xl font-bold">
    <span className="text-gray-800">My </span>
    <span className="text-blue-600">Projects</span>
  </h2>
  <p className="text-gray-600 mt-2">
    Berikut beberapa project yang pernah saya kembangkan
  </p>
</div>

    <div className="grid md:grid-cols-2 gap-12">

      {/* PANTAU */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="flex flex-col bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
      >
       <div className="h-48 rounded-xl mb-5 overflow-hidden">
  <img
    src="/PANTAU.jpg"
    alt="Pantau Project"
    className="w-full h-full object-cover hover:scale-105 transition duration-500"
  />
</div>

        <h3 className="text-xl font-bold mb-2">PANTAU</h3>

        <p className="text-sm text-gray-600 mb-4">
          Dashboard monitoring pelanggaran dan pengenalan plat nomor bagi pengendara motor tanpa helm berbasis web dan IoT yang memungkinkan
          pemantauan secara real-time.
        </p>

        <div className="pt-4 border-t">
          <p className="text-xs font-bold mb-2">MY CONTRIBUTION</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 text-xs rounded-full">
              UI/UX Design
            </span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 text-xs rounded-full">
              Frontend Development
            </span>
          </div>

          {/* BUTTON */}
          <div className="mt-auto pt-6 flex justify-center">
  <a
    href="https://figma.com/proto/Qsp8gffygd2v7YziQ0YeQA/Design?node-id=166-788&p=f&t=mO7hLPfxUTZ9rnhK-1&scaling=scale-down-width&content-scaling=fixed&page-id=158%3A322&starting-point-node-id=166%3A788"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition"
  >
    Lihat Project
  </a>
</div>
        </div>
      </motion.div>

      {/* RILOG */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="flex flex-col bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
      >
       <div className="h-48 rounded-xl mb-5 overflow-hidden">
  <img
    src="/rilog.app.png"
    alt="Rilog Project"
    className="w-full h-full object-cover hover:scale-105 transition duration-500"
  />
</div>

        <h3 className="text-xl font-bold mb-2">RILOG</h3>

        <p className="text-sm text-gray-600 mb-4">
          Aplikasi manajemen gudang berbasis web untuk monitoring stok gudang. Menyediakan fitur stock opname, rekomendasi stock, laporan inventaris dan notifikasi stock.
        </p>

        <div className="pt-4 border-t">
          <p className="text-xs font-bold mb-2">MY CONTRIBUTION</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 text-xs rounded-full">
              UI/UX Design
            </span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 text-xs rounded-full">
              Frontend Development
            </span>
          </div>

         <div className="mt-auto pt-6 flex justify-center">
  <a
    href="https://rilog.id/"
    className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition"
  >
    Lihat Project
  </a>
</div>
        </div>
      </motion.div>

      {/* AMARINE */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="flex flex-col bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition md:col-span-2 md:max-w-xl mx-auto"
      >
        <div className="h-48 rounded-xl mb-5 overflow-hidden">
  <img
    src="/AMARINE.png"
    alt="Amarine Project"
    className="w-full h-full object-cover hover:scale-105 transition duration-500"
  />
</div>

        <h3 className="text-xl font-bold mb-2">
          Amarine (MSIB Study Independent Massive Project)
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          Aplikasi untuk pengelolaan stok ikan bagi para nelayan dengan tampilan user-friendly. Project ini merupakan hasil kolaborasi antara team website dan mobile.
        </p>

        <div className="pt-4 border-t">
          <p className="text-xs font-bold mb-2">MY CONTRIBUTION</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 text-xs rounded-full">
              UI/UX Design
            </span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 text-xs rounded-full">
              Frontend Development
            </span>
          </div>

          <div className="mt-auto pt-6 flex justify-center">
  <a
    href="https://www.figma.com/proto/MCVFf709Kd90kWntWdXTi3/UIUX-Amarine---Massive-Project--Copy-?node-id=5001-4074&p=f&t=Ma84qWdvAfi6VhYE-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=5001%3A4190"
    className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition"
  >
    Lihat Project
  </a>
</div>
        </div>
      </motion.div>

    </div>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="py-16 text-center bg-white">
  <h2 className="text-3xl font-bold text-blue-600 mb-4">
    Contact
  </h2>

  <p className="text-gray-600 mb-10">
    Yuk connect dan kolaborasi
  </p>

  <div className="flex justify-center flex-wrap gap-6">


    {/* LinkedIn */}
    <a href="https://linkedin.com/in/rafdi-innaya" target="_blank" className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-50 hover:bg-blue-100 transition shadow-sm">
      <FaLinkedin className="text-blue-500 text-xl" />
      <span className="text-sm">LinkedIn</span>
    </a>

    {/* GitHub */}
    <a href="https://github.com/RafdiInnaya" target="_blank" className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-50 hover:bg-blue-100 transition shadow-sm">
      <FaGithub className="text-blue-500 text-xl" />
      <span className="text-sm">GitHub</span>
    </a>

    {/* Email */}
    <a href="mailto:rafdiinnaya@gmail.com" className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-50 hover:bg-blue-100 transition shadow-sm">
      <MdEmail className="text-blue-500 text-xl" />
      <span className="text-sm">Email</span>
    </a>

    {/* Phone */}
    <a href="https://wa.me/6285363747011" target="_blank" className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-50 hover:bg-blue-100 transition shadow-sm">
      <MdPhone className="text-blue-500 text-xl" />
      <span className="text-sm">Phone</span>
    </a>

  </div>
</section>

      {/* FOOTER */}
      <footer className="text-center text-sm py-6 text-gray-500">
        © {new Date().getFullYear()} Rafdi Innaya
      </footer>

    </main>
  );
}