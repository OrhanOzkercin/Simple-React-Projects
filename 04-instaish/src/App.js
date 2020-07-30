import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
	const [selectedImg, setSelecteImg] = useState(null);
	return (
		<div className='App'>
			<Title />
			<UploadForm />
			<ImageGrid setSelecteImg={setSelecteImg} />
			{selectedImg && (
				<Modal selectedImg={selectedImg} setSelecteImg={setSelecteImg} />
			)}
		</div>
	);
}

export default App;
