import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content.ts';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-stone-950/95 backdrop-blur-md border-t border-stone-800 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-lg">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 text-xs">
        
        {/* Call Jim */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-2 min-h-[52px] rounded-lg bg-amber-500 text-stone-950 font-bold active:bg-amber-600 transition-colors shadow-xs"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="leading-tight">Call Jim</span>
        </a>

        {/* Text Jim */}
        <a
          href={`sms:${BUSINESS_INFO.phoneRaw}?body=Hi%20Jim,%20I%20need%20a%20home%20inspection%20in%20Janesville/Rock%20County.`}
          className="flex flex-col items-center justify-center py-2 px-2 min-h-[52px] rounded-lg bg-stone-800 text-white font-semibold active:bg-stone-700 transition-colors border border-stone-700"
        >
          <MessageSquare className="w-4 h-4 mb-0.5 text-amber-400" />
          <span className="leading-tight">Text Jim</span>
        </a>

        {/* Book / Request */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-2 min-h-[52px] rounded-lg bg-stone-800 text-white font-semibold active:bg-stone-700 transition-colors border border-stone-700 cursor-pointer"
        >
          <Calendar className="w-4 h-4 mb-0.5 text-amber-400" />
          <span className="leading-tight">Book Online</span>
        </button>

      </div>
    </div>
  );
};
