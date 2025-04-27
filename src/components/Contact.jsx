import { Mail, Phone, Github, Linkedin, Download } from "lucide-react";
import cvEN from '../assets/cv/eng.pdf';
import cvID from '../assets/cv/ind.pdf';

export default function Contact() {
  const contactItems = [
    { icon: <Mail className="mr-4" />, content: "saputrawindi0@gmail.com"},
    { icon: <Phone className="mr-4" />, content: "+62 896 8930 6127", link: "https://api.whatsapp.com/send/?phone=%2B6289689306127&text&type=phone_number&app_absent=0&wame_ctl=1" },
    {
      icon: <Github className="mr-4" />,
      content: "My GitHub",
      link: "https://github.com/wndxx",
    },
    {
      icon: <Linkedin className="mr-4" />,
      content: "My LinkedIn",
      link: "https://linkedin.com/in/windisaputra001",
    },
  ];

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 text-center dark:text-white border-b pb-2">
        Get <span className="text-primary-500">In Touch</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800 space-y-4 transition-colors duration-300">
            {contactItems.map((item, index) => (
              <div key={index} className="flex items-center">
                {item.icon}
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-500 transition"
                  >
                    {item.content}
                  </a>
                ) : (
                  <span>{item.content}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Download Resume (English)</h3>
            <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center transition-colors duration-300">
              <Download size={48} className="mb-4 text-primary-500" />
              <button 
                onClick={() => handleDownload(cvEN, 'Windi_Saputra_Resume_EN.pdf')}
                className="px-6 py-3 rounded-lg font-medium bg-primary-500 hover:bg-primary-600 text-white transition"
              >
                Download CV (PDF)
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Download Resume (Bahasa Indonesia)</h3>
            <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center transition-colors duration-300">
              <Download size={48} className="mb-4 text-primary-500" />
              <button 
                onClick={() => handleDownload(cvID, 'Windi_Saputra_Resume_ID.pdf')}
                className="px-6 py-3 rounded-lg font-medium bg-primary-500 hover:bg-primary-600 text-white transition"
              >
                Download CV (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}