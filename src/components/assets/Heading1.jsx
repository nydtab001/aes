export default function Heading1({ children, width="w-24", className = "",  title = "" }) {
    return (
        <div className="flex items-center gap-4 max-w-4xl mx-auto">
  <div className={`${width} h-1 ${className} rounded-full`} />
  <h2 className={`${className} !bg-transparent whitespace-nowrap`}>{title}</h2>
  <div className={`${width} h-1 ${className} rounded-full`}/>
</div>
    );
}