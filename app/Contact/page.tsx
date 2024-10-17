import React from "react";

const ContactPage = () => {
  return (
    <section className="relative bg-grid-small-blue-500 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 py-16">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
      
      {/* Contact Form */}
      <div className="flex flex-col items-center justify-center mt-10 w-full max-w-lg">
        <form className="w-full bg-white p-6 rounded-lg shadow-md space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-300 focus:border-yellow-500 sm:text-sm"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Send Message
          </button>
        </form>
      </div>

      <p className="text-gray-800 mt-6">We will get back to you within 24-48 hours.</p>
    </section>
  );
};

export default ContactPage;
