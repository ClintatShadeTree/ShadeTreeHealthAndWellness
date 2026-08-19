import ReactMarkdown from 'react-markdown';

const disclaimerContent = `
# Disclaimer

### MEDICAL DISCLAIMER

Any content on this website is in no way a substitution for medical care, nor is it ever advised to make any changes to health or medical recommendations made by your healthcare providers. It is recommended that you discuss any new lifestyle changes such as diet and exercise with your primary care provider. Every effort is made to provide up to date, evidence based health recommendations, but this is no substitution for discussing any changes with your own healthcare provider. All information on this website is to be considered for informational purposes only, and to be used at your own risk. Despite best efforts, content or services on this website may, from time to time, contain errors. Furthermore, we are not responsible for the actions or failures of any third parties associated with this website. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE OR OUR MOBILE APPLICATION IS SOLELY AT YOUR OWN RISK.

### WEBSITE DISCLAIMER

The information provided by Shade Tree Health and Wellness ("we," "us," or "our") on shadetreehealthandwellness.com (the "Site") and our mobile application is for general informational purposes only. All information on the Site and our mobile application is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site or our mobile application. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR OUR MOBILE APPLICATION OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE AND OUR MOBILE APPLICATION. YOUR USE OF THE SITE AND OUR MOBILE APPLICATION AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE AND OUR MOBILE APPLICATION IS SOLELY AT YOUR OWN RISK.

### EXTERNAL LINKS DISCLAIMER

The Site and our mobile application may contain (or you may be sent through the Site or our mobile application) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.

### TESTIMONIALS DISCLAIMER

The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences. YOUR INDIVIDUAL RESULTS MAY VARY.

The testimonials on the Site are submitted in various forms such as text, audio and/or video, and are reviewed by us before being posted. They appear on the Site verbatim as given by the users, except for the correction of grammar or typing errors. Some testimonials may have been shortened for the sake of brevity where the full testimonial contained extraneous information not relevant to the general public.

The views and opinions contained in the testimonials belong solely to the individual user and do not reflect our views and opinions. We are not affiliated with users who provide testimonials, and users are not paid or otherwise compensated for their testimonials.

The testimonials on the Site are not intended, nor should they be construed, as claims that our products and/or services can be used to diagnose, treat, mitigate, cure, prevent, or otherwise be used for any disease or medical condition. No testimonials have been clinically proven or evaluated. 
`;

export default function DisclaimerPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-blue-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-slate-blue-800/80 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-slate-blue-700/50 shadow-xl prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-a:text-earth-green hover:prose-a:text-earth-green-hover [&_h1]:text-4xl [&_h1]:md:text-5xl [&_h1]:text-white [&_h1]:mb-8 [&_h3]:text-2xl [&_h3]:text-earth-green [&_h3]:mt-10 [&_h3]:mb-4">
          <ReactMarkdown>{disclaimerContent}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
