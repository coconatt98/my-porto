
interface Props {
    level: string;
    year: string;
    school: string;
    bgColor?: string;
}

const EducationCard = (props: Props) => {
    const { level, year, school, bgColor } = props;

    return (
        <div className={`flex flex-col gap-3 ${bgColor} p-5 rounded-sm`}>
            <div className='flex flex-row justify-between'>
                <label>{level}</label>
                <div>{year}</div>
            </div>
            <p className='text-justify'>{school}</p>
        </div>
    )
}

export default EducationCard