import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiFillEye, AiOutlineShareAlt } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import StarRatings from 'react-star-ratings';

const NewsCard = ({news}) => {
    console.log(news);
    const {title, image_url, details, _id, author, rating,total_view} = news || {}
    return (
            <div className="card card-compact border rounded-none bg-base-100 w-full mb-5">
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
                <div className="p-3">
                    <h2 className="card-title">{title}</h2>
                    <figure><img src={image_url} alt={`image of ${title}`} /></figure>
                    <div className="card-body">
                    {
                        details.length > 200 
                        ?
                        <p>{details?.slice(0,200)} <Link to={`/news/${_id}`} className='text-blue-600 font-bold underline text-xs'>Read More....</Link></p>
                        :
                        <p>{details}</p>
                    }
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
            </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object,
};

export default NewsCard;