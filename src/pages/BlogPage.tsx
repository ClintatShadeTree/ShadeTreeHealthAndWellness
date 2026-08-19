import { useState } from 'react';
import { X, Calendar, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';

const BlogCard = ({ blog, isFeatured, onClick }: { blog: any, isFeatured?: boolean, onClick: () => void }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-slate-blue-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-blue-700/50 shadow-xl relative flex flex-col hover:shadow-2xl hover:border-earth-green/40 transition-all duration-300 cursor-pointer ${isFeatured ? 'col-span-1 md:col-span-2 lg:col-span-3 border-earth-green/30 lg:p-12' : ''}`}
    >
      <BookOpen className={`w-10 h-10 text-earth-green absolute ${isFeatured ? 'top-10 right-10 opacity-40 scale-150' : 'top-6 right-6 opacity-30'}`} />
      
      <div className="mb-4">
        <h3 className={`font-sans font-semibold text-white leading-tight ${isFeatured ? 'text-3xl md:text-5xl mb-4 pr-20' : 'text-xl md:text-2xl pr-12'}`}>
          {blog.title}
        </h3>
        <div className="flex items-center gap-2 text-earth-green/80 text-sm">
          <Calendar size={14} />
          <span>{new Date(blog.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>
      
      <div className="relative h-32 overflow-hidden mb-6">
        <div className={`text-slate-300 leading-relaxed relative z-10 pr-6 [&_*]:font-sans ${isFeatured ? 'text-lg' : 'text-sm'}`}>
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-blue-800 to-transparent z-20 pointer-events-none" />
      </div>
      
      <div className="text-earth-green text-sm font-medium flex items-center hover:text-white transition-colors mt-auto">
        Read Full Post &rarr;
      </div>
    </div>
  );
};

export default function BlogPage({ data }: { data: any }) {
  const [selectedBlog, setSelectedBlog] = useState<any | null>(null);
  
  const pageHeader = data?.pageHeaders?.blog || {
    heading: "Blog",
    subheading: "Insights, stories, and guidance on your path to wellness."
  };
  
  // Sort blogs by date descending
  const sortedBlogs = data.blogs ? [...data.blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) : [];
  const featuredBlog = sortedBlogs[0];
  const otherBlogs = sortedBlogs.slice(1);

  return (
    <div className="pt-24 min-h-screen relative bg-[#070b0e]">
      {/* Background Element */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-slate-blue-900/50 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">{pageHeader.heading}</h2>
          <p className="text-xl text-slate-300 font-serif italic max-w-2xl mx-auto">{pageHeader.subheading}</p>
        </div>
        
        {sortedBlogs.length === 0 ? (
          <div className="text-center text-slate-400 py-20">
            <p>No posts available yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {featuredBlog && (
               <BlogCard 
                  blog={featuredBlog} 
                  isFeatured={true} 
                  onClick={() => setSelectedBlog(featuredBlog)} 
               />
            )}
            {otherBlogs.map((blog: any, index: number) => (
              <BlogCard 
                 key={index} 
                 blog={blog} 
                 onClick={() => setSelectedBlog(blog)} 
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#070b0e]/95 backdrop-blur-md"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div 
              initial={{ y: 20, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.95 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              className="bg-slate-blue-900 border border-slate-blue-700/50 p-6 md:p-12 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedBlog(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors z-10 bg-slate-blue-800 p-2 rounded-full"
              >
                <X size={24} />
              </button>
              
              <div className="mb-8 pt-4 border-b border-slate-blue-700/50 pb-8">
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight pr-12">
                  {selectedBlog.title}
                </h2>
                <div className="flex items-center gap-2 text-earth-green font-medium">
                  <Calendar size={16} />
                  <span>{new Date(selectedBlog.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
              
              <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-a:text-earth-green hover:prose-a:text-earth-green-hover">
                <ReactMarkdown>{selectedBlog.content}</ReactMarkdown>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
