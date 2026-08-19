import ReactMarkdown from 'react-markdown';

const privacyContent = `
# Privacy Policy

This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website. 

### What personal information do we collect from the people that visit our blog, website or app?
When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number, credit card information or other details to help you with your experience. 

### When do we collect information?
We collect information from you when you register on our site, place an order, subscribe to a newsletter, respond to a survey, fill out a form, or enter information on our site. 

### How do we use your information?
We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways: 
- To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested. 
- To improve our website in order to better serve you. 
- To allow us to better service you in responding to your customer service requests. 
- To administer a contest, promotion, survey or other site feature. 
- To quickly process your transactions.
- To ask for ratings and reviews of services or products 
- To follow up with them after correspondence (live chat, email or phone inquiries) 

### How do we protect your information?
We do not use vulnerability scanning and/or scanning to PCI standards. An external PCI-compliant payment gateway handles all CC transactions. We do not use Malware Scanning. 

We do not use an SSL certificate 
We do not need an SSL because an external PCI-compliant gateway handles all credit card transactions 

### Do we use 'cookies'?
We do not use cookies for tracking purposes. 

You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since the browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies. 

If you turn cookies off, Some of the features that make your site experience more efficient may not function properly or make your site experience more efficient and may not function properly. 

### Third-party disclosure
We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect our or others' rights, property, or safety. 

However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses. 

### Third-party links
Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites. 

### Google
Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. We may use Google AdSense Advertising, or its successors, on our website. Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy. 

We may implement the following: 
We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website. 

### Opting out:
Users may set preferences for how Google advertises you to using the Google Ad Settings page. Alternatively, you can opt-out by visiting the Network Advertising Initiative Opt Out page or by using the Google Analytics Opt Out Browser add-on. 

### You will be notified of any Privacy Policy changes:
- On our Privacy Policy Page 

### You Can change your personal information:
- By emailing us 
- By logging in to your account 

### Does our site allow third-party behavioral tracking?
We do not allow third-party behavioral tracking 

### COPPA (Children Online Privacy Protection Act)
When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online. 

We do not specifically market to children under the age of 13 years old. 

### Fair Information Practices
The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to complying with the various privacy laws that protect personal information. 

In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur: We will notify you via email or within the required, commercially reasonable period of time. 

### Contacting Us
If there are any questions regarding this privacy policy, you may contact us using the information below. 

Email: clint@ShadeTreeHealthandWellness.com 

Mail: 
Shade Tree Health & Wellness 
P.O. Box 964 
246 N. Barrington Rd. 
Tontitown, AR 72770
`;

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-blue-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-slate-blue-800/80 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-slate-blue-700/50 shadow-xl prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-a:text-earth-green hover:prose-a:text-earth-green-hover [&_h1]:text-4xl [&_h1]:md:text-5xl [&_h1]:text-white [&_h1]:mb-8 [&_h3]:text-2xl [&_h3]:text-earth-green [&_h3]:mt-10 [&_h3]:mb-4">
          <ReactMarkdown>{privacyContent}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
