import site from "../../data/site.json";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10">
      <div className="container py-8 grid gap-6 sm:grid-cols-2 items-center">
        <div className="text-sm text-gray-600">
          <p>{site.org.brandName} · {site.contact.address}</p>
          <p>Phone: <a className="underline" href={`tel:${site.contact.phone}`}>{site.contact.phone}</a> · Email: <a className="underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>
        </div>

        {/* Required signature (unchanged) */}
        <div className="flex justify-start sm:justify-end">
          <p className="text-gray-900 flex flex-col sm:flex-row items-center gap-2 sm:gap-1">
            <span className="whitespace-nowrap">Written by:</span>
            <a
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r font-medium rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base"
              href="https://elixcode.com/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src="/logo/logo.png"
                alt="Elix Code Logo"
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
              />
              Elix Code
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
