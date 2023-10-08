import { RiseLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-[75vh]">
            <RiseLoader
                color="#808080"
                margin={2}
                size={30}
                />
        </div>
    );
};

export default Loading;