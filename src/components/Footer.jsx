

const Footer = () => {
    return (
        <footer className="bg-zinc-50">
            <div className="flex flex-col items-center justify-center ">
                <h1 className="mt-10 text-3xl font-bold text-zinc-500">Gadget Heaven</h1>
                <p className="mt-3 text-base text-zinc-400">Leading the way in cutting-edge technology and innovation.</p>
            </div>
             
            <hr className="mt-3" />
            <div className="py-10 m-auto footer text-base-content max-w-7xl">

                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;