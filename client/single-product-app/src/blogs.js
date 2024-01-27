import React from "react";
import Zoom from '@mui/material/Zoom';
import { BlogsList } from './constants/blog';
import BlogCard from './components/blog/blogCard';
function Blogs() {
    return (
        <Zoom in={true}>
            <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
                <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 center">Blogs</h2>
                <div className="mt-6  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {
                        BlogsList.map(blog => {
                            return <BlogCard blog={blog} />
                        })
                    }
                </div>
            </div>
        </Zoom>
    )
}
export default Blogs;