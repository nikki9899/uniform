import Image from 'next/image'

const Banner = ({ contactUsData }) => {
    if (!contactUsData) {
        return null; 
    }

    const { contact_number, email, label } = contactUsData;
    const imageUrl = contactUsData.image.data.attributes.formats.large.url;
    return (
        <div className="relative mb-10 md:mb-0">
            <div className="relative">
                <Image
                    src={imageUrl}
                    alt="Overview Image"
                    height={400}
                    width={1442}
                    className="h-[500px]  w-[100%] md:h-[585px] object-cover"
                />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <div>
                    <p className="mb-4 xl:mb-6 font-bold text-4xl md:text-6xl lg:text-8xl ">
                        {label}
                    </p>
                </div>
                <div className="mb-1 md:mb-2 bg-white text-black p-1 md:p-2 w-4/5 lg:w-1/3 flex text-[10px] md:text-base border rounded xl:rounded-2xl xx:text-[15px]">
                    <div className="w-[30%]">Contact no.:</div>
                    <div className="w-[69%]">{contact_number}</div>
                </div>
                <div className="bg-white text-black p-1 md:p-2 w-4/5 lg:w-1/3 flex justify-between text-[10px] md:text-base border rounded xl:rounded-2xl xx:text-[15px]">
                    <div className="w-[30%]">Email:</div>
                    <div className="w-[69%]">{email}</div>
                </div>
            </div>
        </div>
    )
}

export default Banner