

function DepartmentNotify(props) {
    const link = props.link;
    if(link && link.length > 5){
        return (
            <a href={`${link}`} className=" my-1 font-semibold text-[14px] flex text-start hover:text-blue-500">- {props.title}</a>
        )
    }
    return (
        <div className="my-1 flex text-start">- {props.title}</div>
    )

}

export default DepartmentNotify