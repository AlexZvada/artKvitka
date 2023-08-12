import Link from "next/link";
const A = ({ href, text, className, id, children }) => {
  return (
    <Link href={href} className={className ? className : ""} id={id ? id : ""}>
      {text ? text : children}
    </Link>
  );
};

export default A;
