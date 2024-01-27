export default function BlogCard({blog}) {
    return (
        <div key={blog.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#s">
            <img className="rounded-t-lg" src={blog.img} alt="" />
        </a>
        <div className="p-5">
            <a href="#s">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.description}</p>
            <a href={blog.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-900 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
            </a>
        </div>
    </div>
    )
}