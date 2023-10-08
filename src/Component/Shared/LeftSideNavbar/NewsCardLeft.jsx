import PropTypes from 'prop-types';

const NewsCardLeft = ({news}) => {
    const {title, image_url} = news || {}

    return (
        <div className="card card-compact border rounded-none bg-base-100 w-full mb-5">
                <div className="p-3">
                    <figure><img src={image_url} alt={`image of ${title}`} /></figure>
                    <h2 className="card-title text-base">{title}</h2>
                </div>
            </div>
    );
};

NewsCardLeft.propTypes = {
    news: PropTypes.object,
};

export default NewsCardLeft;