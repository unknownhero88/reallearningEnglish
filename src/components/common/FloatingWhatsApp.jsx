import React from "react";

export default function FloatingWhatsApp() {
  const phoneNumber = "919630524297";
  const message = encodeURIComponent(
    "Hello Real Learning English Classes, I would like to book a free trial session and get more details.",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 12.008 0c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 12-11.951 12-2.005-.001-3.973-.503-5.729-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.07 1.953 11.47 1.953c-5.437 0-9.862 4.371-9.866 9.8.001 2.028.532 4.019 1.539 5.793l-.993 3.623 3.714-.965zm11.441-6.832c-.312-.156-1.848-.912-2.134-1.017-.286-.104-.495-.156-.703.156-.208.312-.807 1.017-.989 1.225-.182.208-.364.234-.676.078-.312-.156-1.318-.486-2.51-1.549-.928-.828-1.554-1.85-1.736-2.162-.182-.312-.019-.481.137-.636.141-.139.312-.364.469-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.703-1.693-.963-2.319-.253-.608-.51-.526-.703-.536-.182-.01-.39-.01-.598-.01-.208 0-.547.078-.833.39-.286.312-1.094 1.068-1.094 2.602 0 1.534 1.119 3.018 1.275 3.226.156.208 2.201 3.362 5.332 4.714.745.322 1.327.514 1.781.658.748.238 1.43.205 1.969.124.6-.09 1.848-.755 2.108-1.446.26-.691.26-1.284.182-1.406-.078-.122-.286-.195-.598-.351z" />
      </svg>
      <span className="absolute left-16 bg-slate-900 text-white text-xs font-semibold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Chat with Us
      </span>
    </a>
  );
}
