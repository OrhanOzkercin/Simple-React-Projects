import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelecteImg }) => {
	const { docs } = useFirestore('images');

	return (
		<div className='img-grid'>
			{docs &&
				docs.map((doc) => (
					<motion.div
						layout
						whileHover={{ opacity: 1 }}
						className='img-wrap'
						key={docs.id}
						onClick={() => setSelecteImg(doc.url)}
					>
						<motion.img
							src={doc.url}
							alt='uploaded-img'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1 }}
						/>
					</motion.div>
				))}
		</div>
	);
};

export default ImageGrid;
