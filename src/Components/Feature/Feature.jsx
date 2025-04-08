import { FaCircleChevronRight } from "react-icons/fa6";
const Feature = ({feature}) => {
    return (
        <div className="flex gap-1">
            <p className="text-green-400 mt-1"><FaCircleChevronRight />
            </p>
            <p className="text-white">{feature}</p>
        </div>
    );
};
export default Feature;