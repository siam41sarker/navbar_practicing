const Route = ({route}) => {
    const {path,name} = route;
    return (
        <>
            {<li className="mr-10 p-2 w-24 hover:text-center hover:bg-violet-500 hover:font-bold hover:rounded-xl"><a href={path}>{name}</a></li>}
        </>
    );
};
export default Route;