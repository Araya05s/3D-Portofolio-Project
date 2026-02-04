import site_p from "@/data/profile.json"
import site_c from "@/data/contacts.json"

const Footer = () => {

  const { name, headline, subheadline } = site_p.home
  const connections = site_c.contacts

  return (
    <footer id="footer" className="bg-black/20 text-neutral-300 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">

        <div>
          <h3 className="text-lg font-semibold text-white mb-1">
            {name}
          </h3>
          <a
            href="/resume.pdf"
            className="hover:text-white transition"
          >
            See my resume
          </a>
        </div>

        <div>
          <p className="text-sm mb-1 font-mono">Contact</p>
            <div className="flex flex-row">
              {connections.map((contact) => (
                <div key={contact.name}>
                  <p className="text-sm text-neutral-400 px-1">
                      <a href="contact.link" target="_blank" rel="noopener noreferrer" className="p-1 rounded-md bg-neutral-300 hover:bg-neutral-50 inline-flex items-center">
                        <img 
                          src={contact.icon} 
                          alt={contact.name} 
                          className="w-7 h-7 object-contain brightness-90 group-hover:brightness-110" 
                        />
                      </a>
                  </p>
                </div>
              ),)}
            </div>
        </div>

      </div>

      <div className="text-center text-xs text-neutral-500 mt-8">
        © {new Date().getFullYear()} {name}. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer