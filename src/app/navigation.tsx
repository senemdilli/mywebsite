import Link from 'next/link';
import { useState } from 'react';

interface NavigationProps {
  userName: string;
  onProfileClick?: () => void;
  onMenuClick?: () => void;
}

export default function Navigation({ userName, onProfileClick, onMenuClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav>
      {/* User profile button */}
      <div className="absolute top-8 left-8">
        <button 
          onClick={onProfileClick}
          className="text-stone-200 px-6 py-2 rounded-full bg-stone-700 hover:bg-stone-800 transition-colors font-instrument-serif italic"
          aria-label="User profile"
        >
          {userName}
        </button>
      </div>
    </nav>
  );
}