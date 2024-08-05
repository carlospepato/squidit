import { CalendarDays, Heart, MessageCircle } from "lucide-react";

interface CardProps {
  img: string;
  username: string;
  link: string;
  likes: number;
  comments: number;
  createAt: string;
}

export function Card({ img, username, link, likes, comments, createAt }: CardProps) {
  return (
    <div className='group relative w-full h-full sm:max-w-xs md:max-w-sm lg:max-w-md'>
      <a href={link}>
        <img src={img} alt="" className='w-full h-auto' />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <div className="flex flex-col items-center gap-3">
            <span>@{username}</span>
            <span className="text-sm w-full flex items-center justify-center gap-2"><Heart size={20} fill="white" />{likes}</span>
            <span className="text-sm w-full flex items-center justify-center gap-2"><MessageCircle size={20} fill="white" />{comments}</span>
            <span className="text-sm w-full flex items-center justify-center gap-2"><CalendarDays size={20} />{createAt}</span>
          </div>
        </div>
      </a>
    </div>
  )
}