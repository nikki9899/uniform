import Image from "next/image";

const Carrot = ({
    width = 24,
    height = 24,
    className = "",
    viewBox = "0 0 18 11",
    fill="none"
 
  }) => {
    return (
      <div     >
          <Image
                       className={className}  
                          width={24}
                          height={24}
                          src="/svgs/carrot.svg"
                          alt="Carrot "
                      />
      </div>
    );
  };
  export default Carrot;
  