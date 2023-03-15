import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Ext1 from '../Ext1';
import { fetchPosts } from './postSlice';


const Category = () => {
    const { isLoading, posts, error } = useSelector((state) => state.posts)
    console.log(posts)

    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(fetchPosts())

    }, [dispatch])
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}

            <div className=' grid gap-5 gird-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-5 my-5 '>

                {posts.length && posts.map((categories) =>
                    <Ext1
                        key={categories._id}
                        categories={categories}
                    >

                    </Ext1>)}

            </div>

            
        </div>
    );
};

export default Category;