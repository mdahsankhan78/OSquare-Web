import React from 'react'
import { Globe, Facebook, Twitter, Linkedin } from "lucide-react";

const SocialLinks = () => {
  return (
    <>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-500">
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Facebook"
            >
                <Facebook className="h-6 w-6" />
            </a>
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Twitter"
            >
                <Twitter className="h-6 w-6" />
            </a>
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="LinkedIn"
            >
                <Linkedin className="h-6 w-6" />
            </a>    
        </div>
    </>
  )
}

export default SocialLinks