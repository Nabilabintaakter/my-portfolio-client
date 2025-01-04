import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='bg-[#1D293A] py-6'>
            <footer className="footer footer-center p-4">
                <div className="flex gap-x-4">
                    <a
                        href="mailto:nabilabintaakter@gmail.com"
                        className="w-12 h-12 flex justify-start items-center gap-x-2"
                    >
                        <img
                            src="https://i.ibb.co.com/fM0jgs0/7089163-gmail-google-icon.png"
                            className="w-12 h-12"
                            alt="Gmail Logo"
                        />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100011463773064" className="flex gap-x-1">
                        <div className="w-12 h-12 text-blue-600">
                            <FaFacebookSquare className="w-12 h-12" />
                        </div>
                    </a>
                    <a href="https://github.com/Nabilabintaakter" className="flex gap-x-1">
                        <div className="w-12 h-12 text-white">
                            <FaGithub className="w-12 h-12" />
                        </div>
                    </a>
                </div>
                <p className="text-sm -mt-6 text-gray-300">
                    © {currentYear} - Nabila Binta Akter
                </p>
            </footer>
        </div>
    );
};

export default Footer;