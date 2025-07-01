import React, { useState, useEffect } from 'react';

const OurFather = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading state (since endpoint/file is not attached yet)
        // This will keep loading indefinitely
        setLoading(true);
    }, []);

    if (loading) {
        return (<div className='h-[50vh] w-full mx-auto grid place-items-center text-center'>
            <p>
                Loading...!
            <span className='block'>Content will appear here...!</span>
            </p>
        </div>);
    }

    // Placeholder for future content
    return (
    <div className='h-[80vh] w-full'>Content will appear here.</div>
)
};

export default OurFather;