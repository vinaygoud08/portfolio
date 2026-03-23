export default function Footer({ userData }) {
  const name = userData?.name || 'Developer';
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-400 text-sm">
          &copy; {year} {name}. All rights reserved.
        </div>
        
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          {userData?.github && <a href={`https://github.com/${userData.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>}
          {userData?.linkedin && <a href={userData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>}
        </div>
      </div>
    </footer>
  );
}
