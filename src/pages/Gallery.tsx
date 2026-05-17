import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect, useMemo } from 'react';
import { 
  LayoutGrid, 
  Sparkles, 
  Box, 
  Type, 
  ImageIcon, 
  X, 
  Download, 
  Maximize2,
  Palette,
  Megaphone,
  Layout,
  Camera,
  Layers,
  Video
} from 'lucide-react';

// Dynamic Asset Loading
// We use Vite's import.meta.glob to scan the assets directory automatically.
const designAssets = import.meta.glob<string>('../assets/Design/**/*.{png,jpg,jpeg,webp,svg,mp4}', { eager: true, as: 'url' });

interface Project {
  id: string;
  title: string;
  category: string;
  img: string;
  tags: string[];
  type: 'image' | 'video';
}

export function Gallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newImage, setNewImage] = useState({ url: '', title: '', category: 'mockups' });
  const [localProjects, setLocalProjects] = useState<Project[]>([]);

  useEffect(() => {
    setIsLoaded(true);
    // Load local storage items
    const saved = localStorage.getItem('portfolio_local_assets');
    if (saved) {
      try {
        setLocalProjects(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load local assets", e);
      }
    }
  }, []);

// Process glob results into structured data
  const staticProjects = useMemo<Project[]>(() => {
    const assets = Object.entries(designAssets).map(([path, url]) => {
      const parts = path.split('/');
      const categoryRaw = parts[parts.length - 2] || 'uncategorized';
      const filename = parts[parts.length - 1];
      const ext = filename.split('.').pop()?.toLowerCase() || '';
      const title = filename.split('.')[0].replace(/_/g, ' ').replace(/-/g, ' ');
      
      // Normalize category for ID
      const categoryId = categoryRaw.toLowerCase().replace(/\s+/g, '_');
      
      return {
        id: path,
        title: title.charAt(0).toUpperCase() + title.slice(1),
        category: categoryId,
        img: url as string,
        tags: [categoryRaw.toUpperCase(), ext.toUpperCase()],
        type: (ext === 'mp4' ? 'video' : 'image') as 'video' | 'image'
      };
    });

    // Filtering out the "placeholder" text files created during setup
    return assets.filter(a => 
      !a.title.includes('Basics 1') && 
      !a.title.includes('Ingenium 1') && 
      !a.title.includes('Marketing 1') && 
      !a.title.includes('Logo 1') && 
      !a.title.includes('Ai Trend 1')
    );
  }, []);

  const defaultProjects: Project[] = useMemo(() => [
    {
      id: 'def-1',
      title: 'Neon Catalyst',
      category: 'ai_trends',
      img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop',
      tags: ['AI TRENDS', 'VISION'],
      type: 'image'
    },
    {
      id: 'def-2',
      title: 'Futuristic Cortex',
      category: 'ai_trends',
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
      tags: ['AI TRENDS', 'UI'],
      type: 'image'
    },
    {
      id: 'def-b1',
      title: 'Structural Silence',
      category: 'mockups',
      img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop',
      tags: ['MOCKUPS', '3D'],
      type: 'image'
    },
    {
      id: 'def-b2',
      title: 'Minimalist Workspace',
      category: 'mockups',
      img: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop',
      tags: ['MOCKUPS', 'ESTHETIC'],
      type: 'image'
    },
    {
      id: 'def-m1',
      title: 'Vortex Visuals',
      category: 'marketing',
      img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop',
      tags: ['MARKETING', 'AD'],
      type: 'image'
    },
    {
      id: 'def-m2',
      title: 'Quantum Branding',
      category: 'marketing',
      img: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2070&auto=format&fit=crop',
      tags: ['MARKETING', 'SOCIAL'],
      type: 'image'
    },
    {
      id: 'def-ba1',
      title: 'Abstract Flow',
      category: 'design_basics',
      img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop',
      tags: ['BASICS', 'THEORY'],
      type: 'image'
    },
    {
      id: 'def-ba2',
      title: 'Chromatic Harmony',
      category: 'design_basics',
      img: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop',
      tags: ['BASICS', 'COLOR'],
      type: 'image'
    },
    {
      id: 'def-i1',
      title: 'Cyber Deck',
      category: 'ingenium',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
      tags: ['INGENIUM', 'HARDWARE'],
      type: 'image'
    },
    {
      id: 'def-i2',
      title: 'Retro Terminal',
      category: 'ingenium',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
      tags: ['INGENIUM', 'ANALOG'],
      type: 'image'
    },
    {
      id: 'def-l1',
      title: 'Brand Identity',
      category: 'logo_design',
      img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop',
      tags: ['LOGO', 'VECTOR'],
      type: 'image'
    },
    {
      id: 'def-l2',
      title: 'Monogram Study',
      category: 'logo_design',
      img: 'https://images.unsplash.com/photo-1572044162444-ad60f128bde2?q=80&w=2070&auto=format&fit=crop',
      tags: ['LOGO', 'MINIMAL'],
      type: 'image'
    },
    {
      id: 'def-t1',
      title: 'Organic Texture',
      category: 'thumbnails',
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
      tags: ['THUMBNAILS', 'ART'],
      type: 'image'
    }
  ], []);

  const projects = useMemo(() => [
    ...staticProjects, 
    ...defaultProjects.filter(dp => !staticProjects.some(sp => sp.title === dp.title)),
    ...localProjects
  ], [staticProjects, defaultProjects, localProjects]);

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImage.url) return;

    const project: Project = {
      id: `local-${Date.now()}`,
      title: newImage.title || 'Untitled Work',
      category: newImage.category,
      img: newImage.url,
      tags: ['Local', 'User Added'],
      type: 'image'
    };

    const updated = [...localProjects, project];
    setLocalProjects(updated);
    localStorage.setItem('portfolio_local_assets', JSON.stringify(updated));
    setShowAddModal(false);
    setNewImage({ url: '', title: '', category: 'mockups' });
  };

  const clearLocalProjects = () => {
    setLocalProjects([]);
    localStorage.removeItem('portfolio_local_assets');
  };

  // Generate categories from available folders
  const categories = useMemo(() => {
    const categoryMap = new Map<string, { id: string; label: string; icon: React.ReactNode }>();
    
    projects.forEach(p => {
      const id = p.category;
      
      // Select appropriate icon and label
      let icon = <Box className="w-4 h-4" />;
      const normalizedId = id.toLowerCase();
      let label = id.replace(/_/g, ' ').replace(/-/g, ' ');

      if (normalizedId.includes('ai')) {
        icon = <Sparkles className="w-4 h-4" />;
        label = "AI Trends";
      } else if (normalizedId.includes('logo')) {
        icon = <Type className="w-4 h-4" />;
        label = "Logo Design";
      } else if (normalizedId.includes('basic')) {
        icon = <Palette className="w-4 h-4" />;
        label = "Design Basics";
      } else if (normalizedId.includes('marketing')) {
        icon = <Megaphone className="w-4 h-4" />;
        label = "Marketing";
      } else if (normalizedId.includes('mockup')) {
        icon = <Layout className="w-4 h-4" />;
        label = "Mockups";
      } else if (normalizedId.includes('thumbnail')) {
        icon = <ImageIcon className="w-4 h-4" />;
        label = "Thumbnails";
      } else if (normalizedId.includes('ingenium')) {
        icon = <Layers className="w-4 h-4" />;
        label = "Ingenium";
      } else if (normalizedId.includes('video')) {
        icon = <Video className="w-4 h-4" />;
        label = "Videos";
      }

      // If this label already exists, we use the existing entry to merge them
      // but we need to keep track of ALL IDs that map to this label for filtering
      if (!categoryMap.has(label)) {
        categoryMap.set(label, { id, label, icon });
      }
    });

    const list = Array.from(categoryMap.values());

    return [
      { id: 'all', label: 'All Work', icon: <LayoutGrid className="w-4 h-4" /> },
      ...list.sort((a, b) => a.label.localeCompare(b.label))
    ];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeTab === 'all') return projects;
    
    // Find the category object that matches the current activeTab label or id
    const activeCategory = categories.find(c => c.id === activeTab);
    if (!activeCategory) return projects.filter(p => p.category === activeTab);

    // Filter projects whose label (when normalized) matches the active category label
    return projects.filter(p => {
      // Re-normalize project category to see if it matches the label
      let pLabel = p.category.replace(/_/g, ' ').replace(/-/g, ' ');
      const norm = p.category.toLowerCase();
      if (norm.includes('ai')) pLabel = "AI Trends";
      else if (norm.includes('logo')) pLabel = "Logo Design";
      else if (norm.includes('basic')) pLabel = "Design Basics";
      else if (norm.includes('marketing')) pLabel = "Marketing";
      else if (norm.includes('mockup')) pLabel = "Mockups";
      else if (norm.includes('thumbnail')) pLabel = "Thumbnails";
      else if (norm.includes('ingenium')) pLabel = "Ingenium";
      else if (norm.includes('video')) pLabel = "Videos";
      
      return pLabel === activeCategory.label;
    });
  }, [activeTab, projects, categories]);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isLoaded) return null;

  return (
    <section className="py-40 px-6 min-h-screen bg-black text-white relative">
      <div className="grain-overlay" />
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-neon/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-glow/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-neon font-display text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Archive Exhibit</span>
            <h1 className="text-display text-7xl md:text-9xl leading-[0.8] uppercase">
              DESIGN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/40 to-transparent italic font-light">ARCHIVE</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex gap-4"
          >
            <div 
              onClick={() => setShowAddModal(true)}
              className="w-24 h-24 rounded-full border border-white/10 flex flex-col items-center justify-center group cursor-pointer hover:border-brand-neon transition-colors duration-500 overflow-hidden"
            >
              <Sparkles className="w-6 h-6 text-white/20 group-hover:text-brand-neon transition-colors duration-500 mb-1" />
              <span className="text-[8px] font-bold tracking-widest text-white/10 group-hover:text-brand-neon">ADD NEW</span>
            </div>
          </motion.div>
        </div>

        {/* Local Storage Indicator */}
        {localProjects.length > 0 && (
          <div className="mb-8 flex items-center justify-between p-4 rounded-2xl bg-brand-neon/5 border border-brand-neon/20">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
              <p className="text-xs font-bold tracking-widest uppercase text-brand-neon/80">
                You have {localProjects.length} locally added images
              </p>
            </div>
            <button 
              onClick={clearLocalProjects}
              className="text-[10px] uppercase font-bold tracking-widest text-white/40 hover:text-red-400 transition-colors"
            >
              Clear All
            </button>
          </div>
        )}

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 mb-20 pb-8 border-b border-white/5"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-700 text-[10px] font-black tracking-[0.2em] uppercase border ${
                activeTab === cat.id 
                  ? 'bg-brand-neon text-black border-brand-neon shadow-[0_10px_40px_rgba(163,255,0,0.2)]' 
                  : 'text-white/30 border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat.icon} {cat.label}
              <span className={`ml-1 opacity-40 text-[9px] ${activeTab === cat.id ? 'text-black/60' : ''}`}>
                [{cat.id === 'all' ? projects.length : projects.filter(p => p.category === cat.id).length}]
              </span>
            </button>
          ))}
        </motion.div>

        {/* Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
                className="group relative"
                onClick={() => {
                  if (project.type === 'video') {
                    setSelectedVideo(project.img);
                  } else {
                    setSelectedImage(project.img);
                  }
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-zinc-950 border border-white/5 cursor-pointer">
                  {project.type === 'video' ? (
                    <div className="w-full h-full relative">
                      <video
                        src={project.img}
                        className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1s]"
                        muted
                        loop
                        onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                        onMouseOut={(e) => {
                          const v = e.target as HTMLVideoElement;
                          v.pause();
                          v.currentTime = 0;
                        }}
                      />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full glass flex items-center justify-center opacity-100 group-hover:opacity-0 transition-all duration-500">
                        <Video className="w-6 h-6 text-brand-neon" />
                      </div>
                    </div>
                  ) : (
                    <motion.img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[1s] ease-[0.23,1,0.32,1]"
                      loading="lazy"
                    />
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-700" />
                  
                  <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                    <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[8px] font-black tracking-[0.2em] uppercase bg-brand-neon/20 text-brand-neon px-2 py-1 rounded-sm backdrop-blur-md border border-brand-neon/10">{tag}</span>
                        ))}
                      </div>
                      <h3 className="text-display text-2xl md:text-3xl selection:bg-transparent tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/20 glass flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                      <Maximize2 className="w-4 h-4 text-brand-neon" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-40 text-center"
          >
            <div className="w-16 h-16 rounded-full border border-dashed border-white/20 flex items-center justify-center mx-auto mb-6">
              <ImageIcon className="w-6 h-6 text-white/10" />
            </div>
            <p className="text-white/20 text-sm tracking-widest uppercase">No assets found in {activeTab}</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox / Modal Preview */}
      <AnimatePresence>
        {(selectedImage || selectedVideo) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl"
            onClick={() => {
              setSelectedImage(null);
              setSelectedVideo(null);
            }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected vision"
                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl selection:bg-transparent"
                />
              ) : (
                <video
                  src={selectedVideo!}
                  controls
                  autoPlay
                  className="max-w-full max-h-full rounded-xl shadow-2xl"
                />
              )}
              
              {/* Close Button */}
              <button 
                className="absolute top-0 right-0 m-4 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-colors"
                onClick={() => {
                  setSelectedImage(null);
                  setSelectedVideo(null);
                }}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Controls */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-8 flex items-center gap-4">
                <button className="px-6 py-3 glass rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-brand-neon hover:text-black transition-all">
                  <Download className="w-4 h-4" /> Save Reference
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Add Image Modal */}
      <AnimatePresence>
        {showAddModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-900 border border-white/10 rounded-3xl p-8 max-w-md w-full"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold tracking-tight">ADD NEW VISION</h2>
                <button onClick={() => setShowAddModal(false)} className="text-white/40 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleAddProject} className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2">Image URL</label>
                  <input 
                    autoFocus
                    required
                    type="url"
                    placeholder="https://images.unsplash.com/..."
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-neon outline-none transition-colors"
                    value={newImage.url}
                    onChange={e => setNewImage({ ...newImage, url: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2">Title</label>
                  <input 
                    type="text"
                    placeholder="Project Name"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-neon outline-none transition-colors"
                    value={newImage.title}
                    onChange={e => setNewImage({ ...newImage, title: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2">Category</label>
                  <select 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-neon outline-none transition-colors appearance-none"
                    value={newImage.category}
                    onChange={e => setNewImage({ ...newImage, category: e.target.value })}
                  >
                    <option value="mockups">Mockups</option>
                    <option value="ai_trends">AI Trends</option>
                    <option value="logo_design">Logo Design</option>
                    <option value="marketing">Marketing</option>
                    <option value="design_basics">Basics</option>
                    <option value="thumbnails">Thumbnails</option>
                    <option value="ingenium">Ingenium</option>
                    <option value="video">Videos</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-brand-neon text-black rounded-xl font-bold tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Confirm Vision
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

