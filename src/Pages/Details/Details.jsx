import { useParams } from 'react-router-dom';
import { AiFillEye, AiOutlineShareAlt } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import StarRatings from 'react-star-ratings';
import { useEffect, useState } from 'react';
import useGetNews from '../../Hock/useGetNews';
import Header from '../../Component/Shared/Header/Header';
import Navbar from '../../Component/Shared/Navbar/Navbar';
import RightSideNavbar from '../../Component/Shared/RightSideNavbar/RightSideNavbar';

const Details = () => {
    const [news, setNews] = useState()
    const {title, image_url, details, author, rating,total_view} = news || {}
    const [allNews] = useGetNews()
    const id = useParams()
    useEffect(()=>{
        const find = allNews?.find(item=> item?._id === id?.id)
        setNews(find);
    },[allNews, id?.id])
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="card card-compact border rounded-none bg-base-100 w-full mb-5 col-span-3 h-fit">
                <div className="p-3">
                    <figure className='w-full'><img src={image_url} alt={`image of ${title}`} className='w-full'/></figure>
                    <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center gap-5 pt-5">
                        <div className="flex items-center gap-3">
                        <StarRatings
                            rating={rating?.number}
                            starRatedColor="gold"
                            numberOfStars={5}
                            name='rating'
                            starDimension="24px"
                            starSpacing="1px"
                            />
                            <p>{rating?.number}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <AiFillEye className='text-xl'/>
                            <p className='font-light'>{total_view ? total_view : 'No view'}</p>
                        </div>
                    </div>
                </div>
                    <div className="flex justify-between items-center gap-5 p-3 bg-gray-200">
                    <div className="flex items-center gap-2">
                        <img src={author?.img} alt="" className='w-10 h-10 rounded-full'/>
                        <div className="">
                            <h1 className='text-sm font-semibold'>{author?.name}</h1>
                            <p className='text-xs font-light'>{author?.published_date}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-xl font-bold">
                        <BsBookmark/>
                        <AiOutlineShareAlt/>
                    </div>
                </div>

                </div>
                <RightSideNavbar/>
            </div>
        </div>
    );
};

export default Details;