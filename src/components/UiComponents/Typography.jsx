import React from 'react';

const styles = {
	fontFamily: "'Patrick Hand', cursive",
};

export function HPrimary(props) {
	return (
		<h1
			style={styles}
			className={`text-6xl font-regular text-violet-800 text-center ${props.className}`}
		>
			{props.children}
		</h1>
	);
}
