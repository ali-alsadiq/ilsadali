import { useEffect } from 'react';


function Page404() {
    useEffect(() => {
        document.title = 'Ali Alsadiq | 404';
    });
    return (
        <div className='page-section'>
            This is 404
            want to go back home?
        </div>
    )
}

export default Page404
