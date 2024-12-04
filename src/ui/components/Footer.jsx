import logoSrc from "$assets/csi-logo.png"

const navigation = {
  socials: [
    {
      name: "Instagram",
      href: "https://instagram.com/",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/justansub",
    },
    {
      name: "Github",
      href: "https://www.youtube.com/@SpeedyBrand-SEO",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/speedy-brand-inc/",
    },
  ],
  club: [
    { name: "Blogs", href: "blogs/" },
    { name: "Events", href: "/events" },
    { name: "Faculty", href: "/faculty" },
    { name: "Gallery", href: "/gallery" },
  ],
}

const Footer = () => {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="font-inter w-full p-4 py-8"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto w-full px-2">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="space-y-8">
            <img lazy="true" src={logoSrc} alt="csi logo" className="h-10" />
            <p className="text-md max-w-xs leading-6 text-gray-700 dark:text-gray-300">
              Computer Society of India
            </p>
          </div>
          {/* Navigations */}
          <div className="mt-16 grid grid-cols-2 gap-14 md:grid-cols-3 lg:mt-0 xl:col-span-2">
            <div className="md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-gray-900  dark:text-gray-200">
                socials
              </h3>
              <div className="mt-6 space-y-4">
                {navigation.socials.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-600 hover:dark:text-gray-200"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                  Club
                </h3>
                <div className="mt-6 space-y-4">
                  {navigation.club.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-600 hover:dark:text-gray-200"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-full w-full col-span-2 md:col-span-1">
              <iframe
                title="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6562222444213!2d78.44033307489522!3d17.42827810162643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90cd7708dfd7%3A0x77482b7aa8b696f3!2sMuffakham%20Jah%20College%20of%20Engineering%20%26%20Technology%20(MJCET)!5e0!3m2!1sen!2sin!4v1716881145691!5m2!1sen!2sin"
                className="w-full h-full rounded-xl"
                // style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 dark:border-gray-100/10 flex items-center justify-between">
          <p className="text-xs leading-5 text-gray-700 dark:text-gray-300">
            &copy; {new Date().getFullYear()} Computer Society of India. All
            rights reserved.
          </p>
          <p className="text-xs leading-5 ">
            Made with <span className="saturate-0 brightness-80 mix-blend-screen">❤️</span>  by Team Happy
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
