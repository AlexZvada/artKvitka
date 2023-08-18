import Link from "next/link";
const A = ({ href, text, className, id, target, children }) => {
  return (
    <Link href={href} className={className ? className : ""} id={id ? id : ""} target={target? target : "_self"}>
      {text ? text : children}
    </Link>
  );
};

export default A;
