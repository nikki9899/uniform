import { notFoundLabels } from "@/utils/labels/not-foundLabels";
import Link from "next/link";

export default function NotFound() {
  let { title, description, linkText } = notFoundLabels;
  return (
    <div className="  py-40  mx-auto max-w-screen-xl text-center ">
      <h2 className="text-6xl font-medium mb-2">{title}</h2>
      <p className=" text-3xl py-3">{description}</p>
      <Link href="/">{linkText}</Link>
    </div>
  );
}
