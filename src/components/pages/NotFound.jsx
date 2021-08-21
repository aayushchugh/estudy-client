import React from 'react';

function NotFound() {
	return (
		<div className='h-screen relative'>
			<div className='absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
				<h1 className='text-violet-500 text-center text-8xl'>404</h1>
				<h3 className='text-center text-2xl'>Page Not Found</h3>
			</div>
		</div>
	);
}

export default NotFound;
