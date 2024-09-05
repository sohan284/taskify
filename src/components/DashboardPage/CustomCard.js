import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function CustomCard({ title }) {
    return (
        <div className="shadow-xl p-5 rounded-lg">
            <ArrowForwardIcon />
            <p>{title}</p>
            <h2 className='text-gray-500 mt-3 text-[16px] font-semibold'>Total </h2>
            <p className='text-4xl font my-2 medium text-gray-600'>45</p>
            <button>See More <ArrowForwardIcon /></button>
        </div>
    );

}
export default CustomCard;