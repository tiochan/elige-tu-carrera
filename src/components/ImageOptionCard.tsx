'use client';

import Image from 'next/image';
import type { TreeOption } from '@/types';

interface Props {
  option: TreeOption;
  onSelect: () => void;
}

export default function ImageOptionCard({ option, onSelect }: Props) {
  return (
    <button
      onClick={onSelect}
      className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer w-full shadow-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-400"
    >
      <Image
        src={option.imageUrl}
        alt={option.imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      <div className="absolute inset-0 ring-0 group-hover:ring-4 ring-inset ring-violet-400 rounded-2xl transition-all duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-white font-bold text-base md:text-lg leading-snug drop-shadow text-left">
          {option.label}
        </p>
      </div>
    </button>
  );
}
