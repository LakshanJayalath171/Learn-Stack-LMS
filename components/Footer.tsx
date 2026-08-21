import Image from "next/image";

const Footer = () => {
  return (
    <div className="border-t border-solid border-[1px] border-[#2ED8CF]">
        <div className="grid grid-cols-4">
            <div className="flex items-center justify-center py-4 p-4">
                <div>
                    <h1 className="text-special font-bold text-2xl mb-6">Learn Stack</h1>
                    <p className="text-secondary">Empowering the next generation of technical leaders through accessible, high-quality education.</p>
                </div>
            </div>
            <div className="flex items-center justify-center py-4">
                <div>
                    <h1 className="text-special text-2xl mb-6">PLATFORM</h1>
                    <p className="text-secondary font-light">LMS Feature</p>
                    <p className="text-secondary font-light">Course builder</p>
                    <p className="text-secondary font-light">Gamification</p>
                </div>
            </div>
            <div className="flex items-center justify-center py-4">
                <div>
                    <h1 className="text-special text-2xl mb-6">COMPANY</h1>
                    <p className="text-secondary font-light">About Us</p>
                    <p className="text-secondary font-light">Careers</p>
                    <p className="text-secondary font-light">Contact</p>
                </div>
            </div>
            <div className="flex items-center justify-center py-4">
                <div>
                    <h1 className="text-special text-2xl mb-6">Resources</h1>
                    <p className="text-secondary font-light">Blog</p>
                    <p className="text-secondary font-light">Help Center</p>
                    <p className="text-secondary font-light">Privacy Policy</p>
                </div>
            </div>
            <div className="flex items-center justify-center w-screen py-6">
                <p className="text-secondary font-light">© 2024 Learn Stack. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer