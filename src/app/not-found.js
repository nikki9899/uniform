import Link from "next/link";

export default function NotFound() {
  return (
    <div className="  py-40  mx-auto max-w-screen-xl text-center ">
      <h2 className="text-6xl font-medium mb-2" >Not Found</h2>
      <p className=" text-3xl py-3" >Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
