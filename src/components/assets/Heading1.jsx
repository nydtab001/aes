export default function Heading1({ children, className = "",  title = "" }) {
    return (
        <div className="flex items-center justify-center gap-4 max-w-4xl mx-auto">
  <div className={`w-24 h-1 ${className} rounded-full`} />
  <h2 className={`${className} !bg-transparent whitespace-nowrap`}>{title}</h2>
  <div className={`w-24 h-1 ${className} rounded full`}/>
</div>
    );
}