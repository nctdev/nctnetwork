"use server"

import { Metadata } from "next";
import HomeClient from "./HomeClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "NCT Network",
    description: "IT, Web & Network Developments",
    alternates: {
      canonical: "https://nctnetwork.co.uk",
      languages: {
        "en-GB": "https://nctnetwork.co.uk",
      },
    },
    metadataBase: new URL("https://nctnetwork.co.uk"),
  };
      <motion.footer
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="border-t dark:border-gray-800 border-gray-300 p-4 mt-4"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm dark:text-gray-500 text-gray-600 mb-4 md:mb-0">
            © {currentYear} NCTNetwork. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 bg-gray-300 dark:bg-gray-700 rounded-full p-1">
            <SunIcon className="h-5 w-5 dark:text-gray-400 text-orange-500" />
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
              className="data-[state=checked]:bg-orange-500 data-[state=unchecked]:bg-gray-200 border-2 border-gray-400"
              aria-label="Toggle dark mode"
            />
            <MoonIcon className="h-5 w-5 dark:text-orange-500 text-gray-400" />
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
