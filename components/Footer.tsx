import { Facebook, Linkedin, Instagram } from 'lucide-react'; // Importing Lucide icons
import SubFooter from './SubFooter';

const Footer = () => {
  return (
    <div className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Let's work together</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Contact Details */}
          <div className="bg-blue-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
            <p className="text-lg">
              <strong>Address:</strong> 228 Oron - Ikot Abasi Rd, Oron 523119, Akwa Ibom, Nigeria
            </p>
            <p className="text-lg">
              <strong>Telephone:</strong> +234 803 667 4036
            </p>
            <p className="text-lg">
              <strong>Email:</strong> tokunbootoyoandco@yahoo.com
            </p>
          </div>

          {/* Card 2: Office Hours */}
          <div className="bg-blue-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
            <p className="text-lg">
              <strong>Monday to Friday:</strong> 9:00 am to 4:00 pm
            </p>
            <p className="text-lg">Closed on Weekends</p>
          </div>

          {/* Card 3: Follow Us */}
          <div className="bg-blue-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/tokunbootoyo/" target="_blank" rel="noopener noreferrer">
                <Facebook className="text-3xl hover:text-blue-600" />
              </a>
              <a href="https://twitter.com/tokunbootoyo" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-3xl hover:text-blue-400" />
              </a>
              <a href="https://www.instagram.com/tokunbootoyo/" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-3xl hover:text-pink-500" />
              </a><span>Tokunbo Otoyo</span>
              
            </div>
          </div>
        </div>
      </div>
      <SubFooter/>
    </div>
  );
};

export default Footer;
