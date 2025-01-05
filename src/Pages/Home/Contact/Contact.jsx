
const Contact = () => {
    return (
        <div className="bg-[#111827] py-20 px-8  text-white w-full ">
            <h2 className="text-[#3FC8B1] text-xl md:text-2xl font-semibold mb-2 text-center">Contact</h2>
            <hr className="w-1/5 mx-auto border-t-2 border-[#3FC8B1] mb-6 md:mb-16" />
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <form action="https://api.web3forms.com/submit" method="POST" className="md:w-1/2 bg-[#1F2937] p-8 rounded-md">
                    <h2 className="text-3xl font-thin mb-4 text-[#3FC8B1]">Let's work together</h2>
                    <p className="text-gray-300 mb-6 font-thin">Hope you will find me fit for your desired work and your wishes will come true.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="hidden" name="access_key" value={import.meta.env.REACT_APP_WEB3_API} />
                        <input required type="text" name="form_name" placeholder="Your Name" className="bg-[#1F2937] border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FC8B1]" />
                      
                        <input required type="email" name="email" placeholder="Email address" className="bg-[#1F2937] border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3FC8B1]" />
                        
                    </div>
                    <textarea required name="message" placeholder="Your message" rows="4" className="bg-[#1F2937] border border-gray-600 rounded-md px-4 py-2 mt-4 w-full focus:outline-none focus:ring-2 focus:ring-[#3FC8B1]"></textarea>
                    <button type='submit' className="bg-[#3FC8B1] text-white py-2 px-6 rounded-md mt-4 hover:bg-[#03816c] transition duration-300">Send Message</button>
                </form>
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4 text-[#3FC8B1] ">Contact Information</h2>
                    <p className="text-gray-300">Email: nabilabintaakter@gmail.com</p>
                    <p className="text-gray-300">Phone: (+880) 1959-611266</p>
                    <p className="text-gray-300">Address: Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
